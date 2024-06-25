import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import {WordSoundProps} from '../types/navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Tts from 'react-native-tts';
import Header from './Header';
import Menu from './Menu';

const WordSound: React.FC<WordSoundProps> = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [textToSpeak, setTextToSpeak] = useState('Enter text to speak');
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#8F4F9F',
  };

  useEffect(() => {
    // Initialize TTS engine and add event listeners
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.5);
    Tts.setDefaultPitch(1.0);
    Tts.addEventListener('tts-start', onTtsStart);
    Tts.addEventListener('tts-finish', onTtsFinish);
    Tts.addEventListener('tts-cancel', onTtsCancel);

    return () => {
      // Clean up event listeners
      Tts.removeEventListener('tts-start', onTtsStart);
      Tts.removeEventListener('tts-finish', onTtsFinish);
      Tts.removeEventListener('tts-cancel', onTtsCancel);
    };
  }, []);

  const onTtsStart = () => {
    console.log('TTS started');
  };

  const onTtsFinish = () => {
    console.log('TTS finished');
  };

  const onTtsCancel = () => {
    console.log('TTS cancelled');
  };

  const speakText = (text: string) => {
    Tts.stop();
    Tts.speak(text);
  };

  const wordsToSound = [
    {text: 'My name is Rhandzu'},
    {text: 'I am good, How are you?'},
    {text: 'Thank you'},
    {text: 'I love you'},
    {text: "I can't hear you"},
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    {text: 'Option 1', action: () => console.log('Option 1 selected')},
    {text: 'Option 2', action: () => console.log('Option 2 selected')},
    {text: 'Option 3', action: () => console.log('Option 3 selected')},
  ];

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.container, backgroundStyle]}>
        <Header />
        <View style={styles.formContainer}>
          <Text style={styles.h1}>Play a sound</Text>
          <FlatList
            data={wordsToSound}
            renderItem={({item, index}) => (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => speakText(item.text)}>
                  <Text style={styles.buttonText}>{item.text}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type here..."
              onChangeText={setTextToSpeak}
              value={textToSpeak}
            />
            <TouchableOpacity
              style={[styles.button, styles.speakButton]}
              onPress={() => speakText(textToSpeak)}>
              <Text style={styles.buttonText}>Speak</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 5,
    width: '100%',
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'tomato',
    borderRadius: 5,
    color: 'white',
    borderWidth: 2,
    borderColor: 'orange',
  },
  speakButton: {
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#8F4F9F',
    padding: 20,
    alignItems: 'center',
  },
  spacing: {
    marginBottom: 20,
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
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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

export default WordSound;
