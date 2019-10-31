import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const Table = (props) => {
    // takes two props, fields an array of strings
    // and data a two dimensional array of strings 
    return(
    <View style={styles.table}>
        <Heading 
            fieldNames={props.fields}/>
        <Body 
            content={props.data}/>
    </View>)
}

const Heading = (props) =>{
    return (<View style={styles.heading}>
            {props.fieldNames.map((value) => <HeadCell value={value}/>)}
        </View>)
}

const Body = (props) =>{
    return(<View style={styles.body}>
        {props.content.map((row) =>(<Row cells={row} />))}
    </View>)
}

const Row  = (props) => {
    return(<View style={styles.row}>
        {props.cells.map((cell) =><Cell value={cell}/>)}
        </View>)
}

const HeadCell = (props) =>{
    return(<View style={styles.headCell}><Text>{props.value}</Text></View>)
}

const Cell = (props) =>{
    return(<View style={styles.cell}>
            <Text>{props.value}</Text>
        </View>)
}

const styles = StyleSheet.create({
    table: {
        margin: 20,
        flexDirection: "column"
    },
    heading: {
        flexDirection: 'row',
        borderColor: 'black',
        borderTopWidth: 3,
        justifyContent: 'space-between',
        borderBottomWidth: 3,
    },
    headCell: {
        padding: 5,
        textAlign: 'left',
        fontWeight: '400',
        color: 'black',
        'fontSize': 24,
        flex: 1
    },
    body: {
        flexDirection: 'column',
    },
    cell: {
        padding: 5,
        textAlign: 'left',
        fontWeight: '200',
        color: 'black',
        'fontSize': 18,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }

})

export default Table;