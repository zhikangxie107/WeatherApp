import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temperature}>30</Text>
        <Text style={styles.feels}>Feels like: 40</Text>

        <View style={styles.highlowwrapper}>
          <Text style={styles.highlow}>High: 33</Text>
          <Text style={styles.highlow}>Low: 24</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Sweaty</Text>
      </View>
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
