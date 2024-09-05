import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Projects from "./Projects";

const Card = () => {
  return (
    <View style={styles.card}>
      <Header />
      <Main />
      <Projects />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
    width: "100%",
  },
});

export default Card;
