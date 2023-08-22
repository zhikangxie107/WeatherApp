import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
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

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData

  const weatherCondition = weather[0].main
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{temp}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}`}</Text>

        <RowText
          firstBodyText={`High: ${temp_max}`}
          secondBodyText={`Low: ${temp_min}`}
          wrapperStyle={highlowwrapper}
          firstBodyTextStyle={highlow}
          secondBodyTextStyle={highlow}
        />
      </View>

      <RowText
        firstBodyText={weather[0].description}
        secondBodyText={weatherType[weatherCondition].message}
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
