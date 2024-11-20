import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmite(){
    const alt = altura/100;
    const imc = peso / (alt* alt);
    
    if(imc < 18.6){
      alert('Voce esta abaixo do peso! ' + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Voce esta no peso ideal! ' + imc.toFixed(2))
    }else if(imc >=24.9 && imc < 34.9){
      alert('Voce esta acima do peso! ' + imc.toFixed(2))
    }
  }


  return(
    <View style={styles.container}>
    <Text style={styles.title}>Calcule seu IMC</Text>  

    <TextInput 
    style={styles.input}
    value={peso}
    onChangeText={(peso) => setPeso(peso)}
    placeholder="Peso em (kg)"
    placeholderTextColor= "#888"
    keyboardType="numeric"
    />

    <TextInput 
    style={styles.input}
    value={altura}
    onChangeText={(altura) => setAltura(altura)}
    placeholder="Altura em (cm)"
    placeholderTextColor= "#888"
    keyboardType="numeric"
    />

    <TouchableOpacity 
    style={styles.button}
    onPress={handleSubmite}
    >
      <Text style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,   
  },
  input:{
    backgroundColor:'#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFF',
    fontSize: 23,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin: 15,
    backgroundColor:'#41Aef4',
    padding: 10,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 25,
  }
})