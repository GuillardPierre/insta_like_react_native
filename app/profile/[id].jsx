import users from "@/assets/json/users.json";
import UserPhotos from "@/components/UserPhotos";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams();
  const user = users.find((user) => user.id === Number(id));
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={{ uri: user.url }} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <UserPhotos />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  id: {
    fontSize: 18,
    color: "#666",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
    paddingTop: 20,
    paddingLeft: 20,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
