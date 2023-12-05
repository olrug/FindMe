import React, { useState } from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import { createDatabase, insertUser, checkExistanceDB } from '../database/DBManagement';
import {Configuration} from '../values/configuration'

export default function Register({navigation}) {
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleEmailChange = (text) => {
            setEmail(text);
        };

        const handlePasswordChange = (text) => {
            setPassword(text);
        };

        const handleSubmit = () => {
            // Обработка email и password

            insertUser(Configuration.dbName ,email,password)
            console.log("Данные успешно внесены! Заходи.")
            loadScene();
        };

        const loadScene = () => {
            navigation.navigate('Login')
        }

        return(
            <View style={{backgroundColor: '#FFF', height: '100%'}}>
                
                <Image source={require('../images/imageRegister.jpg')}
                    style={{width: "100%", height: "43%"}}
                />
                <Text
                    style={{
                        fontSize: 30,
                        alignSelf: "center",
                    }}
                >Регистрация</Text>

                <Text
                style={{
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: .4,
                }}
                >Введите, пожалуйста, свои персональные данные для дальнейшей персонализации. Это необходимо только один раз</Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 50,
                    paddingHorizontal: 10,
                    borderColor: "#556B2F",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    
                    <TextInput
                        value={email}
                        onChangeText={handleEmailChange}
                        placeholder="Email"
                        placeholderTextColor="#55682F"
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
                    borderColor: "#556B2F",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    
                    <TextInput
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry
                        placeholder="Пароль"
                        placeholderTextColor="#55682F"
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
                    borderColor: "#556B2F",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    
                    <TextInput
                        secureTextEntry
                        placeholder="Пароль еще раз"
                        placeholderTextColor="#55682F"
                        style={{paddingHorizontal: 10}}
                    />
                </View>

                <View style={{
                    alignItems: "center",
                    marginHorizontal: 55,
                    marginTop: 30,
                    paddingHorizontal: 10,
                    backgroundColor: "#556B2F",
                    borderRadius: 23,
                    paddingVertical: 10
                }}
                >
                    
                    <Text 
                    onPress={handleSubmit}

                    style={{
                    }}>Регистрация</Text>
                    
                </View>
                
            </View>
        )
    }