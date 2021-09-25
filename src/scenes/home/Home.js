import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableOpacity, View, Text, Image,  StatusBar, ScrollView, 
} from 'react-native';
import { Card } from 'react-native-elements';

const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'transparent',
      borderWidth: 0,
      backgroundColor: '#d9fdfb',
      opacity: 1
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
      alignContent: 'center',
      alignSelf: 'center'
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#d9fdfb',
      borderWidth: 0,
      borderColor: 'transparent',
      marginLeft:0,
      marginRight:0,
      opacity: 1
      
    }
  })


const Home = ({ navigation }) => (
  <View style={styles.root}>
    <ScrollView>
    <StatusBar barStyle="light-content" />
    <Card containerStyle={styles.container}>
    <Text style={styles.title}></Text>
    <TouchableOpacity onPress={() => navigation.navigate('Details', { from: 'Home' })
    }>
    <Image style={{
           width: 200, 
           height: 200, 
           marginBottom: 25, 
           alignSelf: 'center', 
           borderColor: 'transparent', 
           borderWidth: 0
           }} 
      variant="top"
      source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/icon-lg.png')}
    />
    </TouchableOpacity>
    </Card>
    </ScrollView>
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home;