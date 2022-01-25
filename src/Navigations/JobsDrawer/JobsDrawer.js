import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Favorites from 'pages/Favorites';
import Jobs from 'pages/Jobs';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTitleStyle: {
    color: '#FF5C58',
  },
  drawerActiveTintColor: '#FF5C58',
  headerTintColor: '#FF5C58',
};

const JobDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen
        name="JobsPage"
        component={Jobs}
        options={{title: 'Jobs'}}
      />
      <Drawer.Screen
        name="FavoritesPage"
        component={Favorites}
        options={{title: 'Favorite Jobs'}}
      />
    </Drawer.Navigator>
  );
};

export default JobDrawer;
