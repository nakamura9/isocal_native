import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Alert,
    Text
} from 'react-native';


const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 5,
    fontSize: 24
  },
  inputStyle: {
    borderColor: 'steelblue',
    borderWidth: 2,
    margin: 10,
    padding: 5
  },
  paddedStyle: {
      margin: 20
  },
  image: {
      width: 400,
      height: 200
  },
  paragraph: {
      padding: 5,
      fontSize: 18,
      fontWeight: "200"
  }

});


class UploadScreen extends React.Component{
    static navigationOptions = {
        title: 'Upload'
    }

    state = {
        address: ''
    }

    textHandler =(text) =>{
        this.setState({address: text})
    }

    uploadHandler = () =>{
        Alert.alert('Uploading Calibrations')
    }

   render(){
       return(<View style={styles.paddedStyle}>
            <Text style={styles.paragraph}>Enter the server address below and click 'upload' to send your calibrations to the desktop server.</Text>
            <TextInput 
                style={styles.inputStyle}
                placeholder='address...'
                onChangeText={this.textHandler}
                value={this.state.address} />
            <Button title='Upload' 
                onPress={this.uploadHandler} />
        </View>)
   }
}

export default UploadScreen;