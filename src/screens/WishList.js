import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { myContext } from '../provider/ContextApi';

const WishList = ({ navigation }) => {
  const { wishlist, toggleWishlist } = useContext(myContext);


  const renderItem = ({ item }) => {
    return (
      <LinearGradient colors={['#f08522', '#eb4034', '#2d2e2d']} className="mx-4 my-4 p-4 rounded-lg shadow-sm shadow-black">
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { item })}>
          <View className=" bg-white rounded-lg p-4">
            <View className="absolute right-4 top-4">
              <TouchableOpacity onPress={() => toggleWishlist(item)}>
                <ArrowIcon name='heart' size={28} color={'red'} />
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center mb-4">
              <Image
                source={{ uri: item.image }}
                className="w-24 h-24 rounded-lg"
                resizeMode="contain"
              />
              <View className="ml-4">
                <Text className="text-gray-400 text-xs">11 November 2017</Text>
                <Text className="text-lg font-semibold text-gray-800">
                  {item.name.length > 12 ? `${item.name.substring(0, 12)}...` : item.name}
                </Text>
              </View>
            </View>
            <Text className="text-gray-600 mb-1">{item.location?.name}</Text>
            <View className="flex flex-row space-x-5">
              <Text className="text-gray-600 mb-1">{item.gender},</Text>
              <Text className="text-gray-600 mb-4">{item.status}</Text>
            </View>

            <View className="absolute right-2 bottom-4">
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailScreen', { item })}
                className="flex items-end bg-gray-900 p-2 rounded-full">
                <ArrowIcon name='arrowright' size={24} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>


    );
  };

  return (
    <View className="flex-1">

      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default WishList;
