import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

type Props = {
  handleToggle: () => void
  isToggle: boolean
  text: string
}

const BottonSheetBtn = ({ handleToggle, isToggle, text }: Props) => {
  const { toggleActive, toggleInactive, activeText, InactiveText } = styles
  return (
    <TouchableOpacity
      onPress={handleToggle}
      style={isToggle ? toggleActive : toggleInactive}
    >
      <Text style={isToggle ? activeText : InactiveText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  toggleActive: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 32
  },
  activeText: { color: '#fff', fontWeight: 'bold' },
  toggleInactive: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 32
  },
  InactiveText: { color: Colors.primary }
})

export default BottonSheetBtn
