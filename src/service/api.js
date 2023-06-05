import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/auth/`;

const API_URLS = { LOGIN_DEVICE_AUTH: `${COMMON_URL}login` };

export const loginDeviceAuth = (payload) =>
  apis.post(API_URLS.LOGIN_DEVICE_AUTH, payload);
