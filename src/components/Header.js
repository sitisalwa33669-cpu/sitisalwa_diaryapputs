import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  // Menggunakan Props
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop",
      }}
      style={styles.headerBg}
      imageStyle={{ opacity: 0.6 }}
    >
      <View style={styles.overlay}>
        <Ionicons name="leaf" size={32} color="#fff" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  headerBg: { width: "100%", height: 120, justifyContent: "flex-end" },
  overlay: {
    backgroundColor: "rgba(27, 94, 32, 0.7)",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    fontFamily: "serif",
  },
});
