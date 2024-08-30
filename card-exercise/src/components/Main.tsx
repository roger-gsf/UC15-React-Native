import { View, Image, StyleSheet } from "react-native";
import ProfilePhoto from "../assets/ProfilePhoto.jpg"; // Importando a imagem

const Main = () => {
  return (
    <View style={styles.main}>
      <Image
        source={ProfilePhoto} // Usando a imagem importada
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f7f7f7",
    padding: 10,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default Main;
