import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  desc: {
    textAlign: "center",
    marginVertical: 12,
  },
  btnContainer: {
    width: "100%",
    marginTop: 12,
    marginBottom: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btn: { padding: 20 },
});

export default styles;
