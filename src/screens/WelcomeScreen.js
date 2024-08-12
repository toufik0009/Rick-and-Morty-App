import { Image, SafeAreaView, StyleSheet, } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import * as Animatable from "react-native-animatable";
import { StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen')
    }, 3000)
  }, [])
  return (
    <LinearGradient colors={['#f08522','#eb4034', '#22f0a8']} className="flex-1">
      <SafeAreaView className="flex-1 justify-center items-center">
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />

        <Animatable.View
          animation={"flipInY"}
          duration={3000}>
          <Image source={require('../images/RickandMorty.png')} style={{ height: 150, width: 350 }} resizeMode='contain' />
        </Animatable.View>

      </SafeAreaView>
    </LinearGradient>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})