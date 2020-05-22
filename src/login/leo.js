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



class Leo extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
<Text style={styles.buttonText}>
                          Talking about THE LEO, the new Gemini because they are the most hated now. It is so easy to like or love a leo. The leo always has a burst of energy that brings a smile to everyone in the room. A leo knows how to command the attention of the room by just walking into a room. Talk about a lion. Leos are very brave, they face everything head on, they might be afraid but you will never see the fear or even smell fear when you are around a leo. They are playful, this playful nature comes from leos trying to make everyone around them feel loved and safe, they want people to feel protected. Leos are natural leaders, when no one steps up, trust and believe that leos are most certainly going to lead. Leos are really generous, they are willing to give and give and give, they expect nothing back because if they love you, they are willing to do anything to make sure you feel loved. Just like every good, there is a bad. Leos are considered very egotistical, that is because they have a lot of pride in who they are and are not afraid to show that. They can also be prideful, their pride stops them from doing a lot of things that they feel are going to portray the slightest bit of weakness. They can also  be controlling, this is because of their natural leader sense. Leos in a relationship are easy, just love and appreciate them and they will do the same back. It is all about reciprocating energy to them. Find a leo and you are set for life.
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
     color:'gold',
 backgroundColor: '#ff8c00',
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Leo;
