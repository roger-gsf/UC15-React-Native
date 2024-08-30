import { Image, StyleSheet } from "react-native";

const Main = () => {
  return (
    <>
      <Image
        source={{ uri: "https://robohash.org/anything" }}
        style={styles.img}
      ></Image>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
});

export default Main;
