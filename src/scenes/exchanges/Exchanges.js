import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, ScrollView, Image, StatusBar, Linking
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#cfb0fa',
  },
  scroller: {
    flex: 1,
    }
})

const cb='https://www.coinbase.com'
const binance='https://www.binance.US'
const krak='https://kraken.com'
const kuc='https://kucoin.com'
const uni='https://uniswap.io'



const Exchanges = ({ navigation }) => (
  <View style={styles.root}>
  <ScrollView>
    <StatusBar barStyle="light-content" />
    <Text style={{fontSize: 24, marginBottom: 20, marginTop: 25, alignContent: 'center', alignSelf: 'center', fontWeight: 'bold'}}>Which exchange is right for you?</Text>
    
  <Card>
    <Text style={{fontSize: 30, marginBottom: 20, alignSelf: 'center', backgroundColor: '#0052ff', paddingHorizontal: 75, paddingVertical: 5, color: 'white'}}>Coinbase</Text>
    <Text style={{flex: 1, height: 1, backgroundColor: 'black', marginBottom: 25}} />
    <Image style={{width: 200, height: 200, marginBottom: 25, alignSelf: 'center'}}  variant="top" source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/coinbaseLogo.png')} />
    <Text style={{marginBottom: 25, paddingHorizontal: 25}}>
      As the leading mainstream cryptocurrency exchange in the United States, Coinbase has become a standard on-ramp for new crypto investors.{'\n'}{'\n'}Coinbase offers a wide variety of products including cryptocurrency investing, an advanced trading platform, custodial accounts for institutions, a wallet for retail investors, and its own U.S. dollar stable-coin. 
      </Text>
      <Text style={{flex: 1, height: 1, width: 200, backgroundColor: 'black',  marginBottom: 25, alignSelf: 'center'}} />
      <FlipCard 
        style={{}}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        marginBottom={35}
      >
      {/* Face Side */} 
      <View style={{backgroundColor: 'green', flex: 1,
      flexDirection: 'row', alignSelf: 'center', height: 40 }}>
      <Text style={{ alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white' }}>Pros » Easy to use // Insured</Text>
      </View>
      {/* Back Side */}
      <View style={{backgroundColor: 'red', flex: 1,
      flexDirection: 'row', alignSelf: 'center', height: 40}}>
      <Text style={{alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Cons » Centralized // In bed with Gov't</Text>
      </View>
      </FlipCard>
      <Button buttonStyle={{backgroundColor: '#0052ff', alignSelf: 'center', width: 200, marginBottom: 25}}  
      variant="primary"
      title='Visit Exchange'
      onPress={() => {
        Linking.openURL(cb)}}
      >
      </Button>
    </Card>




  <Card containerStyle={{marginTop: 75}}>
  <Text style={{fontSize: 30, marginBottom: 20, alignSelf: 'center', backgroundColor: '#f0b90b', paddingHorizontal: 75, paddingVertical: 5, color: 'white'}}>Binance.US</Text>
    <Text style={{flex: 1, height: 1, backgroundColor: 'black', marginBottom: 25}} />
    <Image style={{width: 200, height: 200, marginBottom: 25, alignSelf: 'center'}}  variant="top" source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/binanceLogo.png')} />
    <Text style={{marginBottom: 25, paddingHorizontal: 25}}>
      Binance.US is an American partner of Binance, the world’s largest cryptocurrency exchange by trading volume, and which was founded in China in 2017.{'\n'}{'\n'}The original platform stopped accepting U.S. users in 2019, and announced it would instead partner with a U.S.-based version of its platform called Binance.US.</Text>
      <Text style={{flex: 1, height: 1, width: 200, backgroundColor: 'black',  marginBottom: 25, alignSelf: 'center'}} />
      <FlipCard 
        style={{}}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        marginBottom={35}
      >
    {/* Face Side */}
    <View style={{backgroundColor: 'green', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40 }}>
      <Text style={{ alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Pros » High volume // Good Security</Text>
    </View>
    {/* Back Side */}
    <View style={{backgroundColor: 'red', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40}}>
      <Text style={{alignSelf: 'center', fontSize: 16, paddingHorizontal: 10, color: 'white'}}>Cons » Limited compared to 'Binance.com'</Text>
    </View>
    </FlipCard>
    <Button buttonStyle={{backgroundColor: '#f0b90b', alignSelf: 'center', width: 200, marginBottom: 25}}
    variant="primary"
    title='Visit Exchange'
    onPress={() => {
      Linking.openURL(binance)}}
    >
    </Button>
  </Card>




  <Card containerStyle={{marginTop: 75}}>
  <Text style={{fontSize: 30, marginBottom: 20, alignSelf: 'center', backgroundColor: '#5e3fde', paddingHorizontal: 75, paddingVertical: 5, color: 'white'}}>Kraken</Text>
    <Text style={{flex: 1, height: 1, backgroundColor: 'black', marginBottom: 25}} />
    <Image style={{width: 300, height: 200, marginBottom: 25, resizeMode: 'contain', alignSelf: 'center'}}  variant="top" source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/krakenLogo.png')} />
      <Text style={{marginBottom: 25, paddingHorizontal: 25}}>
      Kraken's low fee structure and robust security features make it a terrific platform for high or low-volume users who don't mind the added transaction steps.{'\n'}{'\n'}But, U.S. users have limited funding options and don't have access to the mobile app, making Kraken a better choice for international users.</Text>
      <Text style={{flex: 1, height: 1, width: 200, backgroundColor: 'black',  marginBottom: 25, alignSelf: 'center'}} />
      <FlipCard 
        style={{}}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        marginBottom={35}
      >
    {/* Face Side */}
    <View style={{backgroundColor: 'green', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40 }}>
      <Text style={{ alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Pros » U.S.-Based // Staking</Text>
    </View>
    {/* Back Side */}
    <View style={{backgroundColor: 'red', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40}}>
      <Text style={{alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Cons » No tax support</Text>
    </View>
    </FlipCard>
    <Button buttonStyle={{backgroundColor: '#5e3fde', alignSelf: 'center', width: 200, marginBottom: 25}}  
    variant="primary"
    title='Visit Exchange'
    onPress={() => {
      Linking.openURL(krak)}}
    >
    </Button>
  </Card>




  <Card containerStyle={{ marginTop: 75 }}>
  <Text style={{fontSize: 30, marginBottom: 20, alignSelf: 'center', backgroundColor: '#23af91', paddingHorizontal: 75, paddingVertical: 5, color: 'white'}}>KuCoin</Text>
    <Text style={{flex: 1, height: 1, backgroundColor: 'black', marginBottom: 25}} />
    <Image style={{width: 200, height: 200, marginBottom: 25, alignSelf: 'center'}}  variant="top" source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/kucoinLogo.png')} />
      <Text style={{marginBottom: 25, paddingHorizontal: 25}}>
      You'll never want to leave this hidden gem, KuCoin has a much broader selection of cryptocurrencies than you'll get at many exchanges or brokerages.{'\n'}{'\n'}If you want to branch out into smaller marketcap/less popular coins, KuCoin is worth a look. It also has a Spotlight section that promotes new currencies so people can get in early.</Text>
      <Text style={{flex: 1, height: 1, width: 200, backgroundColor: 'black',  marginBottom: 25, alignSelf: 'center'}} />
      <FlipCard 
        style={{}}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        marginBottom={35}
      >
    {/* Face Side */}
    <View style={{backgroundColor: 'green', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40 }}>
      <Text style={{ alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Pros » Very large variety of coins.</Text>
    </View>
    {/* Back Side */}
    <View style={{backgroundColor: 'red', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40}}>
      <Text style={{alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Cons » Low trading volume</Text>
    </View>
    </FlipCard>
    <Button buttonStyle={{backgroundColor: '#23af91', alignSelf: 'center', width: 200, marginBottom: 25}}  
    variant="primary"
    title='Visit Exchange'
    onPress={() => {
      Linking.openURL(kuc)}}
    >
    </Button>
  </Card>



  <Card containerStyle={{ marginTop: 75, paddingBottom: 0 }}>
  <Text style={{fontSize: 30, marginBottom: 20, alignSelf: 'center', backgroundColor: '#ed186a', paddingHorizontal: 75, paddingVertical: 5, color: 'white'}}>Uniswap</Text>
    <Text style={{flex: 1, height: 1, backgroundColor: 'black', marginBottom: 25}} />
    <Image style={{width: 200, height: 200, marginBottom: 25, alignSelf: 'center'}}  variant="top" resizeMode='contain' source={require('C:/Users/tyler/Desktop/Portfolio/PPeth/assets/images/uniswapLogo.jpg')} />
    <Text  style={{marginBottom: 25, paddingHorizontal: 25}}>
    Uniswap is a decentralized exchange (DEX) that enables users to fund liquidity pools and mint profits.{'\n'}{'\n'}
    The platform allows users to trade Ethereum-fueled ERC-20 tokens through its user-friendly web interface. In the past, decentralized exchanges had short order books and abysmal UXs, leaving an immense scope for effective decentralized exchange.{'\n'}{'\n'}
    Thanks to Uniswap, users now don’t need to bear flaws as they get to trade Ethereum-based protocols using a web 3.0 wallet easily. You can do so without depositing or withdrawing to a centralized managed order book. Uniswap provides users with an opportunity to trade without any third-party involvement. 
    </Text>
    <Text style={{flex: 1, height: 1, width: 200, backgroundColor: 'black',  marginBottom: 25, alignSelf: 'center'}} />
      <FlipCard 
        style={{}}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        marginBottom={35}
      >
    {/* Face Side */}
    <View style={{backgroundColor: 'green', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40 }}>
      <Text style={{ alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Pros » Selection // Decentralization</Text>
    </View>
    {/* Back Side */}
    <View style={{backgroundColor: 'red', flex: 1,
    flexDirection: 'row', alignSelf: 'center', height: 40}}>
      <Text style={{alignSelf: 'center', fontSize: 18, paddingHorizontal: 10, color: 'white'}}>Cons » Not beginner friendly</Text>
    </View>
    </FlipCard>
    <Button buttonStyle={{backgroundColor: '#ed186a', alignSelf: 'center', width: 200, marginBottom: 25}}
    variant="primary"
    title='Visit Exchange'
    onPress={() => {
      Linking.openURL(uni)}}
    >
    </Button>
    </Card>
    </ScrollView>
  </View>  
)
  

Exchanges.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Exchanges.defaultProps = {
  navigation: { navigate: () => null },
}


export default Exchanges;