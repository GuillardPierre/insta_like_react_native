import { router } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import users from "../assets/json/users.json";

export default function StoryBanner() {
  const handleProfilePress = (id) => {
    router.push(`/profile/${id}`);
  };

  return (
    <ScrollView horizontal style={styles.container}>
      <View style={styles.addStory}>
        <Text style={styles.addStoryText}>+</Text>
      </View>
      {users.map((user) => (
        <Pressable
          onPress={() => handleProfilePress(user.id)}
          style={styles.userContainer}
          key={user.id}
        >
          <Image style={styles.userImage} source={{ uri: user.url }} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addStory: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  addStoryText: {
    fontSize: 70,
    fontWeight: "200",
    color: "black",
    transform: [{ translateY: -5 }],
  },
  container: {
    gap: 20,
    height: 130,
    paddingHorizontal: 20,
    backgroundColor: "rgba(245, 245, 245, 0.9)",
  },
  userContainer: {
    width: 100,
    alignSelf: "center",
  },
  userImage: {
    width: 90,
    height: 90,
    borderRadius: 90,
    opacity: 1,
  },
});
