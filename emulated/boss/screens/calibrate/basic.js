import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Picker,
    Image,
    Alert,
    Text,
    ScrollView
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationEvents } from 'react-navigation';


const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 5,
    fontSize: 24
  },
  inputStyle: {
    borderColor: 'steelblue',
    borderWidth: 2,
    padding: 5
  },
  paddedStyle: {
      margin: 20
  },
  image: {
      width: 400,
      height: 200
  },
  inputView: {
      padding: 5,
      marginBottom: 10
  },
  inputText: {
    fontWeight: "200",
    fontSize: 16,
    padding: 5
}
});


class CalibrationBasicScreen extends React.Component{
    static navigationOptions = {
        title: 'New Calibration: Basic'
    }

    state = {
        date: new Date(),
        showDate: false,
        customer: '',
        instrument: '',
        serial: '',
        manufacturer: '',
        model: '',
        standard: ''
    }

    textHandler = (value, field) =>{
        let newState  = {...this.state};
        newState[field] = value;
        this.setState(newState);
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView>
                <View style={styles.paddedStyle}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Date: {this.state.date.toDateString()}</Text>
                        <Button title='Select Date'
                            onPress={() =>this.setState({showDate: true})} />
                        {this.state.showDate 
                            ?
                            <DateTimePicker value={this.state.date}
                            onChange={(evt, date) => this.setState({
                                date: date, 
                                showDate: false
                            })}/>
                            :
                                null}
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Customer:</Text>
                        <TextInput 
                            style={styles.inputStyle}
                            onChangeText={(text) => this.textHandler(text, 
                                'customer')}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Name of Instrument:</Text>
                        <TextInput 
                            style={styles.inputStyle}
                            onChangeText={(text) => this.textHandler(text, 
                                'instrument')}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Serial No.:</Text>
                        <TextInput 
                            style={styles.inputStyle}
                            onChangeText={(text) => this.textHandler(text, 
                                'serial')}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Manufacturer:</Text>
                        <TextInput 
                            style={styles.inputStyle}
                            onChangeText={(text) => this.textHandler(text, 
                                'manufacturer')}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Model:</Text>
                        <TextInput 
                            style={styles.inputStyle}
                            onChangeText={(text) => this.textHandler(text, 
                                'model')}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Standard Used:</Text>
                        <View style={{
                            borderColor: 'steelblue', 
                            borderWidth: 2}}>
                            <Picker selectedValue={this.state.standard}
                                onValueChange={(value) => {this.setState({
                                    standard: value
                                })}}>
                                <Picker.Item value='' label='None'/>
                                <Picker.Item value='dead-weight' 
                                label='Dead weight Tester'/>
                        </Picker>
                        </View>
                    </View>
                    
                    <Button 
                        title='Next'
                        onPress={() =>navigate("Specs")}/>
                        </View>
        </ScrollView>
        )
    }
}

export default CalibrationBasicScreen;