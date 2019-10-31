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


import TextField from '../../components/text_field';


class CalibrationSpecsScreen extends React.Component{
    static navigationOptions = {
        title: 'New Calibration: Specs'
    }

    state = {
        rangeLower: 0,
        rangeUpper: 0,
        type: 'balance',
        resolution: 0,
        unit: 'grams',
        unitChoices: [],
        location: '',
        immersion: '',
        nextPage: 'genericCalibration'
    }

    setNextPage = () =>{
        switch(this.state.type){
            case 'balance':
                this.setState({nextPage: 'balanceColdStart'});
                break;
            case 'autoclave':
                this.setState({nextPage: 'autoclaveSpecs'});
                break;
            case 'pressure':
                this.setState({nextPage: 'pressureCalibration'});
                break;
            default:
                this.setState({nextPage: 'genericCalibration'});
                break;
        }
    }
    setUnitChoices = () =>{
        switch(this.state.type){
            case 'balance':
            case 'mass-pieces':
                this.setState({unitChoices: [
                    ['grams','Grams'],
                    ['kgs', 'Kgs'],
                ]})
                break;
            case 'current':
                this.setState({unitChoices: [
                    ['amps','Amps'],
                    ['milliamps', 'milli-Amps'],
                ]})
                break;
            case 'voltage':
                this.setState({unitChoices: [
                    ['millivolts','milli-Volts'],
                    ['volts', 'Volts'],
                ]})
                break;
            case 'ph':
                this.setState({unitChoices: [
                    ['ph','pH'],
                ]})
                break;
            case 'volume':
                this.setState({unitChoices: [
                    ['litre','Litre'],
                    ['millilitre','milli-litre'],
                    ['microlitre','micro-litre'],
                    ['cubic-foot','cubic Foot'],
                    ['cubic meter','Cubic Meter'],
                ]})
                break;
            case 'conductivity':
                this.setState({unitChoices: [
                    ['siemens','Siemens'],
                ]})
                break;
            case 'tds':
                this.setState({unitChoices: [
                    ['ppt','ppT'],
                    ['ppm','ppM'],
                    ['ppb','ppB'],
                ]})
                break;
            case 'flow':
                    this.setState({unitChoices: [
                        ['l-min','Litre/min'],
                        ['cf-min', 'Cubic ft/hr'],
                        ['l-hr', 'Litre/hr'],
                        ['m3-hr', 'Cubic mtr/hr'],
                        ['cf-hr', 'Cubic ft/hr'],
                    ]})
                    break;
            case 'autoclave':
            case 'temperature':
                this.setState({unitChoices: [
                    ['celsius','Celsius'],
                    ['fahrenheit', 'Fahrenheit'],
                ]})
                break;
            case 'pressure':
                    this.setState({unitChoices: [
                        ['bar','Bar'],
                        ['kPa', 'kPa'],
                    ]})
                    break;
            default:
                break;
        }
    }
    
    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView>
                <View style={styles.textView}>
                    <Text>Instrument Type</Text>
                    <View style={styles.pickerView}>
                        <Picker selectedValue={this.state.type}
                            onValueChange={(value)=>{
                                this.setState({type:value}, () =>{
                                    this.setUnitChoices();
                                    this.setNextPage();
                                });
                            }}>
                            <Picker.Item label='Select Type...' value=''/>

                            <Picker.Item label='Balance' value='balance'/>
                            <Picker.Item label='Autoclave' value='autoclave'/>
                            <Picker.Item label='Pressure' value='pressure'/>
                            <Picker.Item label='Temperature' 
                                value='temperature'/>
                            <Picker.Item label='Flow' value='flow'/>
                            <Picker.Item label='Volume' value='volume'/>
                            <Picker.Item label='Current' value='current'/>
                            <Picker.Item label='Voltage' value='voltage'/>
                            <Picker.Item label='Mass Pieces' 
                                value='mass-pieces'/>
                            <Picker.Item label='pH' value='ph'/>
                            <Picker.Item label='TDS' value='tds'/>
                            <Picker.Item label='Conductivity' 
                                value='conductivity'/>
                        </Picker>
                    </View>
                </View>
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
                            {this.state.unitChoices.map((choice) =><Picker.Item label={choice[1]} value={choice[0]} />)}
                        </Picker>
                    </View>
                </View>
                <TextField 
                    label='Location'
                    value={this.state.location}
                    handler={(val)=>this.setState({location:val})} />
                <TextField 
                    label='Immersion Depth'
                    value={this.state.immersion}
                    handler={(val)=>this.setState({immersion:val})} />

                <Button title='Next' 
                    onPress={() =>navigate(this.state.nextPage)}/>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    rangeInline: {
        flexDirection: 'row'
    },
    rangeInput: {
        flex: 2,
        borderWidth: 2,
        padding: 3
    },
    rangeText: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textView: {
        padding: 5,
        marginBottom: 10
    },
    pickerView: {
        borderColor: 'steelblue',
        borderWidth: 2,
        padding: 3
    }
})


export default CalibrationSpecsScreen;
export {styles}