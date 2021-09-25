import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details/Details'
import Exchanges from '../../../scenes/exchanges/Exchanges'
import Contact from '../../../scenes/contact/Contact'
import Content from '../../../scenes/content/Content'
import Crypto from '../../../scenes/crypto/Crypto'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

export const ExchangeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Exchanges"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Exchanges"
      component={Exchanges}
      options={({ navigation }) => ({
        title: 'Exchanges',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ContactNavigator = () => (
  <Stack.Navigator
    initialRouteName="Contact"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Contact"
      component={Contact}
      options={({ navigation }) => ({
        title: 'Contact',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ContentNavigator = () => (
  <Stack.Navigator
    initialRouteName="Content"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Content"
      component={Content}
      options={({ navigation }) => ({
        title: 'Content',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const CryptoNavigator = () => (
  <Stack.Navigator
    initialRouteName="Crypto"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Crypto"
      component={Crypto}
      options={({ navigation }) => ({
        title: 'Crypto Prices',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)