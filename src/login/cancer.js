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



class Cancer extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
 <Text style={styles.buttonText}>
Let us dive into the, might I say, the most emotional signs. Maybe, the pure hearts of the signs, Cancers. Cancers are one of the most pure signs who always have the best intentions at heart. They are really in touch with their emotions so if you want to deal with cancer, get ready to talk about your feelings a lot because you will. Cancers are supportive and loving. They love to have a good time with friends and especially family. Cancers are very family oriented and will spend a day with family before they do with friends. Cancers  tend to have an odd sense of humor, and can sometimes find humor in situations where others do not see it. All this to say, Cancers still have some negative traits. Due to their abundance of emotions, they are often moody. You do one thing and they are automatically turned off. Cancers tend to be needy, affection wise. This causes them to be dependent on those who are ready to give them that need. Yet, they do not want to let go, some may say "toxic'' If you do not satisfy this need, they become quite passive aggressive. Cancers are however one of the best signs because they are very pure at heart. Get you a Cancer friend and you will not regret it.                      </Text>
          
          
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
     color:'pink',
 backgroundColor: '#e75480',
        
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Cancer;
