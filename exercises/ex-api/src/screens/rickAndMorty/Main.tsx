import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native"
import { Search, TextField } from "./styles";
import { useState } from "react";

const Main = () => {

    const [search, setSearch] = useState<string>('');
    const [data, setData] = useState<string>('');

    type ItemProps = { title: string };

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const Item = ({ title }: ItemProps) => (
        <View style={styles.itemCss}>
            <Text style={styles.titleCss}>{title}</Text>
        </View>
    );
    return (
        <SafeAreaView style={{ borderWidth: 4, borderColor: "#fff" }}>
            <Text>Rick and Morty API searching</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <TextField onChangeText={setSearch} placeholder="Enter the character ID"/>
                <Search>Search</Search>
            </View>
            <FlatList style={styles.flatList}
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    itemCss: {
        backgroundColor: '#534',
        color: '#000',
        padding: 10,
        width: 200,
        height: 100,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#000',
        alignItems: "center",
        justifyContent: "center",
    },
    titleCss: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    flatList: {
        alignSelf: "center"
    }
});

export default Main;