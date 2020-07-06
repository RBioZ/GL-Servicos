import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'

import background from '../../../assets/background/Cadastro.png'

export default class index extends Component {
  render() {
    return (
      <ImageBackground source={background} style={styles.container}>
        
        <View style={styles.dataContainer}>
          <TouchableOpacity style={[styles.button,{backgroundColor:'#133670'}]}>
            <Text style={[styles.buttonText,{color:'#FFF'}]}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar Empresa/ADM</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFF',
    flex:1,
    justifyContent:'flex-end'
  },
  dataContainer:{
    width: '100%',
    height: '40%',
    borderTopRightRadius:16,
    borderTopLeftRadius:16,
    backgroundColor:'#F0F3F2',
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    width:'90%',
    height:50,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF',
    marginBottom:20
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:16,
    color:'#133670'
  }
})