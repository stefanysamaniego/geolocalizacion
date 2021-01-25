import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maps from '../components/Maps';

import TabBar from '../components/TabBar';


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Ubicacón'
        component={Maps}
        initialParams={{ icon: 'plus' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
