import React from 'react';
import InputTable from './input_table';

class TestScreen extends React.Component{
    static navigationOptions = {
        title: 'Test Screen'
    }

    render(){
        return(<InputTable 
                    numbered
                    fields={[{name: 'applied mass'}, {name: 'measured'}]}/>)
    }
}

export default TestScreen