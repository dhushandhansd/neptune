import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Button, TextInput } from 'react-native';
import styles from '../Gear/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import browsingHistoryList from '../Home/index';
import { useState } from 'react/cjs/react.development';

const Browsing = ({navigation}) => {

  Browsing.navigationOptions = ({
    title : 'Browsing',
  });

  return(
    <View style = {styles.mainContainer}>
      <View 
        elevation={10}
        style = {styles.addressBar}>

        <View 
          style = {styles.backContainer}>
          <TouchableOpacity 
            style = {styles.backButton}
            onPress = {() => navigation.goBack()}
          >
            <Entypo 
              name = 'chevron-thin-left'
              size = {22}
                color = '#609CFF' />
          </TouchableOpacity>
          <Text 
            style = {styles.backTitle}
            onPress = {() => navigation.goBack()}
          >Settings</Text>
        </View>

        <View style = {styles.titleContainer}>
          <Text style = {styles.pageTitle}>Browsing History</Text>
        </View>

      </View>

      <View style = {styles.listContainer}>
        <Text style = {{fontSize : 20}}>We don't store any Footprints</Text>
        <Foundation 
          name = "foot"
          size = {25}
          color = '#609CFF'
        />
      </View>

      <View 
        elevation={10}
        style = {styles.bottomBar}>
        <TouchableOpacity 
          style = {styles.leftArrow}
        >
          <Entypo 
            name = 'chevron-thin-left'
            size = {22}
            color = '#609CFF' />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.rightArrow}>
          <Entypo 
            name = 'chevron-thin-right'
            size = {22}
            color = '#609CFF' />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.share}>
          <EvilIcons 
            name = 'share-apple'
            size = {32}
            color = '#609CFF' />
        </TouchableOpacity>
        <TouchableOpacity 
          style = {styles.tabs}
          onPress = {() => {navigation.navigate('Browser')}}
        >
          <Ionicons
              name = 'ios-copy-outline'
              size = {23}
              color = '#609CFF' />
        </TouchableOpacity>
        <TouchableOpacity 
          style = {styles.settings}
        >
          <Ionicons
              name = 'ios-settings-outline'
              size = {23}
              color = '#609CFF' />
        </TouchableOpacity>
      </View>
      <StatusBar 
        barStyle = 'light-content'
        // backgroundColor = '#dad8db'
        backgroundColor = '#f9f9fa'
      />
      
    </View>
  )

}

export default Browsing;