import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  infoBody: {
    fontSize: 12,
  },
  hikeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e73725",
    padding: 8,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "#e73725",
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
  },
  addButton: {
    backgroundColor: "gray",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteAllButton: {
    backgroundColor: "#e73725",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 16,
  },
  addButtonText: {
    color: "#010000",
    fontWeight: "bold",
  },
  deleteButtonText: {
    color: "#010000",
    fontWeight: "bold",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonYes: {
    backgroundColor: "gray",
  },
  buttonClose: {
    backgroundColor: "#e73725",
  },
  textStyle: {
    color: "#010000",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default homeStyle;
