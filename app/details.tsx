import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();

  console.log(params);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  async function fetchPokemonDetails() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`,
    );
    const data = await response.json();
    console.log(data);
  }

  // can display the
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    ></ScrollView>
  );
}

const styles = StyleSheet.create({});
