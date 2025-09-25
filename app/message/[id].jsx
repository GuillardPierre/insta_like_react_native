import messages from "@/assets/json/messages.json";
import users from "@/assets/json/users.json";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MessageScreen() {
  const { id } = useLocalSearchParams();
  const user = users.find((user) => user.id === Number(id));
  const [newMessage, setNewMessage] = useState("");
  const [messageList, setMessageList] = useState(messages.messages);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messageList.length + 1,
        type: "to",
        text: newMessage.trim(),
      };
      setMessageList([...messageList, newMsg]);
      setNewMessage("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === "to" ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: user?.url }} />
        <Text style={styles.name}>{user?.name}</Text>
      </View>

      <FlatList
        style={styles.messagesList}
        data={messageList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Tapez votre message..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    gap: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
