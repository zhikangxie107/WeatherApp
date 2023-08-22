import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temperature,
    feels,
    highlowwrapper,
    highlow,
    bodyWrapper,
    description,
    message,
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temperature}>30</Text>
        <Text style={feels}>Feels like: 40</Text>
        
        <RowText
          firstBodyText={'High: 33'}
          secondBodyText={'Low: 24'}
          wrapperStyle={highlowwrapper}
          firstBodyTextStyle={highlow}
          secondBodyTextStyle={highlow}
        />
      </View>

      <RowText
        firstBodyText={"It's Sunny"}
        secondBodyText={weatherType.Thunderstorm.message}
        wrapperStyle={bodyWrapper}
        firstBodyTextStyle={description}
        secondBodyTextStyle={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highlow: {
    color: 'black',
    fontSize: 20,
  },
  highlowwrapper: {
    flexDirection: 'row',
  },

  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 41,
  },
  message: {
    fontSize: 30,
  },
})

export default CurrentWeather
