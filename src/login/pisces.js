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



class Pisces extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
          <Text style={styles.buttonText}>
Pisces are really an interesting sign. A lowkey sign, a lot of signs do not encounter a lot of Pisces, they always just have that one person who is a Pisces. Pisces are very compassionate, they put their all in everything they do. And when they are talking about what they love, you can hear the love in their voice. They tend to be very sensitive as well, do not hurt a Pisces' feelings because they will remember it and they will feel it for a long time. They are sweet and charming. They often love to bring a smile on peoples faces when they are feeling down or not in the mood. They know how to properly comfort all people. Pisces are often quite submissive, if they want you in their life they will do whatever to keep you there. They are very dependent on other people to uplift their mood or even make them feel better. Pisces can not stand the idea of being alone. In relationships, Pisces are actually the best bet. They are truly romantic and very affectionate. They may not be as straightforward word wise, but you will definitely feel loved. Actions speak better than words right?          
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
     color:'green',
 backgroundColor: '#00FF7F',
        
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Pisces;
