import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React from 'react';
import {View, StyleSheet} from 'react-native';

class Map extends React.Component {
    constructor (props) {
        super(props);
        // Set the initial region
        this.state = {coordinates: props.coordinates};
    }
    componentDidMount () {
        this.setState({coordinates: this.props.coordinates});
    }
    renderMarker() {
        if (this.props.coordinates) {
            return <Marker
                coordinate={this.props.coordinates}
                title='My Current Location'
                description='Test Marker'
            />
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={this.props.coordinates}
                >
                    {this.renderMarker()}
                </MapView>
            </View>
        );
    }
}

export default Map;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});