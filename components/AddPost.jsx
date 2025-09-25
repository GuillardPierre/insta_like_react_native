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

export default function AddPost() {
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [previewVisible, setPreviewVisible] = useState(false);

    const handlePreviewImage = () => {
        if (imageUrl.trim()) {
            setPreviewVisible(true);
        } else {
            Alert.alert("Erreur", "Veuillez entrer une URL d'image valide");
        }
    };

    const handleSubmit = () => {
        if (!imageUrl.trim() || !description.trim()) {
            Alert.alert("Erreur", "Veuillez remplir tous les champs");
            return;
        }
        
        Alert.alert("Succès", "Image ajoutée avec succès !", [
            {
                text: "OK",
                onPress: () => {
                    setImageUrl("");
                    setDescription("");
                    setPreviewVisible(false);
                },
            },
        ]);
    };

    const handleReset = () => {
        setImageUrl("");
        setDescription("");
        setPreviewVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Ajouter une nouvelle image</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>URL de l'image</Text>
                    <TextInput
                        style={styles.input}
                        value={imageUrl}
                        onChangeText={setImageUrl}
                        placeholder="https://example.com/image.jpg"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        keyboardType="url"
                    />
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
                        style={[styles.button, styles.previewButton]}
                        onPress={handlePreviewImage}
                    >
                        <Text style={styles.buttonText}>Prévisualiser</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.resetButton]}
                        onPress={handleReset}
                    >
                        <Text style={[styles.buttonText, styles.resetButtonText]}>
                            Réinitialiser
                        </Text>
                    </TouchableOpacity>
                </View>

                {previewVisible && imageUrl && (
                    <View style={styles.previewContainer}>
                        <Text style={styles.previewTitle}>Aperçu :</Text>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.previewImage}
                            onError={() => {
                                Alert.alert("Erreur", "Impossible de charger l'image");
                                setPreviewVisible(false);
                            }}
                        />
                        {description && (
                            <Text style={styles.previewDescription}>{description}</Text>
                        )}
                    </View>
                )}

                <TouchableOpacity
                    style={[styles.button, styles.submitButton]}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Ajouter l'image</Text>
                </TouchableOpacity>
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
    previewButton: {
        backgroundColor: "#007AFF",
    },
    resetButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#FF3B30",
    },
    submitButton: {
        backgroundColor: "#34C759",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    resetButtonText: {
        color: "#FF3B30",
    },
    previewContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    previewTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "#333",
    },
    previewImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    previewDescription: {
        fontSize: 14,
        color: "#666",
        fontStyle: "italic",
    },
});
