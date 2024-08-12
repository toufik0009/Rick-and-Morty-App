import React, { useContext, useEffect, useState } from 'react';
import { Image, StatusBar, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { myContext } from '../provider/ContextApi';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBox from '../components/SearchBox';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { character, fetchData, search,wishlist, setWishlist } = useContext(myContext);
  const [filteredCharacters, setFilteredCharacters] = useState(character);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');


  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      await fetchData();
      setLoading(false);

    };
    loadCharacters();
  }, []);

  useEffect(() => {
    filterCharacters();
  }, [search, character, category]);

  const filterCharacters = () => {
    let filtered = character;
    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category === 'Alive') {
      filtered = filtered.filter((item) => item.status === 'Alive');
    } else if (category === 'Dead') {
      filtered = filtered.filter((item) => item.status === 'Dead');
    }
    setFilteredCharacters(filtered);
  };

  const toggleWishlist = (item) => {
    const isWishlisted = wishlist.some((wishItem) => wishItem.id === item.id);
    let updatedWishlist;

    if (isWishlisted) {
      updatedWishlist = wishlist.filter((wishItem) => wishItem.id !== item.id);
    } else {
      updatedWishlist = [...wishlist, item];
    }

    setWishlist(updatedWishlist);
    navigation.setParams({ wishlist: updatedWishlist });
  };

  const renderItem = ({ item }) => {
    const isWishlisted = wishlist.some((wishItem) => wishItem.id === item.id);
    return (
      <LinearGradient colors={['#f08522', '#eb4034', '#2d2e2d']} className="mx-4 my-2 p-4 rounded-lg shadow-sm shadow-black">
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { item })}>
          <View className=" bg-white rounded-lg p-4">
            <View className="absolute right-4 top-4">
              <TouchableOpacity onPress={() => toggleWishlist(item)}>
                <ArrowIcon name={isWishlisted ? 'heart' : 'hearto'} size={28} color={'red'} />
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

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <View className="px-4 pt-2">
        <Image
          source={require('../images/RickandMorty.png')}
          resizeMode="cover"
          style={{ height: 50, width: 200 }}
        />
      </View>
      <SearchBox />
      <View className="flex-row justify-between px-4 py-2">
        <Text className="text-2xl">Characters</Text>
        <Text className="text-base">Total: {filteredCharacters.length}</Text>
      </View>

      {/* Category Buttons */}
      <View className="flex-row justify-evenly mb-4">
        <TouchableOpacity
          onPress={() => setCategory('All')}
          className={`px-2 py-2 rounded-lg ${category === 'All' ? 'bg-green-500' : 'bg-gray-300'}`}>
          <Text className={`${category === 'All' ? 'text-white' : 'text-black'}`}>All Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategory('Alive')}
          className={`px-2 py-2 rounded-lg ${category === 'Alive' ? 'bg-green-500' : 'bg-gray-300'}`}>
          <Text className={`${category === 'Alive' ? 'text-white' : 'text-black'}`}>Alive Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCategory('Dead')}
          className={`px-2 py-2 rounded-lg ${category === 'Dead' ? 'bg-green-500' : 'bg-gray-300'}`}>
          <Text className={`${category === 'Dead' ? 'text-white' : 'text-black'}`}>Dead Characters</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredCharacters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

    </SafeAreaView>
  );
};

export default HomeScreen;
