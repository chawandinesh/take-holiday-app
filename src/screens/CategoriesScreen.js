import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context'
const {height, width} = Dimensions.get('window');

export function CategoriesScreen({navigation}) {
  const {state,setState} = React.useContext(TakeHolidayContext)
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: item})}
      style={{
        width: width * 0.96,
        //   alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.15,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderWidth: 2,
        marginTop: height * 0.01,
      }}>
      <View
        style={{
          width: width * 0.4,
          height: height * 0.147,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/holiday3.png')}
          style={{height: height * 0.1, width: width * 0.2}}
        />
      </View>
      <View
        style={{
          width: width * 0.55,
          height: height * 0.14,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{width, height}}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: 'purple',
          height: height * 0.1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{justifyContent: 'center', padding: 5}} onPress={() => navigation.goBack()}>
          <Icon
            name="ios-arrow-back-outline"
            type="ionicon"
            size={height * 0.05}
            color="#fff"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: height * 0.03, fontWeight:'bold'}}>
            Categories
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text></Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5fafa',
          height: height * 0.9,
        }}>
        {/* <Text style={{fontSize: height * 0.1}}>slfj</Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            'ABROAD',
            'BEACH',
            'CAMPING TRIP',
            'TRIP TO THE CITY',
            'ROAD TRIP',
            'CRUISE',
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
