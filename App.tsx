import {View, Text} from 'react-native';
import React from 'react';
import Member from './components/pages/Member';
import SignupPage from './components/auth/SignupPage';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <PaperProvider>
    //   <View style={{flex: 1}}>
    //     {/* <Member /> */}
    //     <SignupPage />
    //   </View>
    // </PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Member" component={Member} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
