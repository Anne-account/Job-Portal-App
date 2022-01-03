import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadDetails extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontStyle:'italic',fontWeight:'bold',textSpacing:2,fontSize:40}}>Job Seeker Profile!!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});