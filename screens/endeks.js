import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { BackHandler } from 'react-native';


export default class Endeks extends Component {


  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      sonuc: '',
      kilo: '',
    }
    this.sum = this.sum.bind(this);
  }

  sum() {
    const { input1, input2 } = this.state
    if (input1 == "NaN" || input2 == "NaN" || input1 == "" || input2 == "") {
      this.setState({
        sonuc: "Boş Bırakmayınız",
        kilo: ""
      })
      return false
    } else {
      const number1 = parseFloat(this.state.input1);
      const number2 = parseFloat(this.state.input2);
      const sonuc = number2 / (number1 * number1);
      if (sonuc <= 0.0) {
        kilonuz = "Çok Zayıf"
      } else if (sonuc <= 18.5) {
        kilonuz = "Zayıf"
      } else if (sonuc <= 24.9) {
        kilonuz = "Normal kilolu"
      } else if (sonuc <= 29.9) {
        kilonuz = "Fazla kilolu"
      } else if (sonuc <= 39.9) {
        kilonuz = "Obez"
      } else if (sonuc <= 50.5) {
        kilonuz = "İleri derecede obez "
      }
      else if (sonuc >= 90.5) {
        kilonuz = "Wtf? "
      }
      this.setState({
        sonuc: "Vücut Kitle İndeksiniz: " + sonuc.toFixed(2),
        kilo: kilonuz
      })
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.kotuz}>Kotuz Studio</Text>
        </View>
        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
            placeholder='Boyunuzu Giriniz Örn: 1.72'
            placeholderTextColor="#026969"
            onChangeText={(value) => {
              this.setState({
                input1: value
              })
            }}
            value={this.state.input1}
          />
          <TextInput style={styles.input}
            placeholder='Kilonuzu Giriniz Örn: 70'
            placeholderTextColor="#026969"
            onChangeText={(value) => {
              this.setState({
                input2: value
              })
            }}
            value={this.state.input2}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.sum} >
            <Text style={styles.buttonYazi}>
              Hesapla
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sampleyazi}>{this.state.sonuc}</Text>
        <Text style={styles.kiloCevap}>{this.state.kilo}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  kotuz: {
    marginBottom: 15,
    fontWeight: 'bold',
    shadowColor: '#c77dff',
    shadowOpacity: .4,
    shadowOffset: { width: 0, height: 3 },

  },
  kiloCevap: {
    textAlign: 'center',
    shadowColor: '#14213d',
    shadowOpacity: .5,
    shadowOffset: { width: 0, height: 3 },
    justifyContent: 'center',
    fontSize: 34, 
    fontWeight: 'bold',
    marginTop: 4, 
    color: '#14213d',
  },
  pngResim: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  pngResimm: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 100,
    height: 150,
  },
  buttonStyle: {
    fontSize: '28',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#06d6a0',
    textAlign: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  input: {
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
  },
  sampleyazi: {
    height: 30,
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  contentWrapper: {
    marginBottom: 60,
    flexDirection: 'column',
    justifyContent: 'center'

  },
  buttonYazi: {
    color: "white",
    fontSize: 30,
    fontWeight: '600',
  },
});
