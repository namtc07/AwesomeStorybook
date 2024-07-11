import { Alert, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { ButtonCustom } from "./components/Button/Button";

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ButtonCustom text="Hello" variant="outline" onPress={() => Alert.alert("hehe")} />
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
