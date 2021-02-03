import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');
export function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/holiday2.jpg')}
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
      <View style={{width, height: height * 0.3, justifyContent:'center', alignItems:'center'}}>
          <View style={{height:height * 0.15, justifyContent:'flex-end'}}>
              <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'#fff', paddingHorizontal: height * 0.05, paddingVertical: height * 0.02, borderRadius: height * 0.02}}>
                  <Text style={{fontSize: height * 0.03}}>Add Holiday</Text>
              </TouchableOpacity>
          </View>
          <View style={{height:height * 0.15, justifyContent:'center'}}>
              <TouchableOpacity  activeOpacity={0.7} style={{backgroundColor:'#fff', paddingHorizontal: height * 0.05, paddingVertical: height * 0.02, borderRadius: height * 0.02}}>
                  <Text style={{fontSize: height * 0.03}}>View Holiday</Text>
              </TouchableOpacity>
          </View>
      </View>
      <View style={{height: height * 0.4, backgroundColor:'green', alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{margin: 10}}>
              <TouchableOpacity>
                  <Text style={{fontSize: height * 0.02}}>Rate App</Text>
              </TouchableOpacity>
          </View>
          <View style={{margin: 10}}>
              <TouchableOpacity>
                  <Text style={{fontSize: height * 0.02}}>Rate App</Text>
              </TouchableOpacity>
          </View>

      </View>

       
    </ImageBackground>
  );
}
