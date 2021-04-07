import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  mainContainer : {
    width : '100%',
    height : '100%',
    marginTop:'7.5%',
    backgroundColor : '#fff',
  },
  addressBar : {
    width : '100%',
    height : 68,
    backgroundColor : '#dad8db',
    borderBottomColor : '#c1bfc2',
    borderBottomWidth : 1,
    flexDirection : 'row',
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
  webContainer : {
    width: '100%',
    height : '100%',
  },
  loadingViewStyle : {
    flex : 1,
    alignItems : 'center',
    alignContent : 'center',
  },
  blurView : {
    width:'100%',
    height : '30%',
  },
  bottomBar : {
    width : '100%',
    height : '6%',
    backgroundColor : '#dad8db',
    position : 'absolute',
    bottom : 30,
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
  bookmark : {
    position : 'absolute',
    right : "26%",
  },
  tabs : {
    position : 'absolute',
    right : "7%",
  },
  title : {
    fontSize : 20,
    marginTop : '10%',
    marginLeft : '7%',
  },
})

export default styles;