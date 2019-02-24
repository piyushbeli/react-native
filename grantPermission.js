import {PermissionsAndroid} from 'react-native';

export default async () => {
    const result = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION]);
    console.log(JSON.stringify(result, 2));
};