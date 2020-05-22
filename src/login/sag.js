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



class Sag extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 250, width: 250, justifyContent: 'center', }}
/>
          <Text style={styles.buttonText}>
          Sagittarius are some of the most optimistic people in the world. They are lovers of humanity and of the human experience, making them friendly people filled with warmth. There is a childlike innocence to these people; they say what they mean, are straightforward and honest, and you never have to guess about what they’re really thinking.That innocence seems to bring them quite a bit of luck - their openness to new experiences means that even though they may just float through life with not a care in the world, they are always at the right place in the right time. Sagittarius zodiac signs are very open and accepting, one thing that they can’t seem to tolerate is close mindedness. Additionally, it can be difficult to keep a Sagittarian in one place for a long time, as they get bored rather easily. Sometimes that means that they can change their minds very quickly, meaning that they come off as rather fickle. It’s not so much that you’ll catch a Sagittarian in a lie when they say one thing one day and another the next - it’s usually that they meant what they said both times, but…simply changed their mind about it.Practically, this translates to becoming bored with small details. They often come up with ambitious ideas that they don't follow through with. They can get distracted by other projects and desires, and not because they aren't capable of getting things done. They are quite capable, only that they just find it difficult to fully apply themselves, especially if the projects are long term. They are alright in my book.



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
          color:'#2a1749',
 backgroundColor: '#9788ba',
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Sag;
