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
  ImageBackground,Platform,Animated,ScrollView
} from 'react-native';



class Capricorn extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <ScrollView>
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://codehs.com/uploads/5efb63fa7376ffd24cc128f3650617c9'}}
 style={{ height: 100, width: 100, justifyContent: 'center', }}
/>
           <Text style={styles.buttonText}>
Capricorns. Now, Capricorns are very driven. Capricorns know how to get their work done when they are moved. When determined, you can not get a Capricorn out of their zone because they will remove you from their space, or remove themselves out of your space. Capricorns are often very reliable, some are not but most of them are. In times of need, they are sure to be there when you need them. You are sure to get a good laugh when you are around them because they love to crack jokes to uplift people in spirits but also they know when to get serious. Now, let us get into the not so good side of things. Capricorns often are greedy, due to them being so involved with themselves, when it comes to material things, they want it all for themselves. Furthermore, they tend to be hypocritical, especially when it comes to friendships and family. They would not do something that someone does for them. They often have underlying intentions of their own and make it seem like you are the bad guy. But there are moments of reflection, they are never consistent, count on that reflection to occur every 2 months. Love wise, Capricorns are quite cautious about their love lives. They tend to guard their heart quite strongly and take a while to get close to. Many will even attempt to mask their feelings as aloofness as they attempt to calculate and analyze the emotional risks of getting into a relationship. Same with friendships, they often have 2-3 close friendships they heavily rely on. Capricorns are a bet here, find the right one and you are set.
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
      color:'#dbf2f2',
 backgroundColor: '#00c5ff',
        
        
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Capricorn;
