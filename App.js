import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal,  } from 'react-native';

export default function App() {
  
  const [sec2Modal, setSec2Modal] = useState(null);
  const [sec2, setSec2] = useState(null);

  async function goToSec2() {
    setSec2Modal(true);
    setSec2(true);
    console.log("koe")
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.oTexto}>Atividade 1</Text>
        <Text>José Antonio Favaro Trugilio Filho</Text>
        <Text>2019100592</Text>
        <Text>11/09/2021</Text>
        <TouchableOpacity style={styles.button} 
                          onPress={ () => {    setSec2Modal(true);
                            setSec2(true)}}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
      { sec2Modal &&
        <Modal
        animationType="slide"
        transparent={false}
        visible={sec2}
        style={styles.sec2}>
          <Text>a</Text>
          <View style={(styles.qVermelho)}/>
          <View style={(styles.qVerde)}/>
          <View style={(styles.qAzul)}/>
          {/* montar os quadrados aqui mas antes fazer o css deles */}
        </Modal>
      }
    </>
  );
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    oTexto:{
      fontWeight: "bold"
    },
    button:{
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      backgroundColor: 'red',
      borderRadius: 180,
      width: 70,
      height: 40,
      margin: 5,
      marginBottom: 0,
    },
    sec2:{
      position: 'absolute',
      backgroundColor: '#EEE',
    },
    qVermelho:{

      elevation:2,
      zIndex:2,
      backgroundColor: '#A20202',
      left: 200,
      top: 150,
      width: 50,
      height: 50,
      
    },
    qVerde:{
      elevation:3,
      zIndex:3,
      backgroundColor: '#02FA2F',
      left: 200,
      top: 150,
      width: 50,
      height: 50,
    },
    qAzul:{
      elevation:1,
      zIndex:1,
      backgroundColor: '#00AAFF',
      left: 200,
      top: 150,
      width: 50,
      height: 50,

    }
  }
);
