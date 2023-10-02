import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

type Props = {
  handlePress?: () => void
  text?: string
  btnStyles?: any
  btnText?: any
  btnContainer?: any
}

const FullButton = ({
  handlePress,
  text,
  btnContainer,
  btnStyles,
  btnText
}: Props) => {
  const { container, btn, buttonText } = styles
  return (
    <View style={btnContainer ? [container, { ...btnContainer }] : container}>
      <TouchableOpacity
        onPress={handlePress}
        style={btnStyles ? [btn, { ...btnStyles }] : btn}
      >
        <Text style={btnText ? [buttonText, { ...btnText }] : buttonText}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    height: 56,
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
})
export default FullButton
