import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated, ScrollView
} from 'react-native';



class Gemini extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
          <Text style={styles.buttonText}>
                          The most hated? Not anymore. Geminis are one of the best signs yet people can not seem to handle them and I will go into that later. Geminis are well communicated, if you want a real conversation about life, family, love, goals, literally anything, it is best that you hit up a gemini. They are very intelligent and intellectual. They often have a great fashion sense and are very social. Geminis are really charismatic and are able to draw people in just based off their energy. Geminis know how to balance their heart and their mind until you get on the wrong side and they are fully in with their hearts. You can never try to play a Gemini. Remember when I said that people can not handle Geminis, this is why. Geminis are often very blunt, when they talk to you it often hits where it hurts. Geminis are also talkatives, some signs love that others do not. They are also very moody, too moody. This can turn anyone off immediately because you can not easily read a Gemini. You may think you know them one second and the next, you are at a total loss. Now, a Gemini is a relationship is indeed something. Gemini people as they get bored very easily. They need a lot of activity and intellectual stimulation to stay interested in a relationship. However, they are charming and flirt well, and they tend to be loving and open people.They will also push their partners to be the best that they can be, encouraging them to think outside the box and inspiring them to be more creative with their lives. We love Geminis in this house.
 
                        </Text>
        
            </View>
  </ScrollView>

 


 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

   
    buttonText: {
      color:'#FE8809',
 backgroundColor: '#F8DC32',
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Gemini;
