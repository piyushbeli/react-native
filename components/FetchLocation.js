import React from 'react';
import { Button, Alert } from 'react-native';

class FetchLocation extends React.Component {
    fetchLocation = () => {
        const self = this;
        navigator.geolocation.getCurrentPosition(location => {
            self.props.onGetLocation(location);
        }, err => console.log(err));
    };

    render () {
        return (
            <Button title="Get Location" onPress={this.fetchLocation}/>
        );
    };
}

export default FetchLocation;