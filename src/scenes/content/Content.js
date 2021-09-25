import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, ScrollView, Image, StatusBar, Linking
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: '#211d42',
    opacity: 1,
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
    backgroundColor: '#211d42',
    borderWidth: 0,
    borderColor: 'transparent',
    marginLeft:0,
    marginRight:0,
    opacity: 1,
    height: undefined, 
    width: undefined,
    elevation: 0
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 2000, 
    width: 400,
    resizeMode: 'contain',
    marginTop: -270,
    marginBottom: -250
  }
})
    
const eth2="https://ethereum.org/en/eth2/"

const Content = ({ navigation }) => (
  <View style={styles.root}>
    <ScrollView>
    <StatusBar barStyle="light-content" />
    <Card containerStyle={styles.container}>
    <Image style={styles.imageStyle}
           resizeMode={'cover'}
           variant="top" 
           source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/f18fhigh.jpg')}
    />
    </Card>
    <Card containerStyle={{
           backgroundColor: '#211d42',
           borderWidth: 0,
           borderColor: 'transparent',
           elevation: 0
    }}>
    <Button
      buttonStyle={{backgroundColor: '#cfb0fa',
                    marginBottom: 50,
                    width: 200,
                    alignSelf: 'center'
    }}
      iconRight
      title="Learn More   "
      onPress={() => {
        Linking.openURL(eth2)}}
      icon={
        <Icon
          name="brain"
          size={28}
          color="white"
        />
      }
    />
    </Card>
    </ScrollView>
  </View>
)


Content.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Content.defaultProps = {
  navigation: { navigate: () => null },
};

export default Content;