import { TabNavigator } from 'react-navigation';
import DiaryEntryList from '../containers/DiaryEntryList.js';
import Profile from '../containers/Profile.js';

const HomeScreen = TabNavigator(
  {
    DiaryEntryList: {
      screen: DiaryEntryList,
    },
    Profile: {
      screen: Profile,
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
