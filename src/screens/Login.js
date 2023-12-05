import React, { useState } from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { createDatabase, checkUser, checkExistanceDB } from '../database/DBManagement';
import {Configuration} from '../values/configuration'

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        
        checkUser(Configuration.dbName, email, password, result => {
            //console.log(result);
            if(result) loadMain()
            else console.log("Не пускаю!");
        });
    };

    const loadRegister = () => {
        navigation.navigate('Register')
    }

    const loadMain = () => {
        navigation.navigate('Main')
    }

    return(
        <View style={{backgroundColor: '#FFF', height: '100%'}}>
    
            <Image source={require('../images/imageLogin.jpg')}
                style={{width: "100%", height: "43%", marginRight: 10}}
            />
            <Text
                style={{
                    fontSize: 30,
                    alignSelf: "center",
                }}
            >Авторизация</Text>
    
            <Text
            style={{
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
                    value={email}
                    onChangeText={handleEmailChange}
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
                    value={password}
                    onChangeText={handlePasswordChange}
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
            }}
            >
                <Text style={{
                    color: 'white',
                }}
                onPress={handleSubmit}
                >Войти</Text>
            </View>
            
            <Text
    
            onPress={loadRegister}
    
            style={{
                alignSelf: "center",
                color: 'black',
                paddingVertical: 30
            }}>Зарегестрироваться</Text>
    
        </View>
    )
}
