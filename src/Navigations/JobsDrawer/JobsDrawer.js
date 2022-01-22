import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Favorites from 'pages/Favorites';
import Jobs from 'pages/Jobs';

const Drawer = createDrawerNavigator();

const JobDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="JobsPage" component={Jobs} />
      <Drawer.Screen name="FavoritesPage" component={Favorites} />
    </Drawer.Navigator>
  );
};

export default JobDrawer;
