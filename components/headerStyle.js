import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderBottomColor: 'limegreen',
    borderBottomWidth: 0.5,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: Constants.statusBarHeight,
        paddingLeft: 10,
      },
    }),
  },
  title: {
    color: 'mediumseagreen',
    fontWeight: 'bold',
    fontSize: 18,
  },
  right: {
    paddingHorizontal: 15,
    color: 'mediumseagreen',
    fontWeight: '500',
    fontSize: 16,
  },
});
