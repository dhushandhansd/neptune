import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = ({navigation}) => {


  Home.navigationOptions = ({
    title : 'Home',
  });

  const queryPasser = (data) => {
    var finalQuery = 'https://www.duckduckgo.com/?q=' + data.replace(' ', '+');
    navigation.navigate('Browser', {query : finalQuery})
  }

  const [url, setUrl] = useState('www.duckduckgo.com');

  return (
    <View 
      style = {styles.mainContainer}>
      <View 
        elevation={10}
        style = {styles.addressBar}>

        <TextInput
          style = {styles.searchBar}
          placeholder = {'Search or enter website name'}
          defaultValue = ''
          autoCapitalize = 'none'
          onChangeText = {data => setUrl(data.toLowerCase())}
          onSubmitEditing = {() => queryPasser(url)}
        />

      </View>

      <View>
        <Text style = {styles.title}>
          Favorites
        </Text>
        <View style = {styles.favItemBox}>
          <View elevation={6} style = {styles.favIconOutline}>
            <View style = {styles.favIconContainer}>
              <TouchableOpacity onPress = {() => {navigation.navigate('Browser', {query : 'https://www.apple.com'})}}>
                <Image style= {styles.favIcon} source = {require('../../assets/icons/apple.png')}/>
              </TouchableOpacity>
            </View>
              <Text style = {styles.favIconTitle}>Apple</Text>
          </View> 

          <View elevation={6} style = {styles.favIconOutline}>
            <View style = {styles.favIconContainer}>
              <TouchableOpacity onPress = {() => {navigation.navigate('Browser', {query : 'https://www.google.com'})}}>
                <Image style= {styles.favIcon} source = {require('../../assets/icons/google.png')}/>
              </TouchableOpacity>
            </View>
              <Text style = {styles.favIconTitle}>Google</Text>
          </View> 

          <View elevation={6} style = {styles.favIconOutline}>
            <View style = {styles.favIconContainer}>
              <TouchableOpacity onPress = {() => {navigation.navigate('Browser', {query : 'https://www.amazon.com'})}}>
                <Image style= {styles.favIconDiff} source = {require('../../assets/icons/amazon.png')}/>
              </TouchableOpacity>
            </View>
            <Text style = {styles.favIconTitle}>Amazon</Text>
          </View> 

          <View elevation={6} style = {styles.favIconOutline}>
            <View style = {styles.favIconContainer}>
              <TouchableOpacity onPress = {() => {navigation.navigate('Browser', {query : 'https://www.wikipedia.org'})}}>
                <Image style= {styles.favIconDiff} source = {require('../../assets/icons/wiki.png')}/>
              </TouchableOpacity>
            </View>
            <Text style = {styles.favIconTitle}>Wikipedia</Text>
          </View>
        </View>

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
              color = '#dad8db' />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.rightArrow}>
          <Entypo 
              name = 'chevron-thin-right'
              size = {22}
              color = '#dad8db' />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.share}>
          <EvilIcons 
              name = 'share-apple'
              size = {32}
              color = '#dad8db' />
        </TouchableOpacity>
        <TouchableOpacity 
          style = {styles.tabs}
          // onPress = {() => {navigation.navigate('Browser')}}
        >
          <Ionicons
              name = 'ios-copy-outline'
              size = {23}
              color = '#609CFF' />
        </TouchableOpacity>
        <TouchableOpacity 
          style = {styles.settings}
          onPress = {() => {navigation.navigate('Gear')}}
        >
          <Ionicons
              name = 'ios-settings-outline'
              size = {23}
              color = '#609CFF' />
        </TouchableOpacity>
      </View>
      <StatusBar 
        barStyle = 'light-content'
        backgroundColor = '#f9f9fa'/>
    </View>
  )

}

export default Home;