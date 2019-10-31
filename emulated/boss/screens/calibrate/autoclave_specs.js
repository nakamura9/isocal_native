/* pressure */
import React from 'react';
import {Text, View, Button, ScrollView, TextInput, Picker} from 'react-native'
import {styles} from './specs';

class AutoclaveSpecsScreen extends React.Component{
    static navigationOptions = {
        title: 'Autoclave Specs: Pressure'
    }

    state = {
        rangeLower: 0,
        rangeUpper: 0,
        resolution: 0.0,
        unit: ''
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView>
                <View style={styles.textView}>
                    <Text>Range</Text>
                    <View style={styles.rangeInline}>
                        <TextInput 
                            style={styles.rangeInput}
                            keyboardType='numeric'
                            onChangeText={(text) =>this.setState({
                                rangeLower: text
                            })}/>
                        <Text style={styles.rangeText}>-</Text>
                        <TextInput 
                            keyboardType='numeric'
                            style={styles.rangeInput}
                            onChangeText={(text) =>this.setState({
                                rangeUpper: text
                            })}/>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text>Resolution</Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.pickerView}
                        onChangeText={(text) =>this.setState({
                            resolution: text
                        })} />
                </View>
                <View style={styles.textView}>
                    <Text>Unit</Text>
                    <View style={styles.pickerView}>
                        <Picker 
                            selectedValue={this.state.unit}
                            onValueChange={(value) => this.setState({unit: value})}>
                            <Picker.Item label='bar' value='Bar' />
                            <Picker.Item label='kpa' value='kPa' />
                        </Picker>
                    </View>
                </View>
                <Button title='Next' 
                    onPress={() =>navigate('autoclaveTemperatureScreen')}/>
            </ScrollView>
        )
    }
}

export default AutoclaveSpecsScreen;