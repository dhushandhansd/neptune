import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, Image, TouchableOpacity, View, TextInput} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

const Home = ({navigation}) => {

  Home.navigationOptions = ({
    title : 'Home',
  });

  const queryPasser = (data) => {
    navigation.navigate('Browser', {query : data})
  }

  const [url, setUrl] = useState('www.duckduckgo.com');

  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.addressBar}>

        <TextInput
          style = {styles.searchBar}
          placeholder = {'Search or enter website name'}
          autoCapitalize = 'none'
          onChangeText = {data => setUrl(data)}
          onSubmitEditing = {() => queryPasser(url)}
        />

      </View>

      <View>
        <Text style = {styles.title}>
          Favorites
        </Text>
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
        backgroundColor = '#fff'/>
    </View>
  )

}

export default Home;