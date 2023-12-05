import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system'
import {Configuration} from '../values/configuration'

export const checkExistanceDB = async dbName => {
  const dbDir = FileSystem.documentDirectory + 'SQLite/'
  const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName)

  if (!dirInfo.exists) { console.log('is not exist'); return false; }
  else { return true }
}

export async function createDatabase(dbName) {
  const db = await SQLite.openDatabase(dbName)
  db.transaction(tx => {
    tx.executeSql('CREATE TABLE Users ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "email" TEXT, "password" TEXT)')
  }),
  error => console.log(`create error: ${error}`);
  console.log('table created');
}

export async function insertUser(dbName, email, password){
  const dirInfo = await checkExistanceDB(dbName)
  //console.log(dirInfo)
  if (!dirInfo) await createDatabase(dbName)

  const db = SQLite.openDatabase(dbName)
  db.transaction(tx => {
    tx.executeSql(`INSERT INTO Users (email, password) VALUES ('${email}', '${password}')`)
  }), error => console.log(`insert error: ${error}`)
  
}

export async function checkUser(dbName, inputEmail, inputPassword, callback) {
  const db = SQLite.openDatabase(dbName)
  //console.log("=(")
  db.transaction(tx =>{
    tx.executeSql(
      `SELECT email FROM Users WHERE email = '${inputEmail}' AND password = "${inputPassword}"`,
      [],
      (txObj, { rows }) => {
        // Получение результатов запроса
        const data = rows._array;
        const email = data[0]?.email;
        
        if (email == inputEmail)
          callback(true);
        else
          callback(false);
        
      },)
  }), error => console.log(`create select : ${error}`);
}

export async function deleteDB(dbName) {
  const dbDir = FileSystem.documentDirectory + 'SQLite/'
  const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName)
  if (dirInfo.exists) await FileSystem.deleteAsync(dbDir + dbName, {idempotent: true})
  console.log('table deleted');
}

