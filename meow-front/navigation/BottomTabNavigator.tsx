/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import StepOneScreen from '../screens/StepOneScreen';
import StepTwoScreen from '../screens/StepTwoScreen';
import { BottomTabParamList, StepOneParamList, StepTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="StepOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="StepOne"
        component={StepOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="StepTwo"
        component={StepTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          tabBarVisible: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const StepOneStack = createStackNavigator<StepOneParamList>();

function StepOneNavigator() {
  return (
    <StepOneStack.Navigator>
      <StepOneStack.Screen
        name="StepOneScreen"
        component={StepOneScreen}
        options={{ headerTitle: 'Step One' }}
      />
    </StepOneStack.Navigator>
  );
}

const StepTwoStack = createStackNavigator<StepTwoParamList>();

function StepTwoNavigator() {
  return (
    <StepTwoStack.Navigator>
      <StepTwoStack.Screen
        name="StepTwoScreen"
        component={StepTwoScreen}
        options={{ headerTitle: 'Step Two' }}
      />
    </StepTwoStack.Navigator>
  );
}
