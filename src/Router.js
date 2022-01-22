import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import JobsStack from 'navigations/JobsStack';
import FavoriteProvider from './Context/FavoriteProdiver/FavoriteProvider';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default () => {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <JobsStack />
      </NavigationContainer>
    </FavoriteProvider>
  );
};
