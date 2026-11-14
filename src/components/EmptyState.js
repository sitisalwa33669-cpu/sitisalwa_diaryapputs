import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Ionicons name="leaf-outline" size={80} color="#81C784" />
      <Text style={styles.text}>Taman tulisanmu masih kosong.</Text>
      <Text style={styles.subtext}>Mulai tanam ceritamu hari ini!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: { fontSize: 18, color: "#388E3C", fontWeight: "bold", marginTop: 15 },
  subtext: { fontSize: 14, color: "#666", marginTop: 5 },
});
