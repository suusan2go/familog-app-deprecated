import { TabNavigator } from 'react-navigation';
import Diary from './Diary.js';
import DiaryList from './DiaryList.js';
import DiaryForm from './DiaryForm.js';

const HomeScreen = TabNavigator(
  {
    DiaryList: {
      screen: DiaryList,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'mediumseagreen',
      inactiveTintColor: 'grey',
      indicatorStyle: {
        backgroundColor: 'mediumseagreen',
      },
      style: {
        backgroundColor: 'white',
      },
    },
  }
);

export default HomeScreen;
