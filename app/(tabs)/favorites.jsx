import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const myLikes = useSelector((state) => state.favorites.favorites);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.title}>Favorites</Text>
      </View>
      {myLikes.map((item) => (
        <Pressable
          onPress={() => router.push(`/posts/${item.itemId}`)}
          key={item.itemId}
        >
          <Image source={{ uri: item.url }} style={styles.image} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    gap: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.7,
    borderRadius: 10,
    marginBottom: 10,
  },
});
