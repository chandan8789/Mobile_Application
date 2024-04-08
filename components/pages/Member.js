import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const Box = ({img,heading, desc, onPress, aimg}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.upButton}>
        <Image style={{marginTop:20, marginLeft:15}} source={img} />
        <View>
          <Text style={styles.joinHeading}>{heading}</Text>
          <Text style={styles.joinDesc}>{desc}</Text>
        </View>
        <Image source={aimg} />
      </View>
      <View style={styles.downButton}></View>
    </TouchableOpacity>
  );
};

export default function Member() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imagcontainer}>
        <Image
          style={styles.images}
          source={require('../images/mobileLogo.png')}
        />
      </View>

      <Text style={styles.headerText}>Become a member!</Text>
      <Text style={styles.Top2Text}>
        Join as a client seeking excellence or as a
      </Text>
      <Text style={styles.Top3Text}> professional delivering experties</Text>

      <Box onPress={() => navigation.navigate('SignupPage')}
        heading={'Join as Client'}
        desc={'Elevate your business'}
        img={require('../images/Client.png')}
       
        />

      <Box onPress={() => navigation.navigate('SignupPage')}
        img={require('../images/Professional.png')}
        heading={'Join as professional'}
        desc={'Showcase your expertise'}
       
      />
    </View>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    // width: widthPercentageToDP(100),
    // height: heightPercentageToDP(100),
    backgroundColor: 'white',
  },
  imagcontainer: {
    marginTop: 100,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  images: {
  
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    fontWeight:"700"
  },
  Top2Text: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    color:"black"
  },
  Top3Text: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    marginBottom:50,
    color:"black"
  },
  upButton: {
    height: 125,
    width: 320,
    backgroundColor: "rgba(0, 83, 208, 1)",
    borderRadius: 10,
    flexDirection: 'row',
    marginTop:20
  },
  joinHeading:{
    fontSize:25,
    fontWeight:"700",
    color:"white",
    marginTop:15,
  },
  joinDesc:{
    fontSize:15,
    fontWeight:"500",
    color:"white"
  },
 
});
