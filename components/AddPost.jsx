import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { addPost } from "../app/reducers/postSlice";

export default function AddPost() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const generateUniqueId = () => {
    return Date.now() + Math.floor(Math.random() * 1000);
  };

  const handleSubmit = () => {
    if (!image || !description.trim()) {
      Alert.alert(
        "Erreur",
        "Veuillez sélectionner une image et ajouter une description"
      );
      return;
    }

    const newPost = {
      itemId: generateUniqueId(),
      authorId: 1, // ID de l'utilisateur actuel (à adapter selon votre système d'auth)
      timeStamp: "À l'instant",
      url: image,
      likes: "0",
      conversations: "0",
    };

    dispatch(addPost(newPost));

    Alert.alert("Succès", "Image ajoutée avec succès !", [
      {
        text: "OK",
        onPress: () => {
          setDescription("");
          setImage(null);
          router.push("/(tabs)/feed");
        },
      },
    ]);
  };

  const handleReset = () => {
    setDescription("");
    setImage(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Ajouter une nouvelle image</Text>

        <View style={styles.imagePickerContainer}>
          <TouchableOpacity
            style={[styles.button, styles.pickImageButton]}
            onPress={pickImage}
          >
            <Text style={styles.buttonText}>
              {image ? "Changer l'image" : "Sélectionner une image"}
            </Text>
          </TouchableOpacity>

          {image && (
            <View style={styles.imagePreviewContainer}>
              <Image source={{ uri: image }} style={styles.imagePreview} />
            </View>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Décrivez votre image..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={handleReset}
          >
            <Text style={[styles.buttonText, styles.resetButtonText]}>
              Réinitialiser
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
            disabled={!image || !description.trim()}
          >
            <Text style={styles.buttonText}>Ajouter l'image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  imagePickerContainer: {
    marginBottom: 20,
  },
  pickImageButton: {
    backgroundColor: "#007AFF",
    marginBottom: 15,
  },
  imagePreviewContainer: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF3B30",
  },
  submitButton: {
    backgroundColor: "#34C759",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resetButtonText: {
    color: "#FF3B30",
  },
});
