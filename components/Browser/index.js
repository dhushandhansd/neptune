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
  var cookie = '';
  const [visible, setVisible] = useState(false);
  const [queryDone, setQueryDone] = useState(navigation.getParam('query'));
  const [key, setKey] = useState(0);


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
      <View 
        elevation={10}
        style = {styles.addressBar}>
        <TouchableOpacity 
          style = {styles.refreshIcon}
          onPress = { () => setKey(key+1)}
        >
          <Ionicons
            name = 'ios-refresh'
            size = {25}
            color = '#a9a5a6'
          />
        </TouchableOpacity>
        <TextInput
          nativeID = 'inputAddress'
          style = {styles.searchBarBrowser}
          placeholder = 'Search or enter website name'
          autoCapitalize = 'none'
          onChangeText = {(data) => setUrl(data)}
          onSubmitEditing = {() => {setQueryDone(url)}}
          defaultValue = {queryDone}
        />
        <TouchableOpacity 
          style = {styles.searchIcon}>
          <Ionicons
            name = 'ios-search-outline'
            size = {25}
            color = '#a9a5a6'
          />
        </TouchableOpacity>
        
      </View>

      <WebView
        source = {{uri : queryDone}}
        style = {styles.webContainer}
        javaScriptEnabled = {true}
        domStorageEnabled = {true}
        renderLoading = {LoadingView}
        startInLoadingState = {true}
        injectedJavaScript = {cookie}
        key = {key}
      />
      {visible ? <LoadingView/> : null}

      <View 
        elevation={10}
        style = {styles.bottomBar}
        >
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

export default Browser;