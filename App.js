
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import FetchLocation from './components/FetchLocation';
import requestDevicePermissions from './grantPermission';
import Map from './components/Map';

export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = {coordinates: null};
    }

    async componentDidMount() {
      try {
          await requestDevicePermissions();
      } catch (e) {
          console.log(e);
      }
  }

  onGetLocation (location) {
      console.log(location);
      // Lesser is the delta more zoomed map will be there.
      this.setState({
          coordinates: {
              latitudeDelta: 0.005,
              longitudeDelta: 0.0021,
              ...location.coords
          }
      });
  }

  render() {
    return (
      <View>
          <FetchLocation onGetLocation={this.onGetLocation.bind(this)}/>
          <Map coordinates={this.state.coordinates} />
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
