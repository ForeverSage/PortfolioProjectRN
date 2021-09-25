import React from 'react';
import { Button, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerView,
} from '@react-navigation/drawer';
import DrawerMenu from './DrawerMenu';
import TabNavigator from '../tabs';
import Exchanges from '../../../scenes/exchanges/Exchanges';
import Content from '../../../scenes/content/Content';
import Contact from '../../../scenes/contact/Contact';
import Crypto from '../../../scenes/crypto/Crypto';

const Drawer = createDrawerNavigator()

export const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name)
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Back home' />
    </View>
  )
} 

export const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name='Home' RouteName='Home' component={TabNavigator} />
    <Drawer.Screen name='Exchanges' RouteName='Exchanges' component={Exchanges} />
    <Drawer.Screen name='Content' RouteName="Content" component={Content} />
    <Drawer.Screen name='Contact' RouteName="Contact" component={Contact} />
    <Drawer.Screen name='Crypto' RouteName="Crypto" component={Crypto} />
  </Drawer.Navigator>
)

export default DrawerNavigator;