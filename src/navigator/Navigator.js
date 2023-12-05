import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Main from '../screens/Main';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer initialRouteName="Login">
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{title: 'Окно логина', headerShown: false}}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{title: 'Окно регистрации', headerShown: false}}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title: 'Основное окно', headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
