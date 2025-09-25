import { Image, ScrollView, StyleSheet, View } from "react-native";
import profile from "../assets/json/profile.json";

export default function PersonalFeed() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.gridContainer}>
                {profile.likedImages.map((item) => (
                    < View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: item.url }} />
                    </ View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    imageContainer: {
        width: "48%",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
});
