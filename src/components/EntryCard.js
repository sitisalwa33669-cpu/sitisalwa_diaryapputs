import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function EntryCard({ entry }) {
  // Menggunakan Props untuk menerima data
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="rose" size={20} color="#388E3C" />
        <Text style={styles.date}>{entry.date}</Text>
      </View>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.content}>{entry.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F1F8E9",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: "#4CAF50",
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  date: { marginLeft: 8, color: "#689F38", fontSize: 12, fontWeight: "bold" },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B5E20",
    marginBottom: 5,
  },
  content: { fontSize: 14, color: "#333", lineHeight: 22 },
});
