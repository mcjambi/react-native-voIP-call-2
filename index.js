'use strict';

import { NativeModules, DeviceEventEmitter, Platform } from 'react-native';

import  RNVoipPushKitNativeModule_module from './lib/iosPushKit';
import  RNVoipCallNativeModule_module from './lib/RNVoipCall';

export const RNVoipPushKitNativeModule = RNVoipPushKitNativeModule_module
export const RNVoipCallNativeModule = RNVoipCallNativeModule_module

