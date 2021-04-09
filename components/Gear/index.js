import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import {Text, View, FlatList, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Gear = ({navigation}) => {

  const [toggleColor, setToggleColor] = useState('#c1bfc2');
  const [toggleColor1, setToggleColor1] = useState('#4cd964');
  const [toggleColor2, setToggleColor2] = useState('#4cd964');
  const [toggleColor3, setToggleColor3] = useState('#4cd964');
  const [toggleColor4, setToggleColor4] = useState('#c1bfc2');

  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(false);

  const toggleFunction = () => {
    setToggle(!toggle);
  };
  const toggleFunction1 = () => {
    setToggle1(!toggle1);
  };
  const toggleFunction2 = () => {
    setToggle2(!toggle2);
  };
  const toggleFunction3 = () => {
    setToggle3(!toggle3);
  };
  const toggleFunction4 = () => {
    setToggle4(!toggle4);
  };
  
  Gear.navigationOptions = ({
    title : 'Gear',
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
          >Home</Text>
        </View>

        <View style = {styles.titleContainer}>
          <Text style = {styles.pageTitle}>Settings</Text>
        </View>

      </View>

      <View style = {styles.middleContainer}>
        <ScrollView style = {styles.middleContainer} >
          <View style = {styles.searchContainer}>
            <Text style = {styles.searchTitle}>SEARCH</Text>
              <View style = {styles.contentContainer}>
                <View style = {styles.searchContent}>
                  <TouchableOpacity>
                    <Text style = {{fontSize : 20}}>Search Engine</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.searchContent}>
                  <Text style = {{fontSize : 20}}>Search Engine Suggestions</Text>
                  <TouchableOpacity 
                    style = {styles.toggleButton}
                    onPress = {() => {
                      toggle ? setToggleColor('#c1bfc2') : setToggleColor('#4cd964');
                      toggleFunction();
                    }}>
                    <Text 
                      style = {{fontSize : 20, color : toggleColor}}  
                    >{toggle ? 'On' : 'Off'}</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.searchContent}>
                  <TouchableOpacity>
                    <Text style = {{fontSize : 20}}>Quick Website Search</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.searchContent}>
                  <Text style = {{fontSize : 20}}>Preload Top Hit</Text>
                  <TouchableOpacity 
                    style = {styles.toggleButton}
                    onPress = {() => {
                      toggle1 ? setToggleColor1('#c1bfc2') : setToggleColor1('#4cd964');
                      toggleFunction1();
                    }}>
                    <Text 
                      style = {{fontSize : 20, color : toggleColor1}}  
                    >{toggle1 ? 'On' : 'Off'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
          <View style = {styles.searchContainer}>
            <Text style = {styles.searchTitle}>PRIVACY & SECURITY</Text>
              <View style = {styles.contentContainer}>
                <View style = {styles.searchContent}>
                  <Text style = {{fontSize : 20}}>Do not Track</Text>
                  <TouchableOpacity 
                    style = {styles.toggleButton}
                    onPress = {() => {
                      toggleFunction2();
                      toggle2 ? setToggleColor2('#c1bfc2') : setToggleColor2('#4cd964');
                    }}>
                    <Text 
                      style = {{fontSize : 20, color : toggleColor2}}  
                    >{toggle2 ? 'On' : 'Off'}</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.searchContent}>
                  <Text style = {{fontSize : 20}}>Block Cookies</Text>
                  <TouchableOpacity 
                    style = {styles.toggleButton}
                    onPress = {() => {
                      toggleFunction3();
                      toggle3 ? setToggleColor3('#c1bfc2') : setToggleColor3('#4cd964');
                    }}>
                    <Text 
                      style = {{fontSize : 20, color : toggleColor3}}  
                    >{toggle3 ? 'On' : 'Off'}</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.searchContent}>
                  <Text style = {{fontSize : 20}}>Fraudulent Website Warning</Text>
                  <TouchableOpacity 
                    style = {styles.toggleButton}
                    onPress = {() => {
                      toggleFunction4(); 
                      toggle4 ? setToggleColor4('#c1bfc2') : setToggleColor4('#4cd964');
                    }}>
                    <Text 
                      style = {{fontSize : 20, color : toggleColor4}}>
                        {toggle4 ? 'On' : 'Off'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.searchContent}>
                    <TouchableOpacity 
                      onPress = {() => navigation.navigate('History')}
                    >
                      <Text style = {{fontSize : 20}}>Clear History and Browsing Data</Text>
                    </TouchableOpacity>
                </View>
              </View>
          </View>
        </ScrollView>
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
          onPress = {() => {navigation.navigate('History')}}
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
        backgroundColor = '#f9f9fa'/>
    </View>

  )
}

export default Gear;
