import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface Pokemon {
  name: string;
  image: string;
  imageBack: string;
  types: PokemonType[];
}

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

const styles = StyleSheet.create({
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    textAlign: "center",
  },
});

const colorsByType: Record<string, string> = {
  grass: "#98D8A0",
  fire: "#F4A26E",
  water: "#7EB8F7",
  bug: "#C6D97F",
  normal: "#C5C5A8",
  flying: "#B8D4F0",
  poison: "#C5A0D4",
  electric: "#F7E57A",
  ground: "#E8C98A",
  fairy: "#F4B8D4",
  fighting: "#E8A090",
  psychic: "#F7A8C0",
  rock: "#C5B99A",
  ghost: "#A8A0C8",
  ice: "#A8E8E8",
  dragon: "#A0B8F0",
  steel: "#C0CDD4",
  dark: "#A89880",
};

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    //fetch pokiemons
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=100",
      );

      // Fetch Detailed info for each pokemon in Parallel
      const detailedPokemons = await Promise.all(
        res.data.results.map(async (pokemon: any) => {
          const detailsRes = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: detailsRes.data.sprites.front_default,
            imageBack: detailsRes.data.sprites.back_default,
            types: detailsRes.data.types,
          };
        }),
      );

      setPokemons(detailedPokemons); // this contains the image of the pokemon
      console.log(JSON.stringify(detailedPokemons, ["name", "image"], 2));
    } catch (err: any) {
      console.log(err.response.status);
      console.log(err.response.data);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    >
      {pokemons.map((pokemon: any) => (
        <Link
          key={pokemon.name}
          href={{ pathname: "/details", params: { name: pokemon.name } }}
        >
          {" "}
          <View
            style={{
              backgroundColor: colorsByType[pokemon.types[0]?.type.name] + 60,
              padding: 20,
              borderRadius: 20,
            }}
          >
            <Text style={styles.name}>{pokemon.name} </Text>
            <Text style={styles.type}>{pokemon.types[0]?.type.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: pokemon.image }}
                style={{ width: 150, height: 150 }}
              />
              <Image
                source={{ uri: pokemon.imageBack }}
                style={{ width: 150, height: 150 }}
              />
            </View>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}
