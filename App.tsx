import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
