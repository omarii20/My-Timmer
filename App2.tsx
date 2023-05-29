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
    ImageBackground
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
                <View style={styles.footerView}>
                    <LinearGradient  style={{borderRadius:50}}
                    colors={['#cd4c4c', '#cd5c5c', '#ffa500']}
                    start={{x: 0, y: 0.8}}
                    end={{x: 1, y: 1}}
                    >
                    <Image source={require('./images/login-button-arrow.png')} style={styles.buttonArrow}/>
                    </LinearGradient>
                    <View style={styles.text1}>
                        <Text >צריך עזרה ?</Text>
                        <Text
                            style={styles.hyperlinkStyle}
                            onPress={() => {
                            Linking.openURL('');
                            }}>
                            יצירת קשר עם התמיכה
                        </Text>
                    </View>
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
        height: windowHeight * 0.2,
        flexDirection:'row-reverse',
        alignItems:'flex-end',
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
        borderWidth:1,
        marginTop:20
    },
    loginView: {
        height: windowHeight * 0.5,
        alignItems:'center',
        justifyContent:'center',
    
    },
    buttonArrow:{
        width: 60,
        height:60,
    },
    hyperlinkStyle: {
        color: 'blue',
    },
    text: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerView:{
        flexDirection:'row',
        justifyContent: 'space-around',
      },
      text1:{
        alignSelf:'center'        
      }
      
});

export default App;