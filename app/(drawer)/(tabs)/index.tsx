import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation();
  return (
    <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>index</Text>
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 5 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text style={{ fontSize: 27 }}>go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index