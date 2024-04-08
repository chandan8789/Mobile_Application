import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SignupField from '../pages/SignupField';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';

const SignBox = ({jimg, title, about, checked, setChecked}) => {
  return (
    <TouchableOpacity>
      <View style={styles.mainContainer}>
        <View style={{marginLeft: 20}}>
          <Image style={{marginTop: 10}} source={jimg} />
          <View>
            <Text style={styles.ClientTitle}>{title}</Text>
            <Text style={styles.clientAbout}>{about}</Text>
          </View>
          
        </View>
        <View>
        <RadioButton
            value="first"
            status={checked === true ? 'checked' : 'unchecked'}
            onPress={setChecked}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SignupPage = () => {
  const [checked, setChecked] = useState(0);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginTop: 40}}>
            <Image source={require('../images/mobileLogo.png')} />
          </View>
          <View>
            <Text style={styles.signup}>Sign up!</Text>
            <Text style={styles.joinClient}>
              Join as a client seeking excellence or as a
            </Text>
            <Text style={styles.professional}>
              professional delivering expertise.
            </Text>
          </View>
          <View>
            <SignBox
              jimg={require('../images/proSignup.png')}
              title={'Join as Client'}
              about={'Elevate your business'}
              checked={checked === 0}
              setChecked={() => setChecked(0)}
            />
            <SignBox
              jimg={require('../images/JoinSignup.png')}
              title={'Join as Professional'}
              about={'Showcase your expertise'}
              checked={checked === 1}
              setChecked={() => setChecked(1)}
            />
          </View>
        </View>
       
        <SignupField />
      </ScrollView>
    </>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  signup: {
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '700',
    fontSize: 22,
    color: 'black',
  },
  joinClient: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 20,
    color: 'black',
  },
  professional: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 8,
    color: 'black',
    textAlign: 'center',
  },
  mainContainer: {
    height: heightPercentageToDP(15),
    width: widthPercentageToDP(90),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    flexDirection:"row"
  },
  ClientTitle: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
  },
  clientAbout: {
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
  },
  nameField: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(6),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 20,
  },
});
