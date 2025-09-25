import { Image, StyleSheet, Text, View } from "react-native";

export default function PhotoInfo({ item, user }) {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.avatar} source={{ uri: user.url }} />
      <View style={styles.authorContainer}>
        <Text style={styles.authorName}>{user.name}</Text>
        <Text style={styles.authorName}>{item.timeStamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
    transform: [{ translateY: 70 }, { translateX: 30 }],
    zIndex: 100,
  },
  authorContainer: {
    alignItems: "flex-start",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 90,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
