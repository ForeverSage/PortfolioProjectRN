import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, Text  } from 'react-native';
import { Image } from 'react-native-elements'
import { Icon } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    paddingBottom: 15,
  },
  
  logo: {
    width: 66,
    height: 58,
  },
}

const DrawerMenu = (props) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color='#cfb0fa'
        backgroundColor='white'
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.main}>
      <Image
        style={styles.tinyLogo}
        source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/icon-sm.png')}
        onPress={() => {
          props.navigation.navigate('Home', { from: '' })
        }}
      />
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu;
