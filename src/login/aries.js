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



class Aries extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
          
          
            </View>

 <Text style={styles.buttonText}>
                           Let us get into these Aries chile. They are really something. Let us begin with the good obvious, okay! Aries have  high energy, they love a good thrill in life. They have a strong sense of judgement and are very charismatic. All the projects I have seen an Aries engage in is full of PASSION. But if I think I know Aries like I do, I know they are hot headed. They think they know it all but they do not. They are quick to tell you what you did wrong but are never ready to admit what their flaws are. Typical Aries, I mean what do you expect from a fire sign. All though an Aries can seem innocent, do not try to get into a simple discussion with them because their short temper will have you heated. They get aggressive for no reason and are just rude and pushy. Yikes! Now an Aries in a relationship is no different. They fall in love quickly, just as short as their temper is. Yet they are straightforward, you will know exactly where you stand in an Aries life, they do not play like that.  They can be very loving and intense partners, and definitely need others who share their passion for life. Yet the jealousy is quick to jump out, which makes them hypocritical is you ask me. And if you guys break up, expect all hell. They will paint you to be the bad guy and try to ruin your life.Honestly, I do not like Aries in a relationship, you are fine friends.
 

                        </Text>
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
     color:'#DCBD90',
 backgroundColor: '#B6047F',
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Aries;
