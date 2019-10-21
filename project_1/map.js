import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import Geolocation from 'react-native-geolocation-service';

export default class maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_position: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 10.732152,
            longitude: 106.699931,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
        <View style={styles.header_area}>
          <TouchableOpacity style={styles.menu_btn}>
            <Icon name="menu" size={30} />
          </TouchableOpacity>
          <TextInput style={styles.search_box} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  header_area: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },
  search_box: {
    height: 50,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    marginLeft: 15,
  },
  menu_btn: {
    marginTop: 11,
  },
});
