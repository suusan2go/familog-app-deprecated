import { TabNavigator } from 'react-navigation';
import DiaryEntryList from '../containers/DiaryEntryList.js';
import DiaryEntryForm from './DiaryEntryForm.js';

const HomeScreen = TabNavigator(
  {
    DiaryEntryList: {
      screen: DiaryEntryList,
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
  },
);

export default HomeScreen;
