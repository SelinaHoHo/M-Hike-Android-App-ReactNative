import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  Alert,
  FlatList,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import styles from "../styles/HomeStyle";
import Database from "../database/Database";

const HomeScreen = ({ navigation }) => {
  const [HikeLogs, setHikeLogs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Database.getHikeLogs();
        setHikeLogs(data);
      } catch (error) {
        console.log("Error fetching Hikes", error);
      }
    };

    fetchData();
  }, [isFocused]);

  const handleDeleteHikeLog = async (id) => {
    await Database.deleteHikeLog(id);
    const data = await Database.getHikeLogs();
    setHikeLogs(data);
  };

  const handleDeleteAllHikeLog = async () => {
    setModalVisible(!modalVisible);
    await Database.deleteAllHikeLog();
    setHikeLogs([]);
    Alert.alert("All Hikes deleted successfully.");
  };

  const renderHikeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.hikeItem}
      onPress={() => navigation.navigate("HIKE LOG DETAIL", { hikeLogs: item })}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>{item.name_hike}</Text>
        <Text style={styles.infoBody}>{item.date_hike}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteHikeLog(item.hike_id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={HikeLogs}
        renderItem={renderHikeItem}
        keyExtractor={(item) => item.hike_id.toString()}
        scrollEnabled={true}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("ADD NEW HIKE")}
      >
        <Text style={styles.addButtonText}>Add New Hike</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure to DELETE ALL?</Text>
            <TouchableOpacity style={styles.buttonModal}>
              <Pressable
                style={[styles.button, styles.buttonYes]}
                onPress={() => handleDeleteAllHikeLog()}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.deleteAllButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.deleteButtonText}>Delete All Hike</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
