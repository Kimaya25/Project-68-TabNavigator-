import * as React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import fb from '../Screens/fb';
import insta from '../Screens/insta';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";

export default class App extends React.Component{ 
    render(){
        return(
            <View>
                <appContainer/>
            </View>
        )
    }
}
const tabNavigator = createBottomTabNavigator({
    fb : {Screen : fb},
    insta : {Screen : insta}
  })
  const appContainer = createAppContainer(tabNavigator)