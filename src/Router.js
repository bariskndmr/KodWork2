import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import JobsStack from 'navigations/JobsStack';
import Stores from './Context/Stores/store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default () => {
  return (
    <Provider store={Stores}>
      <NavigationContainer>
        <JobsStack />
      </NavigationContainer>
    </Provider>
  );
};
