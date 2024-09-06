import {
  FiraCode_400Regular,
  FiraCode_600SemiBold,
  FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [teste, setTeste] = useState<string>("Not typed");
  const [fontsLoaded, fontError] = useFonts({
    'Protest Guerrilla': require('./assets/ProtestGuerrilla-Regular.ttf'),
  });

useFonts({
  FiraCode_400Regular,
  FiraCode_600SemiBold,
  FiraCode_700Bold,
  // 'Protest Guerrilla' : require('./assets/ProtestGuerrilla-Regular.ttf'),
});

const showLogedAlert = () => {
  Alert.alert("Warning!!!", `Name: ${username}`, [
    { text: "Ok", onPress: () => console.log("Pressed the button") },
  ]);
};

useEffect(() => {
  if (password && password.length > 0) setTeste("Typed");
}, [password]);

useEffect(() => {
  Alert.alert("Warning!!!", "Welcome to my app", [
    { text: "Ok", onPress: () => console.log("Pressed the button") },
  ]);
}, []);

return (
  <View style={styles.container}>
    <Text
      style={{
        fontSize: 26,
        marginLeft: 10,
        fontFamily: "FiraCode_400Regular",
      }}
    >
      Username
    </Text>
    <TextInput
      style={styles.input}
      onChangeText={setUsername}
      value={username}
    />
    <Text
      style={{
        fontSize: 26,
        marginLeft: 10,
        fontFamily: "FiraCode_600SemiBold",
      }}
    >
      Password
    </Text>
    <TextInput
      style={styles.input}
      onChangeText={setPassword}
      value={password}
    />
    <Text
      style={{ fontSize: 26, marginLeft: 10, fontFamily: "FiraCode_700Bold" }}
    >
      {teste}
    </Text>
    <TouchableOpacity onPress={showLogedAlert}>
      <Text>Log in</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
