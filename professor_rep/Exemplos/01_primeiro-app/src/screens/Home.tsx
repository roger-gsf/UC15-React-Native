import { Text, StyleSheet, ScrollView } from "react-native";
import Post from "../components/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Meu título</Text>
        <Post title="Texto 1" />
        <Post title="Texto 2" />
        <Post title="Texto 3" />
        <Post title="Texto 4" />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    flex: 1,
  },
  scrollContent: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#f1f1f1",
    fontSize: 34,
    marginBottom: 8,
  },
});

export default Home;
