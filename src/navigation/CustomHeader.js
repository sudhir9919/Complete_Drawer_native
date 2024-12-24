// CustomHeader.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Import Ionicons for hamburger icon

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.hamburgerIcon}>
        <Icon name="menu" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    height: 60,  // Adjust based on your header height
  },
  hamburgerIcon: {
    padding: 10,
    
  },
});
