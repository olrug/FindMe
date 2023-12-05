import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';
import { createDatabase, checkUser, insertUser, deleteDB, checkExistanceDB } from '../database/DBManagement';
import {Configuration} from '../values/configuration'

export default function Main() {

  return(
    <View style={{ flex: 1, margin: 100}}>
      <Button onPress={() => createDatabase(Configuration.dbName)}title="Create" >create</Button>
      <Button onPress={() => insertUser(Configuration.dbName, "artvik48@gmail.com", "cbuaNCtr")} title="Insert" >insert</Button>
      <Button onPress={() => deleteDB(Configuration.dbName)} title="Delete">delete</Button>
      <Button onPress={() => checkExistanceDB(Configuration.dbName)} title="Check">delete</Button>
    </View>
  )
}