import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigationState } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./tabs";  // Import your TabNavigator
import CustomHeader from "../navigation/CustomHeader";  // Import the CustomHeader component
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const currentRoute = useNavigationState(state => state.routes[state.index]?.name);
  const [userImage, setUserImage] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,  // Enable custom header
      }}
      drawerContent={(props) => {
        return (
          <View style={styles.drawerContent}>
            <View style={styles.drawerHeader}>
              <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={styles.closeButton}>
                <Icon name="close" size={24} />
              </TouchableOpacity>

              <View style={styles.HeaderLogo}>
                {/* Logo Section */}
                <Image source={require('../assets/Images/gemba-logo.png')} style={styles.Dlogo} />
                <TouchableOpacity>
                  <Icons name="user-circle" size={30} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Drawer Items */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Tabs', { screen: 'Gifts' })}
              style={[
                styles.drawerItem,
                currentRoute === 'Gifts' && styles.selectedItem,
              ]}
            >
              <Image
                source={require('../assets/Images/gemba-logo.png')}
                style={[styles.icon, currentRoute === 'Gifts' && styles.selectedIcon]}
              />
              <Text style={[styles.label, currentRoute === 'Gifts' && styles.selectedText]}>
                Gift Distribution
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Tabs', { screen: 'Dashboard' })}
              style={[
                styles.drawerItem,
                currentRoute === 'Dashboard' && styles.selectedItem,
              ]}
            >
              <Image
                source={require('../assets/Images/gemba-logo.png')}
                style={[styles.icon, currentRoute === 'Dashboard' && styles.selectedIcon]}
              />
              <Text style={[styles.label, currentRoute === 'Dashboard' && styles.selectedText]}>
                Dashboard
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Tabs', { screen: 'Approval' })}
              style={[
                styles.drawerItem,
                currentRoute === 'Approval' && styles.selectedItem,
              ]}
            >
              <Image
                source={require('../assets/Images/gemba-logo.png')}
                style={[styles.icon, currentRoute === 'Approval' && styles.selectedIcon]}
              />
              <Text style={[styles.label, currentRoute === 'Approval' && styles.selectedText]}>
                Approval
              </Text>
            </TouchableOpacity>

            {/* Add a Spacer for Bottom Layout */}
            <View style={styles.main} />

            {/* Log Out Section */}
            <View style={styles.logOutContainer}>
              <Icon name='exit-outline' size={25} color='red'/>
              <TouchableOpacity
                onPress={() => props.navigation.replace('Login')}
                style={styles.logOut}
              >
                <Text style={styles.logOutText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        options={({ navigation }) => ({
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerTitle: '',  // Remove tab name from the header
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 10,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  closeButton: {
    padding: 5,
  },
  HeaderLogo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 87,
    marginRight: 20,
  },
  Dlogo: {
    width: 90,
    height: 40,
    resizeMode: 'contain',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
    paddingVertical: 8,
    gap: 15,
    marginTop: 20,
  },
  selectedItem: {
    backgroundColor: '#A50104',
    borderRadius: 30,
  },
  label: {
    fontSize: 16,
    marginLeft: 15,
    color: '#000',
    fontWeight: '600',
  },
  selectedText: {
    color: '#fff',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  selectedIcon: {
    tintColor: '#fff',
  },
  logOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 25,
    marginBottom:60,
    gap:30
  },
  logicon: {
    width: 18,
    height: 18,
    marginRight: 15,
    tintColor: '#A50104',
  },
  logOut: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutText: {
    fontSize: 16,
    color: '#A50104',
    fontWeight: '600',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

