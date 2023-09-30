import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

type Props = {
  subheaderText: string
  btnText: string
  handlePress?: () => void
}

const BottomSheetLocationItem = ({
  subheaderText,
  btnText,
  handlePress
}: Props) => {
  const { subheader, subheaderItem, subheaderItemText } = styles
  return (
    <View>
      <Text style={subheader}>{subheaderText}</Text>
      <Link
        href={btnText === 'Current Location' ? '/(modal)/locationSearch' : '/'}
        asChild
        onPress={handlePress ? handlePress : undefined}
      >
        <TouchableOpacity>
          <View style={subheaderItem}>
            <Ionicons
              name={
                subheaderText === 'Your Location'
                  ? 'location-outline'
                  : 'stopwatch-outline'
              }
              size={20}
              color={Colors.medium}
            />
            <Text style={subheaderItemText}>{btnText}</Text>

            <Ionicons
              name={'chevron-forward'}
              size={20}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  subheader: {
    fontSize: 16,
    fontWeight: '600',
    margin: 16
  },
  subheaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1
  },
  subheaderItemText: { flex: 1 }
})

export default BottomSheetLocationItem
