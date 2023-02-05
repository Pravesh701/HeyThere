import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

//Custom Imports
import Map from '../screens/Map';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import color from '../utils/color';
import routeName from './routeName';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
]);

const defaultScreenOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: color.yellow,
    },
    headerTintColor: color.white,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={routeName.HOME}
                screenOptions={defaultScreenOptions}
            >
                <Stack.Screen options={{ title: 'Home' }} name={routeName.HOME} component={Home} />
                <Stack.Screen options={{ title: 'Chat', }} name={routeName.CHAT} component={Chat} />
                <Stack.Screen options={{ title: 'Map' }} name={routeName.MAP} component={Map} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;