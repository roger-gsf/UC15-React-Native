import { View, Text, StyleSheet } from "react-native";

const Main = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>About me</Text>
      <Text style={styles.text}>
        My name is Róger Ferreira, I'm 18 years old and I'm a programming student. 
        Currently, I'm doing a technician course in systems development and I have knowledge in several programming languages.
      </Text>
      <Text style={styles.title}>Skills</Text>
      <Text style={styles.text}>
        - JavaScript{'\n'}
        - TypeScript{'\n'}
        - NodeJS{'\n'}
        - Java{'\n'}
        - MySQL{'\n'}
        - SQL Server{'\n'}
        - Python
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#014017",
  },
  text: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 20,
  },
});

export default Main;