import React from 'react';
import {Text, TextInput, Button, View, StyleSheet, Alert} from 'react-native';

class InputTable extends React.Component {
    state= {
        data: [],
        fields: {}
    }

    insertFields = () =>{
        let dataArray = []
        this.props.fields.forEach(field =>{
            dataArray.push(this.state.fields[field.name])
        });
        let newData = [...this.state.data];
        newData.push(dataArray);
        this.setState({data: newData}, () =>{
            let newFields = {...this.state.fields};
            this.props.fields.forEach(field=> { newFields[field.name] = ''})
            this.setState({fields: newFields})
        });
         
    }

    render(){
        return(
            <View style={styles.col}>
                <View style={styles.row}>
                    {this.props.numbered 
                        ? <View style={styles.cell}><Text>No.</Text></View>
                        :null}
                    {this.props.fields.map((field) =><View style={styles.cell}>
                            <Text>{field.name}</Text>
                        </View>)}
                </View>
                <View style={styles.col}>
                        {this.state.data.map((row, i) =>{
                            return(
                                
                                <View style={styles.row}>
                                    {this.props.numbered ? <View style={styles.cell}><Text>{i + 1}</Text></View>: null}
                                    {row.map(
                                        cell=><View style={styles.cell}><Text>{cell}</Text></View>)}
                                </View>)
                        })
                    }
                </View>
                <View style={styles.row}>
                    {this.props.numbered ? <View style={styles.cell}></View> : null}
                    {this.props.fields.map(field =><TextInput
                        style={styles.input}
                        keyboardType='numeric' 
                        value={this.state.fields[field.name]}
                        onChangeText={(text) => {
                            let newFields = {...this.state.fields}
                            newFields[field.name] = text
                            
                            this.setState({fields: newFields})
                        }}/>)}
                </View>
                <Button title='Insert'
                    onPress={this.insertFields}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    col: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    cell: {
        flex: 1
    },
    input: {
        borderWidth: 2,
        borderColor: 'steelblue',
        flex: 1,
        padding:2
    }
})

export default InputTable;