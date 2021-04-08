import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const History = ({navigation}) => {

  History.navigationOptions = ({
    title : 'History',
  });

  return(
    <View style = {styles.mainContainer}>
      <View style = {styles.addressBar}>

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
          >Back</Text>
        </View>

        <View style = {styles.titleContainer}>
          <Text style = {styles.pageTitle}>Browsing History</Text>
        </View>

      </View>

      <View 
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
        <TouchableOpacity style = {styles.bookmark}>
          <Feather 
            name = 'book-open'
            size = {22}
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
      </View>
      <StatusBar 
        barStyle = 'light-content'
        backgroundColor = '#dad8db'/>
    </View>

  )
}

export default History;
