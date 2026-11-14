import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import EmptyState from "../components/EmptyState";
import EntryCard from "../components/EntryCard";
import Header from "../components/Header";

export default function HomeScreen({ navigation, route }) {
  // Penggunaan Hooks dan State
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (route.params?.newEntry) {
      setEntries((prev) => [route.params.newEntry, ...prev]);
    }
  }, [route.params?.newEntry]); // Hooks bereaksi ketika ada data baru dari navigasi

  return (
    <View style={styles.container}>
      <Header title="Taman Ceritaku 🌿" />
      <View style={styles.content}>
        {entries.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={entries}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <EntryCard entry={item} />} // Mengirim data via Props
            showsVerticalScrollIndicator={false}
          />
        )}
        <CustomButton
          title="Tanam Cerita Baru"
          icon="add-circle"
          onPress={() => navigation.navigate("AddEntry")} // Navigasi antar halaman
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9" },
  content: { flex: 1, padding: 20 },
});
