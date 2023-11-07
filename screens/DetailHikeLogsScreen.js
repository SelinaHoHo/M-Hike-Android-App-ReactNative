import React, { useState, useMemo } from "react";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import RadioGroup from "react-native-radio-buttons-group";
import DropDownPicker from "react-native-dropdown-picker";
import Database from "../database/Database";
import styles from "../styles/FormStyle";

const DetailScreen = ({ navigation, route }) => {
  const { hikeLogs } = route.params;

  const [name_hike, setNameHike] = useState(hikeLogs.name_hike);
  const [location_hike, setLocationHike] = useState(hikeLogs.location_hike);
  const [date_hike, setDateHike] = useState(hikeLogs.date_hike);
  const [parking_hike, setParkingHike] = useState(
    hikeLogs.parking_hike.toString()
  );
  const [length_hike, setLengthHike] = useState(
    hikeLogs.length_hike.toString()
  );
  const [level_hike, setLevelHike] = useState(hikeLogs.level_hike);
  const [description_hike, setDescriptionHike] = useState(
    hikeLogs.description_hike
  );

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const currentDate = date;
    hideDatePicker();
    let dateString =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();
    setDateHike(dateString);
  };

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        value: "Yes",
      },
      {
        id: "2",
        label: "No",
        value: "No",
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Easiest", value: "Easiest" },
    { label: "Moderate", value: "Moderate" },
    { label: "Strenuous", value: "Strenuous" },
  ]);

  const handleUpdateHikeLog = async () => {
    if (
      !name_hike ||
      !location_hike ||
      !date_hike ||
      !parking_hike ||
      !length_hike ||
      !level_hike
    ) {
      Alert.alert("Error", "Please fill in all the fields!");
      return;
    }
    await Database.updateHikeLog(
      hikeLogs.hike_id,
      name_hike,
      location_hike,
      date_hike,
      parking_hike,
      length_hike,
      level_hike,
      description_hike
    );
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDatePicker(false);
    setDate(currentDate);
    let dateString =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear();
    setDateHike(dateString);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Name of The Hike</Text>
        <Text style={styles.required}>*</Text>
      </View>
      <TextInput
        style={styles.inputInfo}
        value={name_hike}
        onChangeText={setNameHike}
        placeholder="Son Dong"
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.required}>*</Text>
      </View>
      <TextInput
        style={styles.inputInfo}
        value={location_hike}
        onChangeText={setLocationHike}
        placeholder="Quang Binh"
        multiline
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Date of the hike</Text>
        <Text style={styles.required}>*</Text>
        <Icon
          name="calendar"
          size={20}
          color="#e73725"
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <TextInput
        style={styles.inputInfo}
        value={date_hike}
        placeholder="choose date"
        editable={true}
        multiline
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Parking available</Text>
        <Text style={styles.required}>*</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setParkingHike}
          selectedId={parking_hike}
          layout="row"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Length of the hike</Text>
        <Text style={styles.required}>*</Text>
        <TextInput
          style={styles.inputInfo}
          value={length_hike}
          onChangeText={setLengthHike}
          placeholder="100"
          multiline={false}
        />
        <Text color="gray">m</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Difficulty level</Text>
        <Text style={styles.required}>*</Text>
      </View>
      <DropDownPicker
        open={open}
        value={level_hike}
        items={items}
        setOpen={setOpen}
        setValue={setLevelHike}
        setItems={setItems}
        style={styles.inputInfo}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Description</Text>
      </View>
      <TextInput
        style={styles.inputInfo}
        value={description_hike}
        onChangeText={setDescriptionHike}
        placeholder="Description about the hike"
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateHikeLog}>
        <Text style={styles.buttonText}>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
