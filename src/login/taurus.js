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



class Taurus extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
          <Text style={styles.buttonText}>
The Taurus. Let us dive in. Taurus people are very reliable and dependent. Like Bruno Mars said "you can count on me like 123 and I will be there."  That is a very taurus thing. They are also hard workers, if they know what they want they will stop at nothing to get it. They are very driven and determined at life. They also tend to push themselves rather hard, meaning that when they complete something that doesn’t quite live up to their own expectations, they can be rather hard on themselves. They are persistent, they will stay and love to stay, even if you do not want them there if they want to stay they will. You can always trust a Taurus until they give you a reason not to trust them. Although great, they can also be very stubborn. The most stubborn sign of all. It is actually kind of crazy. They hate change, something about the fear of change does not sit well with them. A Taurus in a relationship likes it fast, if they fall for you today, they want to be married tomorrow. but they love hard, which is both good and bad. A Taurus is alright in my book. 
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
      color:'#ffeeb9',
 backgroundColor: '#b2c181',
        
        fontSize: 13,
        fontWeight:'bold',
    }
});


export default Taurus;
