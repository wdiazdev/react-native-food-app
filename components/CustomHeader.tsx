import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import BottomSheet from './bottomSheet/BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import HeaderSearchBar from './HeaderSearchBar'

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const openModal = () => {
    bottomSheetRef.current?.present()
  }
  const {
    container,
    safeArea,
    headerLeftImg,
    titleContainer,
    profileBtn,
    title,
    location,
    subtitle
  } = styles
  return (
    <SafeAreaView style={safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            source={require('../assets/images/bike.png')}
            style={headerLeftImg}
          />
        </TouchableOpacity>

        <TouchableOpacity style={titleContainer}>
          <Text style={title}>Delivery · Now</Text>
          <View style={location}>
            <Text style={subtitle}>London</Text>
            <Ionicons name={'chevron-down'} size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={profileBtn}>
          <Ionicons name={'person-outline'} size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <HeaderSearchBar
        placeholder="Restaurants, groceries, dishes"
        link="/(modal)/filter"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'red' },
  container: {
    height: 60,
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  headerLeftImg: {
    width: 30,
    height: 30
  },
  titleContainer: {
    flex: 1
  },
  profileBtn: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50
  },
  title: {
    fontSize: 14,
    color: Colors.medium
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  subtitle: { fontSize: 18, fontWeight: 'bold' }
})

export default CustomHeader
