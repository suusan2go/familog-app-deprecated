/* @flow */
import { connect } from 'react-redux';
import ProfileForm from '../components/ProfileForm';
import ApiClient from '../api';
import * as Actions from '../actions';
import store from '../store';
import type { ReduxState } from '../reducers';

export type ProfileFormActions = {
  updateProfile: () => Promise<any>,
  setCurrentProfile: () => void,
  handleChangeName: string => void,
  handleChangeImage: any => void,
};

export default connect(
  (state: ReduxState) => ({
    profileForm: state.profileForm,
    currentUser: state.currentUser,
  }),
  (dispatch: Dispatch, ownProps): { actions: ProfileFormActions } => ({
    actions: {
      updateProfile: async () => {
        const { sessionToken, profileForm } = store.getState();
        const Api = new ApiClient(sessionToken);
        dispatch(Actions.updateProfileStart());
        try {
          const user = await Api.updateProfile(profileForm);
          dispatch(Actions.setCurrentUser(user));
          dispatch(Actions.updateProfileSuccess());
          ownProps.navigation.goBack();
        } catch (error) {
          dispatch(Actions.updateProfileFailure());
        }
      },
      setCurrentProfile: () => {
        const currentUser = store.getState().currentUser;
        dispatch(
          Actions.handleChangeProfile({
            name: currentUser.name,
          }),
        );
      },
      handleChangeName: (name: string) => {
        dispatch(Actions.handleChangeProfile({ name }));
      },
      handleChangeImage: image => {
        dispatch(Actions.handleChangeProfile({ image }));
      },
    },
  }),
)(ProfileForm);
