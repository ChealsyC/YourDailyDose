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



class Sign extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>
      What is your sign?
      </Text>
      <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Capricorn')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Capricorn + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Aquarius')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Aquarius + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Pisces')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
Pisces + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Aries')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Aries + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Taurus')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Taurus + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
          <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Gemini')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Gemini + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Cancer')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Cancer + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Leo')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
Leo + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Virgo')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Virgo + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Libra')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Libra + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Scorpio')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Scorpio + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Sag')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Sagittarius + Colors
                        </Text>
                    </View>
                </TouchableHighlight>
                </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
  },
  touchableButton1: {
        backgroundColor: 'gold',
        height: 50,
        width: 420,
        alignItems: 'center',
        justifyContent: 'center',
         borderRadius: 10,
         marginTop: 15,
          fontSize: 25,
  },
text:{
  color: 'gold',
   fontSize: 37,
        fontWeight:'bold',
         justifyContent: 'center',
         alignItems: 'center',

    },
  buttonText:{
  color: 'red',
   fontSize: 30,
        fontWeight:'bold',
         justifyContent: 'center',
         alignItems: 'center',
    },

});


export default Sign;
