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



class Scorpio extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 250, width: 250, justifyContent: 'center', }}
/>
          <Text style={styles.buttonText}>
                      A Scorpio is one of the funniest signs you will ever meet. They know how to get the room laughing and joyous. They know how to turn that frown upside down. Scorpios are very supportive, even when they do not feel like it, they will make you feel happy. Although they can help close friends in their times of need, scorpios love to enjoy their own company, so much so that they can become irritated if they are not given their personal alone time. They love trying new things and going different places. They have no fear of life but they want to live life to the fullest. They have a strong reputation of being bold,  and because of this, other signs admire and look up to them for inspiration. Their bravery and courage, alongside their protectiveness towards others who cannot stand for themselves, often means that they are placed in leadership positions. Now bad, Scorpios are often very clingy. Once they have found people who bring them joy and peace of mind, they are not letting go. Because of this, it often leads to self destructive nature because they get so into their heads that they neglect the apparent reality right in front of them. Also do not try to make a Scorpio jealous because you will end up hurting yourself, they play the game right. They deeply enjoy the pleasures of intimacy - both physical and emotional. To a Scorpio, seekers of hidden truths, relationships are about revealing your inner self - revealing the reality under the surface. We must remember that Scorpios hide their intense feelings - and that they sometimes assume that this must be the case for others. In love, Scorpios expect and crave this kind of spiritual element - the joining together of two souls. Scorpios are cool, I like them.

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
       color:'white',
 backgroundColor: 'black',
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Scorpio;
