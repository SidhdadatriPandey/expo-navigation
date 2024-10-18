import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
import { AntDesign, Fontisto } from '@expo/vector-icons';

const CustomDrowerContent = ({ props }: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                icon={({ color, size }) => <Entypo name="menu" size={24} color="black" />}
                label={"Explore"}
                onPress={() => router.push('/(drawer)/(tabs)/explore')}
            />

            <DrawerItem
                icon={({ color, size }) => <Fontisto name="heart" size={24} color="black" />}
                label={"Setting"}
                onPress={() => router.push('/Profile')}
            />

            <DrawerItem
                icon={({ color, size }) => <Fontisto name="heart" size={24} color="black" />}
                label={"Setting"}
                onPress={() => router.push('/Favorate')}
            />

            <DrawerItem
                icon={({ color, size }) => <Fontisto name="player-settings" size={24} color="black" />}
                label={"Setting"}
                onPress={() => router.push('/Profile')}
            />
        </DrawerContentScrollView>
    )

}

const Comp = () => {
    return (
        //If we want to show custom drawer and hide (tabs) and profile etc

        // <Drawer 
        // screenOptions={{ headerShown: true }}
        // drawerContent={(props) => <CustomDrowerContent props={props} />}
        // />


        //if we want to show default drawer where children are (tabs) and profile etc

        <GestureHandlerRootView style={{ flex: 1 }
        }>
            <Drawer screenOptions={{ headerShown: true }}>
                <Drawer.Screen
                    name="profile" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',
                    }}
                />

            </Drawer>
        </GestureHandlerRootView>
    )
}

export default Comp