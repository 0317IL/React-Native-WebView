import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, TextInput, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);

  const runFirst = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

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
      <View style={styles.container}>
          <Text style={styles.title}>Digite a Url</Text> 
        <TextInput  
          style={styles.txtInput}
          onChangeText={text => setUrl(text)}
          value={url}
          />
        <View style={{margin: 5, alignItems: 'center',}}>
          <TouchableOpacity onPress={() => setGo(true)} style={styles.button}>
            <Text style={styles.Button}>GO</Text>
          </TouchableOpacity>
        </View>
      </View>
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
          onMessage={(event) => {}}
          injectedJavaScript={runFirst}
          />
      </>
    );
  }
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
  txtInput:{
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
    fontSize: 20,
    fontWeight: 'bold',
  },

  //Parte 2
  header:{
    marginTop: 61,
    backgroundColor: '#abdf',
    height: 35,
    justifyContent: 'center',
  },
  btnBack:{
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 6
  }
});
