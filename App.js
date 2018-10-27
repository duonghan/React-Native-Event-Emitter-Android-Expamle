/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, DeviceEventEmitter,
    NativeModules, Button, NativeEventEmitter} from 'react-native';

const AnAwesomeModule = NativeModules.AnAwesomeModule;
const emitter = new NativeEventEmitter();

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      result: 'Default Text',
    }
  }

  componentDidMount() {
      // When using DeviceEventEmitter
      // DeviceEventEmitter.addListener('myAwesomeEvent', e => this.setState({result: JSON.stringify(e)}));
      emitter.addListener('myAwesomeEvent', e => alert(JSON.stringify(e)));
  }

  handleClick = () => {
      AnAwesomeModule.anExposedMethod();
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome} >{this.state.result}</Text>
        <Button onPress={this.handleClick} title="Clickme"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
