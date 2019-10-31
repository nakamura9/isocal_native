import React from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';



const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 25
  },
  paddedStyle: {
      padding: 20
  },
  image: {
      width: 400,
      height: 200
  }
  
});


class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Navigation'
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.paddedStyle}>
                <View style={styles.buttonStyle}>
                    <Button
                        title="Calibration Summary"
                        onPress={() =>navigate('Summary')}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button
                        title="Upload to server"
                        onPress={() =>navigate('Upload')}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button
                        title="Standards"
                        onPress={() =>navigate('Standards')}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button
                        title="New Calibration"
                        onPress={() =>navigate('NewCalibration')}/>
                </View>
               
            </View>
        )
    }
}

export default HomeScreen;