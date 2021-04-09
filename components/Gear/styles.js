import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  mainContainer : {
    width : '100%',
    height : '100%',
    marginTop:'7.5%',
    backgroundColor : '#fff',
  },
  addressBar : {
    width : '100%',
    height : 68,
    // backgroundColor : '#dad8db',
    backgroundColor : '#f9f9fa',
    borderBottomColor : '#c1bfc2',
    borderBottomWidth : 1,
    flexDirection : 'row',
    color : '#609CFF',
  },
  backContainer : {
    width : '20%',
    height : '100%',
    flexDirection : 'row',
  },
  backButton : {
    marginLeft : '5%',
    marginTop : '30%',
  },
  backTitle : {
    marginLeft : '2%',
    marginTop : '28%',
    fontSize : 18,
    color : '#609CFF',
  },
  titleContainer : {
    width : '45%',
    marginLeft : '7%',
    color : '#609CFF',
  },
  pageTitle : {
    textAlign : 'center',
    marginTop : '10%',
    fontSize : 22,
    color : '#000000',
  },
  searchBar : {
    width : "90%",
    height : 40,
    fontSize : 15,
    color : '#13c579',
    // backgroundColor : '#BABABA',
    backgroundColor : '#fff',
    marginTop : 17,
    marginLeft : 20,
    borderRadius : 9,
    textAlign: 'center',
    borderColor : '#c1bfc2',
    borderWidth : .5,
  },
  middleContainer : {
    width : '100%',
    height : '100%',
    backgroundColor : '#f3f2f8',
  },
  searchContainer : {
    width : '100%',
    marginTop : '5%',
    // backgroundColor : '#fff',
  },
  contentContainer : {
    marginTop : '5%',
  },
  searchTitle : {
    fontSize : 12,
    color : '#c1bfc2',
    marginLeft : '5%',
  },
  searchContent : {
    padding : '3%',
    paddingLeft : '5%',
    backgroundColor : '#fff',
    borderBottomWidth : 1,
    flexDirection : 'row',
    borderBottomColor : '#c1bfc2',
  },
  contentTitle : {
    marginLeft : '2%',
  },
  toogleSwitch : {
    position : 'absolute',
    right : 5,
    top : 15,
    width : 50,
  },
  toggleButton : {
    position : 'absolute',
    right : 20,
    top : 12,
  },
  toggleText : {
    fontSize : 20,
    // color : '#c1bfc2',
  },
  blurView : {
    width:'100%',
    height : '30%',
  },
  bottomBar : {
    width : '100%',
    height : '6%',
    // backgroundColor : '#dad8db',
    backgroundColor : '#f9f9fa',
    position : 'absolute',
    bottom : 28,
    opacity : 20,
    flexDirection : 'row',
    alignItems : 'center',
    alignContent : 'center',
  },
  leftArrow : {
    position : 'absolute',
    left : "7%",
  },
  rightArrow : {
    position : 'absolute',
    left : "25%",
  },
  share : {
    position : 'absolute',
    left : "45%",
  },
  tabs : {
    position : 'absolute',
    right : "26%",
  },
  settings : {
    position : 'absolute',
    right : '7%',
  },
  title : {
    fontSize : 20,
    marginTop : '10%',
    marginLeft : '7%',
  },
})

export default styles;