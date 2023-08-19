import react from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
  const {
    firstBodyText,
    secondBodyText,
    wrapperStyle,
    firstBodyTextStyle,
    secondBodyTextStyle,
  } = props
  return (
    <View style={wrapperStyle}>
      <Text style={firstBodyTextStyle}>{firstBodyText}</Text>
      <Text style={secondBodyTextStyle}>{secondBodyText}</Text>
    </View>
  )
}

export default RowText
