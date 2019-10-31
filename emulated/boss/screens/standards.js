import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
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
  },
  heading: {
      padding: 15,
      fontSize: 24,
      fontWeight: "normal"
  }

});


class StandardsScreen extends React.Component{
    static navigationOptions = {
        title: 'Standards'
    }


   render(){
       const {navigate} = this.props.navigation;
       return(<View style={styles.paddedStyle}>
            <Text style={styles.paragraph}>Listed Below are all the standards used for calibration. Click 'Create' to add new ones</Text>
            <Button title='Create' 
                onPress={() =>navigate('CreateStandard')} />
            
            <View>
                <Text style={styles.heading}>Existing Standards</Text>
                <FlatList 
                    data={[
                        {name: 'Mass Pieces', id: 1},
                        {name: 'Dead Weight', id: 2},
                    ]}
                    renderItem={({item}) =>(
                        <Text style={styles.paragraph}>{item.id}. {item.name}</Text>
                    )}/>
            </View>
            
        </View>)
   }
}

export default StandardsScreen;