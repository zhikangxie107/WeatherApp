import react from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native'

import IconText from '../components/IconText'

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    risesetWrapper,
    risesetText,
    imageLayer,
    rowLayout,
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayer}
      >
        <Text style={[cityName, cityText]}>Orange Walk Town</Text>
        <Text style={[countryName, cityText]}>Belize</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'1000'}
            bodyTextStyles={populationText}
          />
        </View>

        <View style={[risesetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'5:37am'}
            bodyTextStyles={risesetText}
          />

          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'6:18pm'}
            bodyTextStyles={risesetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayer: {
    flex: 1,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  risesetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  risesetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default City
