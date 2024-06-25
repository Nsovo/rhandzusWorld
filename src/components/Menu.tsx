import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { text: 'Play Sound', action: () => console.log('Option 1 selected') },
    { text: 'Affirmation', action: () => console.log('Option 2 selected') },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleOverlayPress = () => {
    if (showMenu) {
      closeMenu();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuToggle} onPress={toggleMenu}>
        {/* <Text style={styles.menuToggleText}>Menu</Text> */}
        <Image source={require('../assets/menu.png')} style={styles.menuImage} />
      </TouchableOpacity>
      {showMenu && (
        <>
          <TouchableWithoutFeedback onPress={handleOverlayPress}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <View style={styles.menu} ref={menuRef}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  item.action();
                  closeMenu();
                }}
              >
                <Text style={styles.menuItemText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  menuImage: {
    width: 20,
    height: 20
  },
  menuToggle: {
    backgroundColor: '#BC76BA',
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
    position: 'absolute',
    top: 50, // Adjust position from top as needed
    left: 0,
    backgroundColor: '#BC76BA',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200, // Adjust width as needed
    zIndex: 1100, // Ensure menu is above overlay
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 1050, // Ensure overlay is between menu and rest of the content
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6E276C',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Menu;
