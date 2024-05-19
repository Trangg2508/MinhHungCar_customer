import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import DetailScreen from './screens/DetailScreen';
import { Entypo } from '@expo/vector-icons';
import ListProductScreen from './screens/ListProductScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import CheckoutScreen from './screens/CheckoutScreen';

const Stack = createNativeStackNavigator();
const Bottoms = createBottomTabNavigator();

const GlobalStyles = {
  colors: {
    backgroundColorPrimary200: '#773BFF',
  },
};

const BottomTabs = () => {
  return (
    <Bottoms.Navigator
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.backgroundColorPrimary200,
      }}>
      <Bottoms.Screen
        name='Home'
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Trang chủ',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Bottoms.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          unmountOnBlur: true,
          title: 'Chat với admin',
          tabBarLabel: 'Chat',
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarIcon: ({ size, color }) => <Entypo name="home" size={24} color="black" />,
        }}
      />
    </Bottoms.Navigator>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={SignInScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={SignUpScreen} />
        <Stack.Screen
          name='BottomTabs'
          component={BottomTabs}
          options={{
            headerShown: false,
            title: '',
          }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{
            title: 'Chi tiết sản phẩm',
          }}
        />
        <Stack.Screen
          name='Checkout'
          component={CheckoutScreen}
          options={{
            headerBackTitleVisible: false,
            title: 'Xác nhận đặt xe',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
