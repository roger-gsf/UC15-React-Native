import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Róger Ferreira <br></br> Software Developer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#014017",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        color: "#ffffff",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default Header;
