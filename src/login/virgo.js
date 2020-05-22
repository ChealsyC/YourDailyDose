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
  ImageBackground,Platform,Animated
} from 'react-native';



class Virgo extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
          <Text style={styles.buttonText}>
                         Virgos? Let's get into them! The most humble sign goes to the Virgo. They are very sweet and nurturing. They often try their best to put everyone in a good mood and it is infectious. Virgos never have a bad day, if you have seen an angry Virgo, please let me know. They are also very honest, not blunt but honest. they will tell you the truth and let you know what is up. They are very organized and motivated, they know what they want in life and know the path to get there. They are super intelligent but will never brag about it. They are always on a quest of self-improvement extending to their bodies, their clothing, and their appearance. Although they are great,they are very critical of things in life. They always give constructive criticism, sometimes at times you really do not need it. They can become hyper critical, and their perfectionistic nature can make them excessively negative towards everything, including themselves.If directed outwards, they can be rather hurtful. Other times, they can be shortsighted of their own faults, and unable to take the same kind of criticism that they dish out. Their sincere desire to help people with their criticisms can sometimes be unwanted; making others annoyed and frustrated. Furthermore they can be rather aloof when giving these criticisms, making it seem as though they give them without empathy and a sincere desire to help. Yet Virgos are beautiful people, their energy does not lie.
 
                        </Text>
          

            </View>


 


 

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
          color:'#fffdd0',
 backgroundColor: 'brown',
        
        fontSize: 11,
        fontWeight:'bold',
    }
});


export default Virgo;
