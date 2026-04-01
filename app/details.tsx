import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, View, ScrollView, StyleSheet } from "react-native";

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

export default function Details() {
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    ></ScrollView>
  );
}
