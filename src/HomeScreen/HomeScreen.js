import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Input } from "native-base";
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const LATITUDE = 41.0793;
const LONGITUDE = -85.1394;

var titleText = "Prototype";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" style={styles.theme} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.theme}>{titleText.toUpperCase()}</Title>
            <Input placeholder='Regular Textbox' />
          </Body>
          <Right />
        </Header>
        <MapView style={styles.map}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
        }}>
         </MapView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
      width: height,
      height: height,
  },
  header: {
    backgroundColor: '#004346',
  },
  theme: {
    color: '#fff',
  }
});
