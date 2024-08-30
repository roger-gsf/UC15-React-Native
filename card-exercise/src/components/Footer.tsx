import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Contact: rogergustavosf@gmail.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#402319",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    footerText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 14,
    },
});

export default Footer;