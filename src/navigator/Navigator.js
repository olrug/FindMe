import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer initialRouteName="Login">
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{title: 'Окно логина'}}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{title: 'Окно регистрации'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
