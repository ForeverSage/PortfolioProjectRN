import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginBottom: 100,
    alignContent: 'center',
    alignSelf: 'center',
    marginLeft:17,
    marginRight:17,
    
  },
  body: {
    fontWeight:'700', 
    fontSize: 24, 
    width: 300, 
    alignSelf: 'flex-start'
  },
  highlight: {
    fontWeight:'700', 
    fontSize: 24, 
    width: 300, 
    alignSelf: 'flex-start',
    color: '#c2aff8'
  }
})

const Details = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <View style={{flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#d9fdfb',
          paddingHorizontal: 75
          }}>
      <StatusBar barStyle="light-content" />
      <Text style={{fontWeight: 'bold', fontSize: 50, color: '#c2aff8', marginLeft: -100, marginTop: -60}}>Ethereum is:</Text> 
      <Text style={styles.body}>
      the community-run technology powering the cryptocurrency, ether ($ETH) and <Text style={styles.highlight}>thousands</Text> of decentralized applications.</Text>
      <TouchableOpacity onPress={() => 
        navigation.navigate('Home', { from: 'Details' })
    }>
        <Image  style={{width: 100, 
                height: 100,
                marginTop: 100,
                marginBottom: 25, 
                alignSelf: 'center', 
                borderColor: 'transparent', 
                borderWidth: 0,}} 
                variant="top" 
                source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/icon-lg.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Details;
