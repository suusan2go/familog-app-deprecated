import { TabNavigator } from 'react-navigation';
import Diary from '../components/Diary.js';
import DiaryList from '../components/DiaryList.js';
import DiaryForm from '../components/DiaryForm.js';

const HomeScreen = TabNavigator({
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

export default HomeScreen
