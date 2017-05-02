/* @flow */
import React from 'react';
import { StyleSheet, Text, TabBarIOS, View } from 'react-native';
import Diary from './components/Diary.js';
import DiaryList from './components/DiaryList.js';
import DiaryForm from './components/DiaryForm.js';
import { TabNavigator, StackNavigator } from 'react-navigation';

const MainScreen = TabNavigator({
  DiaryList: {
    screen: DiaryList,
  },
},{
  tabBarOptions: {
    activeTintColor: 'mediumseagreen',
    inactiveTintColor: 'grey',
    indicatorStyle: {
      backgroundColor: 'mediumseagreen',
    },
    style: {
      backgroundColor: 'white'
    },
  },
});

const MainApp = StackNavigator({
  Home: { screen: MainScreen },
  Diary: {
    screen: Diary,
  },
  DiaryForm: {
    screen: DiaryForm,
  },
});

export default MainApp
