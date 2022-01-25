import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function GetUrl({back, setGo, setUrl}){
    return (
        <>
            <TouchableOpacity onPress={() => back(0)} style={styles.btnBack}>
                <Text style={styles.txtButton}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.title}>Digite a Url</Text> 
                <TextInput  
                style={styles.Input}
                onChangeText={text => setUrl(text)}
                />
                <View style={{margin: 5, alignItems: 'center',}}>
                  <TouchableOpacity onPress={() => setGo(true)} style={styles.button}>
                      <Text style={styles.txtButton}>GO</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#abdf'
    },
    title:{
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 50,
      marginBottom: 20
    },
    Input:{
      borderWidth: 4,
      borderColor:'#ddd',
      margin: 20,
      borderRadius: 8,
      paddingLeft: 10,
      backgroundColor: '#fff'
    },
    button:{
      width: 90, 
      height: 55,
      backgroundColor: '#fff',
      borderColor:'#ddd',
      borderWidth: 4,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    txtButton:{
      color: '#111',
      fontSize: 18,
    },
    btnBack:{
      marginLeft: 10,
      paddingLeft: 10,
      borderLeftWidth: 6,
      marginTop: 45,
      marginBottom: 5,
    }
  });