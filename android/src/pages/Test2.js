import React, { useRef, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

import GetUrl from '../components/GetUrl';

export default function Test2({state}){
  const [txt, setTxt] = useState('');
  const [url, setUrl] = useState('');
  const [Page, SetPage] = useState(false);
  const webViewRef = useRef();

  //Função para recebimento dos dados enviados da Web
  function getDataToWeb(e) {
    console.log('Dado do web: ' + JSON.parse(e.nativeEvent.data));
  }

  //Função para envio de dados do Mobile para Web
  function sendDataToWeb() {
    webViewRef.current.postMessage(`${JSON.stringify(txt)}`);
  }

  if(Page === false){
    return(
      <GetUrl back={state} setGo={SetPage} setUrl={setUrl} />
    );
  }else if(Page === true){
    return (
      <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => SetPage(false)} style={styles.btnBack}>
            <Text style={styles.Button}>VOLTAR</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.container}>
          <View>
            <View style={{alignItems: 'center'}}>
              <TextInput style={styles.Input} value={txt} onChangeText={text => setTxt(text)} />        

              <TouchableOpacity
                onPress={() => sendDataToWeb()}
                style={styles.button}>
                <Text style={styles.txtButton}>
                  Enviar para Web
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <WebView
            ref={webViewRef}
            scalesPageToFit={false}
            mixedContentMode="compatibility"
            javaScriptEnabled={true}
            onMessage={getDataToWeb}
            source={{uri: url}}
          />
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Input:{
    borderWidth: 4,
    borderColor:'#ddd',
    margin: 20,
    width: 200,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  button:{
    padding: 20,
    width: 200,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#33EBFF',
    borderRadius: 3,
    borderColor: '#1FE9FF',
    borderWidth: 3
  },  
  txtButton:{
    fontSize: 18, 
    color: 'white',
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
