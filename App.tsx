import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
