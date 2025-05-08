import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: film.image }} style={styles.image} />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{film.name ?? "Nome não disponível"}</Text>
        <Text style={styles.text}>
          🧙‍♂️ Casa: {film.house || "Não informado"}
        </Text>
        <Text style={styles.text}>
          🐾 Patrono: {film.patronus || "Não informado"}
        </Text>
        <Text style={styles.text}>
          🎭 Ator: {film.actor || "Não informado"}
        </Text>
        <Text style={styles.text}>
          🎂 Nascimento: {film.dateOfBirth || "Não informado"} ({film.yearOfBirth || "?"})
        </Text>
        <Text style={styles.text}>
          ✨ Varinha: {film.wand.wood} com núcleo de {film.wand.core}, {film.wand.length}" 
        </Text>
        <Text style={styles.text}>
          ⚡ Status: {film.alive ? "Vivo(a)" : "Falecido(a)"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 16,
    backgroundColor: "#2a2a2a",
  },
  image: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.6,
    borderRadius: 8,
    resizeMode: "cover",
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
});
