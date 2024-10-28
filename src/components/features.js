import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>

      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/chatgpticon.png')}
            style={{width: hp(4), height: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            ChatGPT
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on wide reangeof topics.
        </Text>
      </View>

      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/dalleicon.png')}
            style={{width: hp(4), height: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            DALL-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          DALL-E can generate imaginative and diverse images from textual
          descriptions, expanding the bopundaries of visuial creative.
        </Text>
      </View>

      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/smarticon.png')}
            style={{width: hp(4), height: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            Smart IA
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          A powerfull voice assistant with the abilities of ChatGPT and DALL-E,
          providing you the best of both worlds.
        </Text>
      </View>
    </View>
  );
}
