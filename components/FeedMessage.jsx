import { router } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import conversations from "../assets/json/conversations.json";
import users from "../assets/json/users.json";

export default function FeedMessage({ searchText = "" }) {
  const filteredConversations = conversations.filter((conversation) => {
    const user = users.find((user) => user.id === conversation.userId);
    return user && user.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const renderConversation = ({ item: conversation }) => {
    const user = users.find((user) => user.id === conversation.userId);

    return (
      <Pressable
        onPress={() => router.push(`/message/${user?.id}`)}
        style={styles.conversation}
      >
        <Image style={styles.avatar} source={{ uri: user?.url }} />
        <View style={styles.conversationContent}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.text}>{conversation.text}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={filteredConversations}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderConversation}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  conversation: {
    marginBlock: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
  },
  conversationContent: {
    overflow: "hidden",
    width: "85%",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 90,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    flexShrink: 1,
    flexWrap: "wrap",
  },
});
