import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Card = () => {
  return (
    <View style={styles.card}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d9d9d9',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    flex: 1
  },
});

export default Card;
