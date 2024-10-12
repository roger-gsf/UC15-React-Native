import { View, Text, StyleSheet } from "react-native";
import Projects from "./Projects";

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
        -{">"} JavaScript{'\n'}
        -{">"} TypeScript{'\n'}
        -{">"} NodeJS{'\n'}
        -{">"} Java{'\n'}
        -{">"} MySQL{'\n'}
        -{">"} SQL Server{'\n'}
        -{">"} Python
      </Text>
      <Projects />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#171F26",
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#005C53",
  },
  text: {
    fontSize: 16,
    color: "#d9d9d9",
    marginBottom: 20,
  },
});

export default Main;