import React from 'react'
import { AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation';
import Diary from '../components/Diary.js';
import DiaryForm from '../components/DiaryForm.js';
import HomeScreen from './HomeScreen.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as Api from '../api'
import * as Actions from '../actions'

const DEVICE_TOKEN_KEY = '@DeviceToken:key'

const MainScreen = StackNavigator({
  Home: { screen: HomeScreen },
  Diary: {
    screen: Diary,
  },
  DiaryForm: {
    screen: DiaryForm,
  },
});

class MainScreenApp extends React.Component {
  async registerOrReadDeviceToken() {
    let deviceToken = await AsyncStorage.getItem(DEVICE_TOKEN_KEY);
    if(deviceToken === null){
      deviceToken = await Api.registerDeviceToken()
    }
    this.props.actions.setDeviceToken(deviceToken)
    await AsyncStorage.setItem(DEVICE_TOKEN_KEY, deviceToken)
  }

  async createSessionToken() {
    const sessionToken = await Api.createSessionToken(this.props.deviceToken)
  }

  componentWillMount(){
    if(this.props.deviceToken !== null) return
    this.registerOrReadDeviceToken()
    this.createSessionToken()
  }

  render() {
    return(
      <MainScreen />
    )
  }
}

export default connect(
  (store: ReduxState) => ({deviceToken: store.deviceToken }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: {
      ...bindActionCreators(Actions, dispatch)
    }
  })
)(MainScreenApp);
