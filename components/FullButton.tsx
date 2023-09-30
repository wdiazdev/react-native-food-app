import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NativeScreen } from 'react-native-screens'
import Colors from '@/constants/Colors'

type Props = {
  handlePress?: () => void
  text?: string
}

const FullButton = ({ handlePress, text }: Props) => {
  const { btn, buttonText } = styles
  return (
    <TouchableOpacity onPress={handlePress} style={btn}>
      <Text style={buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    borderRadius: 4
  },
  buttonText: { color: 'white', fontWeight: 'bold' }
})
export default FullButton
