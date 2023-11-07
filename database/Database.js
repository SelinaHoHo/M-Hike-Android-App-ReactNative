import * as SQLite from "expo-sqlite";

const database_name = "HikeLog.db";
const database_version = "1.0";
const database_displayname = "HikeLogs App Database";
const database_size = 200000;

const db = SQLite.openDatabase(
  database_name,
  database_version,
  database_displayname,
  database_size
);

const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS hikeLogs (hike_id INTEGER PRIMARY KEY AUTOINCREMENT, name_hike TEXT, location_hike TEXT, date_hike TEXT, parking_hike BOOLEAN, length_hike INTEGER, level_hike TEXT, description_hike TEXT);`,
      [],
      () => console.log("Create database and table successfully."),
      (error) => console.log("Error occurred while creating the table.", error)
    );
  });
};

const getHikeLogs = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM hikeLogs",
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const deleteHikeLog = (hike_id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM hikeLogs WHERE hike_id = ?",
        [hike_id],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const addHikeLog = (
  name_hike,
  location_hike,
  date_hike,
  parking_hike,
  length_hike,
  level_hike,
  description_hike
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO hikeLogs (name_hike, location_hike, date_hike, parking_hike, length_hike, level_hike, description_hike) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name_hike,
        location_hike,
        date_hike,
        parking_hike,
        length_hike,
        level_hike,
        description_hike,
      ],
      () => console.log("New HIKE LOG has been added successfully!"),
      (error) => console.log("Error occurred while adding hike logs!", error)
    );
  });
};

const updateHikeLog = (
  hike_id,
  name_hike,
  location_hike,
  date_hike,
  parking_hike,
  length_hike,
  level_hike,
  description_hike
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE hikeLogs SET name_hike = ?, location_hike = ?, date_hike = ?, parking_hike = ?, length_hike = ?, level_hike = ?, description_hike = ? WHERE hike_id = ?",
      [
        name_hike,
        location_hike,
        date_hike,
        parking_hike,
        length_hike,
        level_hike,
        description_hike,
        hike_id,
      ],
      () => console.log("Hike log has been updated successfully!"),
      (error) => console.log("Error occurred while updating hike logs!", error)
    );
  });
};

const deleteAllHikeLog = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM hikeLogs",
      [],
      () => console.log("All hike log have been deleted successfully!"),
      (error) => console.log("Error occurred while deleting hike logs!", error)
    );
  });
};

const Database = {
  initDatabase,
  addHikeLog,
  getHikeLogs,
  deleteHikeLog,
  deleteAllHikeLog,
  updateHikeLog,
};

export default Database;
