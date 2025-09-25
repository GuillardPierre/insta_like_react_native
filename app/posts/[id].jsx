import { addFavorite, removeFavorite } from "@/app/reducers/favoriteSlice";
import Feather from "@expo/vector-icons/Feather";
import { useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import posts from "@/assets/json/feed.json";

export default function PostsScreen() {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post.itemId === Number(id));

  const dispatch = useDispatch();
  const myLikes = useSelector((state) => state.favorites.favorites);

  const handleFavoriteToggle = () => {
    const isLiked = myLikes.find(like => like.itemId === post.itemId);
    if (isLiked) {
      dispatch(removeFavorite(post));
    } else {
      dispatch(addFavorite(post));
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: post.url }} />
      <View style={styles.infoContainer}>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoTextSpan}> Likes</Text>
          <Text style={styles.infoText}>{post.likes}</Text>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoTextSpan}> Conversations</Text>
          <Text style={styles.infoText}>{post.conversations}</Text>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoTextSpan}> Follow</Text>
          <Text style={styles.infoText}>{Math.floor(Math.random() * 100)}</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <Pressable style={styles.button} onPress={handleFavoriteToggle}>
          <Feather
            name="heart"
            size={34}
            color={myLikes.find(like => like.itemId === post.itemId) ? "red" : "black"}
          />
        </Pressable>
        <Feather name="bookmark" size={34} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.7,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  infoContainer2: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  info: {
    fontSize: 16,
  },
  infoTextSpan: {
    fontSize: 18,
  },
  infoText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    width: 120,
  },
  button: {
    // Pas besoin de styles spéciaux, le bouton est maintenant dans le conteneur
  },
});
