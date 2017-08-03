import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Mapping Application</Text>
      // </View>
      <MapView style={styles.map}
          initialRegion={{
            latitude: 41.0793,
            longitude: -85.1394,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        // <Container>
        //   <Header>
        //     <Left>
        //       <Button transparent>
        //         <Icon name='menu' />
        //       </Button>
        //     </Left>
        //     <Body>
        //       <Title>Header</Title>
        //     </Body>
        //     <Right />
        //   </Header>
        //   <Content>
        //     <Text>
        //       This is Content Section
        //     </Text>
        //   </Content>
        //   <Footer>
        //     <FooterTab>
        //       <Button full>
        //         <Text>Footer</Text>
        //       </Button>
        //     </FooterTab>
        //   </Footer>
        // </Container>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
