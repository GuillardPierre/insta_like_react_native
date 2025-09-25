import profile from "@/assets/json/profile.json";
import { Image } from "expo-image";
import { Dimensions, ScrollView, StyleSheet } from "react-native";

export default function UserPhotos() {
  return (
    <ScrollView horizontal style={styles.container}>
      {profile.addedImages.map((image) => (
        <Image
          style={styles.image}
          key={image.id}
          source={{ uri: image.url }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  image: {
    height: Dimensions.get("window").height * 0.6,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    justifySelf: "center",
    alignSelf: "center",
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
