import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";

export default function AddEntryScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title || !content) {
      Alert.alert(
        "Perhatian",
        "Beri pupuk (judul) dan air (isi) pada tanaman ceritamu!",
      );
      return;
    }
    const newEntry = {
      id: Math.random().toString(),
      title,
      content,
      date: new Date().toLocaleDateString("id-ID"),
    };
    // Navigasi kembali sambil membawa data baru
    navigation.navigate("Home", { newEntry });
  };

  return (
    <View style={styles.container}>
      <Header title="Tulis Jurnal Daun 🍃" />
      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Judul Hari Ini..."
          value={title}
          onChangeText={setTitle} // Update State
        />
        <TextInput
          style={styles.inputContent}
          placeholder="Ceritakan harimu di sini..."
          multiline
          value={content}
          onChangeText={setContent} // Update State
        />
        <CustomButton title="Simpan Catatan" icon="save" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9" },
  form: { flex: 1, padding: 20 },
  inputTitle: {
    backgroundColor: "#fff",
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#1B5E20",
    elevation: 2,
  },
  inputContent: {
    backgroundColor: "#fff",
    fontSize: 16,
    padding: 15,
    borderRadius: 10,
    flex: 1,
    textAlignVertical: "top",
    marginBottom: 20,
    color: "#333",
    elevation: 2,
  },
});
