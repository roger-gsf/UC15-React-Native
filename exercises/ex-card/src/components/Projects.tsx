import { View, Text, StyleSheet } from "react-native";

const Projects = () => {
    return (
        <View style={styles.projects}>
            <Text style={styles.title}>Projects</Text>
            <Text style={styles.text}>
                Here are some of my projects: {'\n'}
                - Project 1: Project description.{'\n'}
                - Project 2: Project description.{'\n'}
                - Project 3: Project description.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    projects: {
        marginBottom: 20,
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
    },
});

export default Projects;
