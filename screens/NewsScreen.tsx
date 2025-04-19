import React from "react"
import { View, Text, FlatList, Image, StyleSheet } from "react-native"

const data = Array.from({ length: 9 }).map((_, i) => ({
  id: i.toString(),
  title: "Заголовок новини",
  date: "Дата новини",
  description: "Короткий текст новини",
}))

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Новини</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image source={require("../assets/logo.png")} style={styles.image} />
            <View style={styles.newsContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  newsItem: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: "cover",
  },
  newsContent: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
  description: {
    fontSize: 14,
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 12,
    color: "#444",
    fontStyle: "italic",
  },
})
