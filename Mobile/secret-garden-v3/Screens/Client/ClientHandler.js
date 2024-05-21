import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NewsLetterList from "./NewsLetterList"
import Inbox from './Inbox'
import MessageRequest from './MessageRequest'
import Resources from './Resources'
import Gallery from './Gallery'
import Profile from './Profile'
import Calendar from './Calendar'

export default function ClientHandler() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
        >
            <Drawer.Screen 
                name='NewsLetters' 
                component={NewsLetterList} 
                options={{
                    drawerIcon: () => <Image source={require("../../Resources/nlIcon.png")} style={styles.Images}/>
                }}
            />
            <Drawer.Screen 
                name='Inbox' 
                component={Inbox}
                options={{
                    drawerIcon: () => <Image source={require("../../Resources/ibIcon.png")} style={styles.Images}/>
                }}   
            />
            <Drawer.Screen 
                name='Message Request' 
                component={MessageRequest}
                options={{
                    drawerIcon: () => <Image source={require("../../Resources/mrIcon.png")} style={styles.Images}/>
                }}      
            />
            <Drawer.Screen 
                name='Resources' 
                component={Resources}
                options={{
                    drawerIcon: () => <Image source={require("../../Resources/rcIcon.png")} style={styles.Images}/>
                }}   
            />
            <Drawer.Screen 
                name='Calendar' 
                component={Calendar}
                options={{
                    drawerIcon: () => <Image source={require("../../Resources/cdIcon.png")} style={styles.Images}/>
                }}   
            />
            <Drawer.Screen 
                name='Gallery' 
                component={Gallery}
                options={{
                    drawerIcon: () => <Image source={require("../../Resources/glIcon.png")} style={styles.Images}/>
                }}   
            />
            <Drawer.Screen 
                name='Profile' 
                component={Profile}
                options={{
                    drawerIcon: () => <Image source={require("../../Resources/pfIcon.png")} style={styles.Images}/>
                }}       
            />
        </Drawer.Navigator>
  )
}


const styles = StyleSheet.create({
    Images: {
        width: 20,
        height: 20
    }
})