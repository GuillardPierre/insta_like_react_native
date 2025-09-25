import profile from "@/assets/json/profile.json";
import users from "@/assets/json/users.json";
import Feed from "@/components/Feed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfilesScreen() {
  const myUser = users[0];
  const myProfile = profile;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.title}>Profil</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={{ uri: myUser.url }} />
        <Text style={styles.name}>{myUser.name}</Text>
        <Text style={styles.username}>
          @{myUser.name.split(" ").join("").toLowerCase()}
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsContainer2}>
          <Text style={styles.stats}> Posts</Text>
          <Text style={styles.statsSpan}>{myProfile.postsNumber} </Text>
        </View>
        <View style={styles.statsContainer2}>
          <Text style={styles.stats}> Followers</Text>
          <Text style={styles.statsSpan}>{myProfile.followersNumber}</Text>
        </View>
        <View style={styles.statsContainer2}>
          <Text style={styles.stats}> Follows</Text>
          <Text style={styles.statsSpan}>{myProfile.followsNumber}</Text>
        </View>
      </View>
      <Feed />
    </View>
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
  profileContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingTop: 20,
    paddingLeft: 20,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  username: {
    fontSize: 16,
    color: "black",
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  stats: {
    fontSize: 16,
    color: "black",
  },
  statsSpan: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  statsContainer2: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
