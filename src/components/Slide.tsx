import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import rhandzug from '../assets/rhandzugirl.png'; 
import rhandzub from '../assets/rhandzuboy.png'; 

const SlideWithAutoPlay = () => {
  const scrollViewRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'rhandzug',
      content: 'A magical app designed for children with impaired hearing.',
    },
    {
      id: 2,
      image: 'rhandzub',
      content: 'Educational tool to explore and understand sound.',
    },
  ];

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    let currentPage = 0;

    const scrollInterval = setInterval(() => {
      if (scrollViewRef.current) {
        const nextPage = (currentPage + 1) % slides.length;
        const nextOffset = nextPage * screenWidth;

        scrollViewRef.current.scrollTo({
          x: nextOffset,
          animated: true,
        });

        currentPage = nextPage;
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleLoginPress = () => {
    console.log('Login button pressed');
    // Implement your login functionality here
  };

  const handleSignUpPress = () => {
    console.log('Sign Up button pressed');
    // Implement your sign up functionality here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Text style={styles.slideText}>{slide.content}</Text>
            <Image source={slide.id === 1 ? rhandzug : rhandzub} />
            </View>
        ))}
      </ScrollView>

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8F4F9F', // Purple background color
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  scrollView: {
    flexDirection: 'row',
  },
  slide: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SlideWithAutoPlay;
