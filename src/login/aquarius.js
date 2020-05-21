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



class Aquarius extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
                  <Text style={styles.buttonText}>
Hey Aquarius! Whether its you sun, moon or rising, you can sure find an Aquarian to be very friendly to strangers all the time.They are great listeners and are always willing to lend a helping hand to their loved ones.. Not only do Aquarians love to have fun, but they also know how to get ish done because they are very independent. This independence often leads them to be creative and progessive. YES! I have covered the good side, now let's get into their negative traits. When you find an Aquarian who is not rebellious LET ME KNOW! They often like to fight back,even when they are wrong because they are strong headed, too strong headed if you ask me. They are also emotionally detached, Icn help you break into the emotions of an Aquarian. You just have to wait for them to feel like opening up. Now here is the juicy part, let's talk about them in relationships. Honey, its going to be hard because of the absence of their emotions. BUT Aquarians can be great partners - as long as they feel they are not trapped. Because of how independent they are they LOVE privacy and freedom. So you better get your lurking game on if you want to know anything. However, they tend to be very loyal, the more empathetic and vulnerable side of their characters being open to you. SO with every Aqurian, it's a 50/50, just hope you found the right one doll.                       </Text>
          
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
     color:'lightgrey',
 backgroundColor: 'purple',
        
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Aquarius;
