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
        backgroundColor: "#f7f7f7",
        padding: 20,
        marginBottom: 20,
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
    },
});

export default Projects;