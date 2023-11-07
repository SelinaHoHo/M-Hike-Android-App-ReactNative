import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageLogo: {
    flex: 1,
    padding: 10,
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
  },
  required: {
    color: "#e73725",
    fontSize: 16,
    marginEnd: 8,
  },
  inputInfo: {
    borderWidth: 1,
    borderColor: "#e73725",
    borderRadius: 5,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: "gray",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#010000",
    fontWeight: "bold",
  },
});
export default formStyles;
