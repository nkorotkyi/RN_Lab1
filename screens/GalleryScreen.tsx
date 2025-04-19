import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

export default function GalleryScreen() {
  const data = Array.from({ length: 12 }, (_, i) => i)
  return (
    <FlatList
      data={data}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={() => <View style={styles.card} />}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    height: 120,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
})
