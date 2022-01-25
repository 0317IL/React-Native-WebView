import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import Test from './src/pages/Test';
import Test2 from './src/pages/Test2';

export default function App(){
  const [page, setPage] = useState(0);

  if(page === 0){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Escolha uma opção:</Text>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => setPage(1)}>
            <Text style={styles.txtButton}>Testar Eventos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setPage(2)}>
            <Text style={styles.txtButton}>Testar Envio de Dados</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }else if(page === 1){
    return(
      <Test state={setPage} />
    );  
  }else if(page === 2){
   return(
     <Test2 state={setPage}/>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fda'
  },
  title:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20
  },
  txtInput:{
    borderWidth: 4,
    borderColor:'#ddd',
    margin: 20,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  button:{
    width: 160, 
    height: 60,
    backgroundColor: '#fff',
    borderColor:'#ddd',
    borderWidth: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  }, 
  txtButton:{
    color: '#111',
    fontSize: 16,
    textAlign: 'center',
  },
})
