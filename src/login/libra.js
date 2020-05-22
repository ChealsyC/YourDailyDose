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



class Libra extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
 <Text style={styles.buttonText}>
A Libra. They are one of the strongest signs. They attract all signs which I think are pretty powerful. They just have a charming way to them, they make you feel understood or heard. You could say they are the therapist of the sign. They are very easy going, they never care too much or too little. Libras are deeply concerned about what is fair in the world. They do not like to see anyone treated brashly or unfairly. Libras are overall good people, it is hard to find something bad against them. However, Libras are also very indecisive. They often can not decide on what they want quickly, do not get me wrong, some of them do. Yet the majority can not decide fast enough. Libras hate confrontation, they would just rather avoid it overall. They don’t always share or reveal their feelings, especially when it is bound to create arguments. They are also gullible, it is easy to sweep a Libra off their feet with the right words. In relationships, Libras are just hopeless romantics. They love the idea of perfect love and they do their best to achieve that. Sometimes that means, in order to not hurt feelings, a Libra can seemingly lead someone on, even if they feel zero attraction for them and don’t see the relationship going anywhere. This can be destructive and harmful to relationships, but their avoidance of conflict means that being direct with their feelings is extremely hard for them to do. Libras are great, gotta love em.   

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
      color:'purple',
 backgroundColor: 'pink',
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Libra;
