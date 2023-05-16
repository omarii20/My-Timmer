/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Linking
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.rootContainer}>
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flexDirection: 'column',justifyContent:'flex-start', alignItems:'center'}}>
      <View style={styles.rootContainer}></View>
      <View style={styles.headerContainer}>
        <View style={{width: 50, height:50}}></View>
        <Text style={styles.text}> My Timer</Text>
        <Image style={styles.logo} source={require('./images/logo.png')} />
      </View>
      <View style={styles.loginView}>
        <Text>להתחברות לאפלקציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם</Text>
        <TextInput keyboardType='email-address' placeholder='הקלד אימייל' style={styles.inputs}></TextInput>
        <TextInput keyboardType='numeric' placeholder='הקלד מספר' style={styles.inputs}></TextInput>
      </View>
      <View style={styles.footerView}> 
        <View style={{alignSelf:'center'}}>
          <Text>צריך עזרה ?</Text>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('');
            }}>
            יצירת קשר עם התמיכה
          </Text>
        </View>
        <View>
          <Image style={styles.buttonArrow} source={require('./images/login-button-arrow.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    backgroundColor: 'whitesmoke',
  },
  headerContainer: {
    width: '100%',
    height: windowHeight * 0.1,
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height:50,
  },
  buttonArrow:{
    backgroundColor: '#9932cc',
    borderRadius:50,
    width: 50,
    height:50,
  },
  loginView: {
    width: '80%',
    height: windowHeight * 0.4,
    justifyContent:'center',
    alignItems:'center',
    marginTop:100
  },
  inputs: {
    width:'90%',
    borderColor:'gray',
    color:'black',
    height:35,
    marginTop:10,
    borderWidth:1
  },
  footerView:{
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    width: '80%',
    marginTop:100
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});

export default App;