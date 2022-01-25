import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, TextInput, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import GetUrl from '../components/GetUrl';

export default function Test({state}) {
  const [url, setUrl] = useState('http://192.168.0.29:3000');
  const [go, setGo] = useState(false);

  function Error(){
    console.log(`DEU RUIM`);
    console.log('\n\n');
    alert('DEU RUIM!');
  }

  function End(){
    console.log('Carregou');
    console.log('\n\n');
  }

  function Loading(){
    return(
        <Text style={{flex: 1,textAlign: 'center',}}>
          CARREGANDO
        </Text>
    );
  }

  if(go == false){
    return (
       <GetUrl back={state} setGo={setGo} setUrl={setUrl} />
    );
  }else{
    return(
      <>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setGo(false)} style={styles.btnBack}>
               <Text style={styles.txtButton}>BACK</Text>
          </TouchableOpacity>
        </View>

        <WebView 
          originWhitelist={['*']}
          source={{ uri: url }}
          startInLoadingState={true}
          renderLoading={() => Loading()}
          renderError={() => Error()}
          onLoad={() => End()}
          overScrollMode='never'
          setBuiltInZoomControls={false}
          />
      </>
    );
  }
}

const styles = StyleSheet.create({
  txtButton:{
    color: '#111',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header:{
    marginTop: 61,
    backgroundColor: '#abdf',
    height: 35,
    justifyContent: 'center',
  },
  btnBack:{
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 6,
  },
});