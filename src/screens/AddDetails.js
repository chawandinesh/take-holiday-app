import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {TakeHolidayContext} from './context';

const {height, width} = Dimensions.get('window');

export function AddDetails({navigation, route}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const {details, item} = route.params;
  const [formState, setFormState] = React.useState({
    place: '',
    from: '',
    to: '',
    by: '',
    information: '',
    image: '',
  });
  React.useEffect(() => {
    if (item) {
      setFormState(item);
    }
  }, []);

  const handleSubmit = () => {
    if (item) {
      const index = state[details].findIndex((e) => e.place === item.place);
      [...state[details].splice(index, 1, formState)];
      setState(state);
    } else {
      setState({...state, [details]: [...state[details], {...formState}]});
    }
    navigation.goBack();
  };
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView style={{width, height}}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'purple',
            height: height * 0.1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() => navigation.goBack()}>
            <Icon
              name="ios-arrow-back-outline"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            {item ? (
              <Text
                style={{
                  color: '#fff',
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                }}>
                Update Details
              </Text>
            ) : (
              <Text
                style={{
                  color: '#fff',
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                }}>
                Add Details
              </Text>
            )}
          </View>
          <View style={{padding: 20}}>
            <Text></Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#f5fafa',
            height: height * 0.9,
            width: width * 0.94,
            alignSelf: 'center',
            marginTop: height * 0.01,
          }}>
          <View style={{marginBottom: height * 0.01, height: height * 0.1}}>
            <Text
              style={{
                width: width * 0.2,
                backgroundColor: 'purple',
                color: '#fff',
                alignSelf: 'flex-end',
                borderTopRightRadius: height * 0.02,
                borderTopLeftRadius: height * 0.02,
                textAlign: 'center',
              }}>
              Place
            </Text>
            <TextInput
              onChangeText={(text) =>
                setFormState({
                  ...formState,
                  place: text,
                })
              }
              value={formState.place}
              style={{
                backgroundColor: '#fff',
                borderWidth: 1,
                height: height * 0.05,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
          </View>

          <View style={{marginBottom: height * 0.01, height: height * 0.1}}>
            <Text
              style={{
                width: width * 0.2,
                backgroundColor: 'purple',
                color: '#fff',
                alignSelf: 'flex-end',
                borderTopRightRadius: height * 0.02,
                borderTopLeftRadius: height * 0.02,
                textAlign: 'center',
              }}>
              From
            </Text>
            <TextInput
              onChangeText={(text) =>
                setFormState({
                  ...formState,
                  from: text,
                })
              }
              value={formState.from}
              style={{
                backgroundColor: '#fff',
                borderWidth: 1,
                height: height * 0.05,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
          </View>

          <View style={{marginBottom: height * 0.01, height: height * 0.1}}>
            <Text
              style={{
                width: width * 0.2,
                backgroundColor: 'purple',
                color: '#fff',
                alignSelf: 'flex-end',
                borderTopRightRadius: height * 0.02,
                borderTopLeftRadius: height * 0.02,
                textAlign: 'center',
              }}>
              To
            </Text>
            <TextInput
              onChangeText={(text) =>
                setFormState({
                  ...formState,
                  to: text,
                })
              }
              value={formState.to}
              style={{
                backgroundColor: '#fff',
                borderWidth: 1,
                height: height * 0.05,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
          </View>

          <View style={{marginBottom: height * 0.01, height: height * 0.1}}>
            <Text
              style={{
                width: width * 0.2,
                backgroundColor: 'purple',
                color: '#fff',
                alignSelf: 'flex-end',
                //   borderRadius: height * 0.01,
                borderTopRightRadius: height * 0.02,
                borderTopLeftRadius: height * 0.02,
                textAlign: 'center',
              }}>
              By
            </Text>
            <TextInput
              onChangeText={(text) =>
                setFormState({
                  ...formState,
                  by: text,
                })
              }
              value={formState.by}
              style={{
                backgroundColor: '#fff',
                borderWidth: 1,
                height: height * 0.05,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
          </View>

          <View style={{marginBottom: height * 0.01, height: height * 0.2}}>
            <Text
              style={{
                width: width * 0.3,
                backgroundColor: 'purple',
                color: '#fff',
                alignSelf: 'flex-end',
                //   borderRadius: height * 0.01,
                borderTopRightRadius: height * 0.02,
                borderTopLeftRadius: height * 0.02,
                textAlign: 'center',
              }}>
              Information
            </Text>
            <TextInput
              onChangeText={(text) =>
                setFormState({
                  ...formState,
                  information: text,
                })
              }
              value={formState.information}
              multiline
              numberOfLines={4}
              style={{
                backgroundColor: '#fff',
                borderWidth: 1,
                height: height * 0.15,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
          </View>

          <View
            style={{
              marginBottom: height * 0.01,
              height: height * 0.1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                height: height * 0.1,
                width: height * 0.1,
                borderWidth: 1,
                justifyContent: 'center',
              }}>
              {formState.image ? (
                <Image
                  source={{uri: formState.image}}
                  resizeMode="stretch"
                  style={{height: height * 0.1, width: height * 0.1}}
                />
              ) : (
                <Icon
                  type="ionicon"
                  name="ios-image-outline"
                  size={height * 0.05}
                />
              )}
            </TouchableOpacity>
            <View>
              <Icon type="ionicon" name="arrow-back" />
            </View>
            <View>
              <Text style={{fontSize: height * 0.02, fontWeight: 'bold'}}>
                Add Image
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              height: height * 0.1,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                backgroundColor: 'purple',
                height: height * 0.05,
                width: width * 0.4,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height * 0.03,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
