import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { Video } from 'expo-av';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0
  },
  title: {
    fontSize: 50,
    marginTop: 20,
    marginBottom: 50
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,

  }
})

const mmask='https://etherscan.io/address/0x244205e859db96c290e1cce110f9a021e8ec42b8'


const Contact = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Card containerStyle={{marginTop: 0, borderWidth: 0, elevation: 0}}
      iconDisable
      title="Title"
      description="Content"
      bottomRightText="30"
      onPress={() => {}}
      alignItems='center'
    >
      <Card containerStyle={{flexDirection: 'row', borderWidth: 0, elevation: 0 }}>
      <Text style={styles.title}>Contact Me</Text>
      <Text style={styles.text}>Tyler Gajdocek</Text>
      <Text style={styles.text}>Centerville, MN 55038</Text>
      <Text style={styles.text}>U.S.A.</Text>
      <Text style={styles.text}>Phone: 1-555-555-5555</Text>
      <Text style={{alignItems: 'center', fontSize: 18}}>Email: TylerFromMN@gmail.com</Text>
      <Card containerStyle={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 0, elevation: 0, marginTop: 40 }}>
        <TouchableOpacity>
      <Image 
        source={require('../../../assets/images/metamask-icon-md.jpg')}
        style={{height: 40, width: 40, alignSelf: 'center', marginLeft: 38 }}
        onPress={() => {
          Linking.openURL(mmask)}}
        />
        <Text style={styles.text}>ENS: xSage.eth</Text>
        </TouchableOpacity>
        </Card>
        </Card>
    <Card containerStyle={{borderWidth: 0, alignSelf: 'center', elevation: 0, marginTop: 100, paddingBottom: 100}}>
      <Video
        source={{ uri: 'https://i.imgur.com/CmnE8IH.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        isLooping
        resizeMode="cover"
        style={{ width: 150, height: 150, }}
      />
      </Card>
    </Card>
  </View>
)


Contact.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Contact.defaultProps = {
  navigation: { navigate: () => null },
}

export default Contact;