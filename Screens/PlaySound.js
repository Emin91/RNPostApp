import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Sound from 'react-native-sound';
import mp3 from '../src/Eminem.mp3'

export default class PlaySound extends Component {

    componentDidMount(){
        this.hello = new Sound(mp3, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
        });
      }
      
      
      handlePress() {
        this.hello.play((success) => {
          if (!success) {
            console.log('Sound did not play')
          }
        })
      }
  
      render() {
          
          return (
              <TouchableOpacity onPress={this.handlePress.bind(this)}>
                  <View>
                        <Text>Start</Text>
                  </View>
              </TouchableOpacity>
          )
      }
  }