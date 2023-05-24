import React, { Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TextInput,
    Linking,
    Dimensions,
    ImageBackground,
} from 'react-native';
class App extends Component {
    render() {
        return (
            <SafeAreaView style={styles.rootContainer}>
                <View style={styles.headerContainer}>
                    <Image style={styles.logo} source={require('./images/logoMyCar.png')} />
                </View>
                <View style={styles.loginView}>
                    <Text style={styles.text}>להתחברות לאפלקציית אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם</Text>
                    <TextInput keyboardType='numeric' placeholder='מספר טלפון' style={styles.inputs}>
                    </TextInput>
                    <TextInput keyboardType='email-address' placeholder='כתובת מייל' style={styles.inputs}></TextInput>
                </View>
                <View>
                {/* <LinearGradient colors={['#4c669f', '#3b5998', '#4c669f']}>
                    <ImageBackground source={require('./images/login-button-arrow.png')} style={styles.buttonArrow} />
                </LinearGradient> */}
                    <LinearGradient
                    colors={['#ff6347', '#fa8072', '#ffff00']}
                    style={styles.linearGradient}
                    // locations={Number[0.1,1]}
                    
                    >
                        <Image source={require('./images/login-button-arrow.png')} />
                    </LinearGradient>
                    <Text>צריך עזרה ?</Text>
                    <Text
                        style={styles.hyperlinkStyle}
                        onPress={() => {
                        Linking.openURL('');
                        }}>
                        יצירת קשר עם התמיכה
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
      flex:1,
      backgroundColor: 'white',
    },
    headerContainer: {
        width: '100%',
        height: windowHeight * 0.3,
        flexDirection: 'row-reverse',
        justifyContent:'space-between',
        alignItems:'center',
      },
    logo:{
        height:100,
        width:360
    },
    inputs: {
        width:'90%',
        borderColor:'gray',
        color:'black',
        height:50,
        borderWidth:1
    },
    loginView: {
        height: windowHeight * 0.4,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    buttonArrow:{
        borderRadius:50,
        width: 50,
        height:50,
    },
    hyperlinkStyle: {
        color: 'blue',
    },
    text: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoSquare:{
        width:'10',
        height:'10'    
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        height: 50,
        width: 50,
      },
});

export default App;