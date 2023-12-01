import React from "react";
import {Text, View, Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default function Login({navigation}) {
    const loadScene = () => {
        navigation.navigate('Register')
    }

    return(
        <View style={{backgroundColor: '#FFF', height: '100%'}}>
    
            <Image source={require('../images/imageLogin.jpg')}
                style={{width: "100%", height: "43%", marginRight: 10}}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: "SemiBold",
                    alignSelf: "center",
                }}
            >Авторизация</Text>
    
            <Text
            style={{
                //fontFamily:"SemiBold",
                marginHorizontal: 55,
                textAlign: 'center',
                marginTop: 5,
                opacity: .4,
            }}
            >Введите логин и пароль, который создавали ранее при регистрации</Text>
    
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#880000",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="mail" color="#880000" size={24}/>
                <TextInput
                    placeholder="Email"
                    style={{paddingHorizontal: 10}}
                />
            </View>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#880000",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                <Icon name="lock" color="#880000" size={24}/>
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={{paddingHorizontal: 10}}
                />
            </View>
    
            <View style={{
                marginHorizontal: 55,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                backgroundColor: '#880000',
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text style={{
                    color: "white",
                    fontFamily: "SemiBold"
                }}>Войти</Text>
            </View>
            
            <Text
    
            onPress={loadScene}
    
            style={{
                alignSelf: "center",
                color: "556B2F",
                fontFamily: "SemiBold",
                paddingVertical: 30
            }}>Зарегестрироваться</Text>
    
        </View>
    )
}
