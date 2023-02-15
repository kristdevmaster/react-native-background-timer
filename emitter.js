import {
  DeviceEventEmitter,
  NativeAppEventEmitter,
  NativeModules,
  NativeEventEmitter,
  Platform,
} from 'react-native';

const { RNBackgroundTimer } = NativeModules;

let nativeEmitter;

export default {
  RNBackgroundTimer,
  get NativeEmitter() {
    if (!nativeEmitter) {
      nativeEmitter = new NativeEventEmitter(RNBackgroundTimer);
    }
    return nativeEmitter;
  }
}