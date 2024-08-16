import { View, Text, SafeAreaView } from "react-native"
import Card from "../components/Card"
import Header from "../components/Header"
import Main from "../components/Main"

const Feed = () => {
    return (
        <SafeAreaView>
            <Card />
            <Header />
            <Main />
        </SafeAreaView>
    )
}

export default Feed;