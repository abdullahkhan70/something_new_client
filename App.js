import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Labels} from './utils/String';
const {width} = Dimensions.get('screen');
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.mainText}>{Labels.MAINTEXT}</Text>
        <View style={styles.redSymbol} />
      </View>
      <Image
        style={styles.imagePic}
        source={require('./assets/images/profile_image.jpeg')}
        resizeMethod="scale"
        resizeMode="cover"
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Text style={styles.detailTextLabel}>{Labels.DETAILTEXT1}</Text>
          <Text style={styles.detailText}>200</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={styles.detailTextLabel}>{Labels.DETIALTEXT2}</Text>
          <Text style={styles.detailText}>150</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={styles.detailTextLabel}>{Labels.DETAILTEXT3}</Text>
          <Text style={styles.detailText}>180</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.mainBtn}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          {Labels.BUTTONTEXT}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginLeft: 40,
          alignSelf: 'flex-start',
        }}>
        <Image
          style={styles.icon}
          source={require('./assets/images/star.png')}
        />
        <View style={{marginLeft: 30}}>
          <Text style={styles.starTitle}>{Labels.STARTITLE}</Text>
          <Text style={styles.starTitleText}>{Labels.STARTITLETEXT}</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginLeft: 40,
          alignSelf: 'flex-start',
        }}>
        <Image
          style={styles.icon}
          source={require('./assets/images/star.png')}
        />
        <View style={{marginLeft: 30}}>
          <Text style={styles.starTitle}>{Labels.WARNING}</Text>
          <Text style={[styles.starTitleText, {width: width - 150}]}>{Labels.WARNINGDUMMYTEXT}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
