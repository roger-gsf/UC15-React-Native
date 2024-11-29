import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Card from "../components/Card";

const Home = () => {
    return (
        <View style={styles.container}>
                <Card />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        alignItems: 'center',
    },
});

export default Home;
