import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import users from "../assets/json/users.json";
import PhotoInfo from "./PhotoInfo";

export default function Feed() {
  const posts = useSelector((state) => state.posts.posts);

  const orderedPosts = [...posts].sort((a, b) => b.itemId - a.itemId);

  console.log(orderedPosts);

  return (
    <ScrollView style={styles.container}>
      {orderedPosts.map((item) => (
        <Pressable
          onPress={() => router.push(`/posts/${item.itemId}`)}
          style={styles.container}
          key={item.itemId}
        >
          <PhotoInfo
            item={item}
            user={users.find((user) => user.id === item.authorId)}
          />
          <Image style={styles.image} source={{ uri: item.url }} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});
