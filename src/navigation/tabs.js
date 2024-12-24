import {React, useState} from "react";
import { StyleSheet,Image } from "react-native";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Report from "../screens/Report";
import MyProfile from "../screens/MyProfile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [userImage, setUserImage] = useState(null);
  const [loading, setLoading] = useState(true);
 
  return (
  <Tab.Navigator
  screenOptions={{
  headerShown: false,
  tabBarStyle: { backgroundColor: '#A50104', height: 60 },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#d3d3d3',
  tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
  }}
  >
  <Tab.Screen
  name="Home"
  component={Home}
  options={{
  tabBarIcon: ({ color }) => (
    <Icon
    name="home"  // Use the "home" icon from FontAwesome
    size={24}     // Set the size of the icon
    color={color} // Color depends on whether the tab is active or inactive
  />
  ),
  }}
  />
  <Tab.Screen
  name="Dashboard"
  component={Dashboard}
  options={{
  tabBarIcon: ({ color }) => (
    <Icon
    name="dashboard"  // Use the "home" icon from FontAwesome
    size={24}     // Set the size of the icon
    color={color} // Color depends on whether the tab is active or inactive
  />
  ),
  }}
  />
  
  <Tab.Screen
  name="Approval"
  component={Report}
  options={{
  tabBarIcon: ({ color }) => (
    <Icon
    name="check"  // Use the "home" icon from FontAwesome
    size={24}     // Set the size of the icon
    color={color} // Color depends on whether the tab is active or inactive
  />
  ),
  }}
  />
 
 <Tab.Screen
  name="Profile"
  component={MyProfile}
  options={{
  tabBarIcon: ({ color }) => (
    <Icon
    name="user"  // Use the "home" icon from FontAwesome
    size={24}     
    color={color} 
  />
  ),
  }}
  />
 
  </Tab.Navigator>
  );
 }
 export default TabNavigator;
 const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#000',
    },
 });
