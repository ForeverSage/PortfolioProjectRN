import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, StatusBar, Alert
} from 'react-native';
import { Image, Button } from 'react-native-elements';
import ModernHeader from 'react-native-modern-header';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 25,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Profile = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <ModernHeader
      title='Profile'
      height='18%'
      leftIconSize={30}
      rightIconSize={30}
      leftIconOnPress={() =>
        navigation.navigate('Home', { from: 'Profile' })
      }
      rightIconOnPress={() =>
        Alert.alert('Loving yourself is great and all...\n\u2764')
      }
    />
    <Image 
      source={require('../../../assets/images/IMG_1950.jpg')}  
      style={{width: 100, height: 100, borderRadius: 100/ 2}} 
    />
    <Text style={styles.title}>Tyler G.</Text>
    <Button
      buttonStyle={{
        backgroundColor: '#f5bdb3',
        marginBottom: 50,
        width: 110,
        alignSelf: 'center'
    }}
      iconRight
      title="Contact   "
      onPress={() => {
        navigation.navigate('Contact', { from: 'Profile' })
      }}
      icon={
        <Icon
          name="user"
          size={28}
          color="white"
        />
      }
    />
  </View>
)

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile;