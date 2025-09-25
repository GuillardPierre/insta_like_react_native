import FeedMessage from "@/components/FeedMessage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ConversationScreen() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.title}>Conversation</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Recherche contacts"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FeedMessage searchText={searchText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: "90%",
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
});
