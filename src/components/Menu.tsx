import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    { text: 'Option 1', action: () => console.log('Option 1 selected') },
    { text: 'Option 2', action: () => console.log('Option 2 selected') },
    { text: 'Option 3', action: () => console.log('Option 3 selected') },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuToggle} onPress={toggleMenu}>
        <Text style={styles.menuToggleText}>Menu</Text>
      </TouchableOpacity>
      {showMenu && (
        <View style={[styles.menu, styles.menuVisible]}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.action}
            >
              <Text style={styles.menuItemText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    zIndex: 1, // Ensure menu appears above other content
  },
  menuToggle: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  menuToggleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menu: {
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    position: 'absolute',
    zIndex: 2, // Ensure menu items are above menu toggle button
  },
  menuVisible: {
    zIndex: 3, // Increase zIndex when menu is visible to ensure it's above everything else
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Menu;
