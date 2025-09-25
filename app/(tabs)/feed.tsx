import Feed from "@/components/Feed";
import StoryBanner from "@/components/StoryBanner";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Feed</Text>
      </View>
      <StoryBanner />
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  titleContainer: {
    width: "100%",
    backgroundColor: "white",
    zIndex: 100,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 50,
    paddingLeft: 20,
  },
});
