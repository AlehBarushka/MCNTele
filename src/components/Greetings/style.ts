import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greetingsText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 8,
  },
  link: {
    color: Colors.link,
    fontSize: 26,
    fontWeight: "600",
  },
});

export default styles;
