import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LeftIcon from "react-native-vector-icons/Entypo";

import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";


const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  console.log("Response", item);



  return (
    // <LinearGradient colors={['#f78b19', '#3feb86']} className="flex-1">

      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#fff1"} translucent />

        <TouchableOpacity
          className="z-10"
          onPress={() => { navigation.goBack(); }}>
          <LeftIcon name="chevron-left" style={styles.LeftIcon} />
        </TouchableOpacity>

        <Animatable.Image
          animation={"zoomInRight"}
          duration={2000}
          source={{ uri: item.image }}
          style={styles.img} />

        <View>
          <ScrollView>
            <View className="flex p-2">

              <Animatable.Text
                animation={"fadeInLeft"}
                duration={2000}
                className="text-3xl font-semibold p-2">
                {item.name}
              </Animatable.Text>

              <View className="m-2 space-y-2 items-baseline">

                <Animatable.View
                  animation={"fadeInLeft"}
                  duration={2000}
                  className="flex flex-row items-center space-x-1">
                  <Image source={require('../images/status.png')} style={{ height: 50, width: 50 }} />
                  <Text className="text-lg">
                    {item.status}
                  </Text>
                </Animatable.View>

                <Animatable.View
                  animation={"fadeInLeft"}
                  duration={2000}
                  className="flex flex-row items-center space-x-1">
                  <Image source={require('../images/species.png')} style={{ height: 50, width: 50 }} />
                  <Text className="text-lg">
                    {item.species}
                  </Text>
                </Animatable.View>

                <Animatable.View
                  animation={"fadeInLeft"}
                  duration={2000}
                  className="flex flex-row items-center space-x-1">
                  <Image source={require('../images/equality.png')} style={{ height: 50, width: 50 }} />
                  <Text className="text-lg">
                    {item.gender}
                  </Text>
                </Animatable.View>

                <Animatable.View
                  animation={"fadeInLeft"}
                  duration={2000}
                  className="flex flex-row items-center space-x-2">
                  <Image source={require('../images/chapter.png')} style={{ height: 50, width: 50 }} />
                  <Text className="text-lg">
                    {item.episode.length}
                  </Text>
                </Animatable.View>
                 <Animatable.View
                  animation={"fadeInLeft"}
                  duration={2000}
                  className="flex flex-row items-center space-x-2">
                  <Image source={require('../images/planet.png')} style={{ height: 50, width: 50 }} />
                  <Text className="text-lg">
                    {item.origin?.name}
                  </Text>
                </Animatable.View>

                <Animatable.View
                  animation={"fadeInLeft"}
                  duration={2000}
                  className="flex flex-row items-center space-x-1">
                  <Image source={require('../images/production.png')} style={{ height: 50, width: 50 }} />
                  <Text className="text-lg">
                    {item.created}
                  </Text>
                </Animatable.View>
              </View>

            </View>


            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}></ScrollView> */}

          </ScrollView>
        </View>
      </View>
    // {/* </LinearGradient> */}
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LeftIcon: {
    position: "absolute",
    top: 30,
    left: 15,
    fontSize: 30,
    alignItems: "flex-start",
    color: "black",
    backgroundColor: "#0004",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 50,
  },
  img: {
    height: 350,
    width: "100%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 50,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
    resizeMode: 'stretch'
  },


});
