import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import { HomeNavigator, ProfileNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.blue : colors.gray}
                size={20}
                solid
              />
            )
          case 'Profile':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.blue : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.blue,
      inactiveTintColor: colors.gray,
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
