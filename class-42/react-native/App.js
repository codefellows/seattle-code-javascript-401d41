import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

function App(props) {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(true);
  }

  const showContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    setContacts(contactList.data);
  }

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to Our App</Text>
      <Button onPress={showContacts} title="Show Contacts" />

      <View>
        <Text>Our Contacts:</Text>
        <FlatList data={contacts} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange'
  }
})

export default App;