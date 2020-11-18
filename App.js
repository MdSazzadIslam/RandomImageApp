import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const rndImages = [
  require('./images/bg.jpg'),
  require('./images/bg1.jpg'),
  require('./images/bg2.jpg'),
  require('./images/bg3.jpg')
];

const rndImage = rndImages[Math.floor(Math.random() * rndImages.length)];
 
const App = () => {
  return (
    <View style={styles.container}>
      <Image source={rndImage} style={styles.img}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 500,
    height: 700,
    resizeMode: "cover",
    
  }
});

export default App;