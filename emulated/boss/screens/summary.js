import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {useState} from 'react';
import Table from '../table';


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


class SummaryScreen extends React.Component{
    static navigationOptions = {
        title: 'Calibration Summary'
    }

    render(){
        return(
            <View>
                <Table
                    fields={['Date', 'Customer', 'Instrument', 'Serial']}
                    data={[
                        ['24/12/19', 'Latrom', 'Balance', '123']
                    ]}/>
            </View>
        )
    }
}

export default SummaryScreen;