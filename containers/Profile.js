/* @flow */
import { connect } from 'react-redux';
import Profile from '../components/Profile.js';
import ApiClient from '../api';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';

export type ProfileActions = {
  getCurrentUser: () => Promise<any>,
};

export default connect(
  (state: ReduxState) => ({
    currentUser: state.currentUser,
  }),
  (dispatch: Dispatch): { actions: ProfileActions } => ({
    actions: {
      getCurrentUser: async () => {
        try {
          const sessionToken = store.getState().sessionToken;
          if (sessionToken == null) return;
          const Api = new ApiClient(store.getState().sessionToken);
          const user = await Api.getCurrentUser();
          dispatch(Actions.setCurrentUser(user));
        } catch (error) {
          console.error(error);
        }
      },
    },
  }),
)(Profile);
