import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Konular from '../screens/konular';
import Result from '../screens/result';
import BirinciHafta from '../gunler/birinciGun';
import Endeks from '../screens/endeks';
import IkinciHafta from '../gunler/ikinciGun';
import UcuncuHafta from '../gunler/ucuncuGun';
import DorduncuHafta from '../gunler/dorduncuGun';
import BesinciGun from '../gunler/besinciGun';
import AltinciGun from '../gunler/altinciGun';
import YedinciGun from '../gunler/yedinciGun';



const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Konular" component={Konular} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
            <Stack.Screen name="BirinciHafta" component={BirinciHafta} options={{ headerShown: false }} />
            <Stack.Screen name="Endeks" component={Endeks} options={{ headerShown: false }} />
            <Stack.Screen name="IkinciHafta" component={IkinciHafta} options={{ headerShown: false }} />
            <Stack.Screen name="UcuncuHafta" component={UcuncuHafta} options={{ headerShown: false }} />
            <Stack.Screen name="DorduncuHafta" component={DorduncuHafta} options={{ headerShown: false }} />
            <Stack.Screen name="BesinciGun" component={BesinciGun} options={{ headerShown: false }} />
            <Stack.Screen name="AltinciGun" component={AltinciGun} options={{ headerShown: false }} />
            <Stack.Screen name="YedinciGun" component={YedinciGun} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}
export default MyStack