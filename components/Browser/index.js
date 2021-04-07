import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import styles from '../Home/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

const Browser = ({navigation}) => {

  Browser.navigationOptions = ({
    title : 'Browser',
  })

  const [visible, setVisible] = useState(false);

  const LoadingView = () => {
    return (
      <View 
        style = {styles.loadingViewStyle}
      >
        <ActivityIndicator
          color = '#13c579'
          size = 'large'
        />
      </View>
    );
  }

  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.addressBar}>
        <TextInput
          style = {styles.searchBar}
          placeholder = 'Search or enter website name'
          autoCapitalize = 'none'
          defaultValue = {navigation.getParam('query')}
        />
      </View>

      <WebView
        source = {{uri : 'https://www.duckduckgo.com/?q=' + (navigation.getParam('query')).split(' ').join('+') + '&atb=v1-1&ia=web'}}
        style = {styles.webContainer}
        javaScriptEnabled = {true}
        domStorageEnabled = {true}
        renderLoading = {LoadingView}
        startInLoadingState = {true}
      />
      {visible ? <LoadingView/> : null}

      <View 
        style = {styles.bottomBar}>
        <TouchableOpacity 
          style = {styles.leftArrow}
          onPress = {() => navigation.goBack()}>
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
        <TouchableOpacity style = {styles.tabs}>
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

export default Browser;