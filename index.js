/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainReduxSagaProviderComponent from './sagasapp/views/mainreduxsagaprovidercomponent';

AppRegistry.registerComponent(appName, () => MainReduxSagaProviderComponent);
