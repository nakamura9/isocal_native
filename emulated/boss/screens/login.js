import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Image,
    Alert
} from 'react-native';
import {useState} from 'react';

const Login = (props) => {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    
    return (
    <View>
        <Image
            style={styles.image}
            source={require('../iso.png')}/>
        <View style={styles.paddedStyle}>
            <TextInput 
                style={styles.inputStyle}
                onChangeText={(text) =>{setName(text)}}
                placeholder='Username'/>
            <TextInput 
                secureTextEntry
                style={styles.inputStyle}
                onChangeText={(text) =>{setPwd(text)}}
                placeholder='Password'/>
            <Button 
                title='Login'
                style={styles.buttonStyle}
                onPress={() =>{
                    props.handler(name, pwd)
                }}/>
                </View>
   </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 5,
    fontSize: 24
  },
  inputStyle: {
    borderBottomColor: 'steelblue',
    borderBottomWidth: 2,
    paddingBottom: 25
  },
  paddedStyle: {
      margin: 20
  },
  image: {
      width: 400,
      height: 200
  }
});


class LoginScreen extends React.Component{
    static navigationOptions = {
        title: 'Welcome'
    }

    navigationHandler = (name, pwd) =>{
        const {navigate} = this.props.navigation;
        if(pwd === '123'){
            navigate('Home')
        }else{
            Alert.alert('Incorrect Credentials provided');
        }
    }
    render(){
        return(
            <Login handler={this.navigationHandler} />
        )
    }
}

export default LoginScreen;