import Axios from 'axios';
import {PatchAll} from '../actions/Users';
import {BASE_URL} from '../../components/utils';
import {Device} from './Device';

const AuthLoginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

const AuthLoginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: token,
  };
};
const AuthLoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};
const LogoutAuth = () => {
  return {
    type: 'LOGOUT',
  };
};

export const AuthLogin = (device_token, fields) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    console.log(fields);
    console.log('fields from redux');
    return Axios({
      method: 'POST',
      data: fields,
      url:
        // 'https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/auth/login',
        `${BASE_URL}/auth/login`,
    })
      .then((res) => {
        const data = res.data.token.token;
        // console.log(data);
        // console.log('ini dari login');

        dispatch(AuthLoginSuccess(data));
        dispatch(Device(device_token));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthLogout = (token, data) => {
  return (dispatch) => {
    dispatch(PatchAll(token, data));
    dispatch(LogoutAuth());
  };
};
