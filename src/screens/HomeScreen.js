import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ImageBackground
      source={require('../assets/holiday1.png')}
      style={{height, width, flex: 1}}>
      <View
        style={{
          width: width,
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderBottomWidth: 5,
            borderBottomColor: '#ff8',
            height: height * 0.1,
            width: width * 0.8,
            borderRadius: height * 0.02,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: height * 0.04,
              padding: 10,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Take Holiday
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width,
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{height: height * 0.15, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesScreen')}
            activeOpacity={0.7}
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: height * 0.05,
              paddingVertical: height * 0.02,
              borderRadius: height * 0.02,
              borderBottomWidth: 2,
              borderRightWidth: 1,
              borderLeftWidth: 1,
            }}>
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              Add Holiday
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: height * 0.15, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails')}
            activeOpacity={0.7}
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: height * 0.05,
              paddingVertical: height * 0.02,
              borderRadius: height * 0.02,
              borderBottomWidth: 2,
              borderRightWidth: 1,
              borderLeftWidth: 1,
            }}>
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              View Holiday
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: height * 0.4,
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          {/**
           * 
         <View style={{margin: 10}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={{
              backgroundColor: '#ffe',
              padding: height * 0.02,
              borderWidth: 1,
              borderRadius: height * 0.02,
            }}>
            <Icon name="star-rate" type="material-icon" />
            <Text style={{fontSize: height * 0.02}}>Rate App</Text>
          </TouchableOpacity>
        </View> 
           */}
        <View style={{margin: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              backgroundColor: '#ffe',
              padding: height * 0.02,
              borderWidth: 1,
              borderRadius: height * 0.02,
            }}>
            <Icon name="ios-information-circle" type="ionicon" />
            <Text style={{fontSize: height * 0.02}}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

