import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    ScrollView,
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

const TextFields = (props) => {
    return(
        <View>
            <View>
                <Text>Name:</Text>
                <TextInput value={props.name}
                    style={styles.inputStyle}
                    onChangeText={(text) => props.handleText(text, 'name')}/>
            </View>
            <View>
                <Text>Certificate:</Text>
                <TextInput value={props.certificate}
                    style={styles.inputStyle}
                    onChangeText={(text) => props.handleText(text, 'certificate')}/>
            </View>
            <View>
                <Text>Serial Number:</Text>
                <TextInput value={props.serial}
                    style={styles.inputStyle}
                    onChangeText={(text) => props.handleText(text, 'serial')}/>
            </View>
            <View>
                <Text>Traceability:</Text>
                <TextInput value={props.traceability}
                    style={styles.inputStyle}
                    multiline
                    numberOfLines={3}
                    onChangeText={(text) => props.handleText(text, 
                        'traceability')}/>
            </View>
            
            
            <Button title='Next' 
                onPress={props.nextHandler} />
        </View>
    )
}

const tableStyles =StyleSheet.create({
    headingText: {
        fontWeight: "bold",
        fontSize: 20,
        flex: 1
    },
    bodyText: {
        fontWeight: "200",
        fontSize: 16,
        flex: 1
    },
    heading: {
        flexDirection: "row",
        borderColor: "black",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        justifyContent: "space-between",
        padding: 5
    },
    body: {
        flexDirection: "column"
    },
    row: {
        flexDirection: 'row',
        borderBottomColor: "black",
        borderBottomWidth: 2,
        justifyContent: "space-between",
        fontSize:18,
        marginBottom: 5,
        padding: 5
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 5,
        borderBottomColor: "black",
        borderBottomWidth: 2
    },
    input: {
        padding: 5,
        margin: 0,
        borderColor: "black",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        flex: 1
        
    },
    view: {
        marginBottom: 25
    }
})


const InputTable = (props) =>{
    const [nominal, setNominal] = useState('');
    const [actual, setActual] = useState('');
    const [uncertainty, setUncertainty] = useState('');

    return(
        <View style={tableStyles.view}>
            <View style={tableStyles.heading} >
                <Text style={tableStyles.headingText}>Nominal</Text>
                <Text style={tableStyles.headingText}>Actual</Text>
                <Text style={tableStyles.headingText}>Uncertainty</Text>
            </View>
            <View style={tableStyles.body}>
                {props.rows.map((row) =>(
                    <View style={tableStyles.row}>
                        <Text style={tableStyles.bodyText}>{row.nominal}</Text>
                        <Text style={tableStyles.bodyText}>{row.actual}</Text>
                        <Text style={tableStyles.bodyText}>{row.uncertainty}
                            </Text>
                    </View>
                ))}
            </View>
            <View style={tableStyles.inputRow}>
                <TextInput 
                    placeholder='...'
                    keyboardType='numeric'
                    style={tableStyles.input}
                    value={nominal}
                    onChangeText={setNominal}/>
                <TextInput 
                    placeholder='...'
                    keyboardType='numeric'
                    style={tableStyles.input}
                    value={actual}
                    onChangeText={setActual}/>
                <TextInput 
                    placeholder='...'
                    keyboardType='numeric'
                    style={tableStyles.input}
                    value={uncertainty}
                    onChangeText={setUncertainty}/>
            </View>
            <Button  title='Insert'
                onPress={()=> {
                    props.rowInputHandler({
                        nominal: nominal,
                        actual: actual,
                        uncertainty: uncertainty
                    });
                    setNominal('');
                    setActual('');
                    setUncertainty('');
                }
                }/>
        </View>
    )
}




class CreateStandardScreen extends React.Component{
    static navigationOptions = {
        title: 'Create Standard'
    }

    state = {
        currentView: 'textFields',
        name: '',
        certificate: '',
        serial: '',
        traceability: '',
        data: []
    }

    nextHandler = () =>{
        const {navigate} = this.props.navigation;
        navigate('') 
    }

    handleInput = (value, field) =>{
        let newState = {...this.state}
        newState[field] = value;
        this.setState(newState);
    }

    insertRow = (row) =>{
        let newData = [...this.state.data];
        newData.push(row);
        this.setState({data: newData});
    }

   render(){
       return(
        <ScrollView style={styles.paddedStyle}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 20
            }}>
                <Button 
                    title='Text Fields'
                    onPress={() => this.setState({currentView: 'textFields'})}/>
                <Button 
                    title='Input Table'
                    onPress={() => this.setState({currentView: 'inputTable'})}/>
            </View>

            {this.state.currentView == 'textFields' 
            ?
                <TextFields 
                    {...this.state}
                    handleText={this.handleInput}
                    nextHandler={() =>this.setState({currentView: 'inputTable'})}/>
            :
                <InputTable 
                    rowInputHandler={this.insertRow}
                    rows={this.state.data}/>
        }
            <Button title='Submit'/>
        </ScrollView>)
   }
}

export default CreateStandardScreen;