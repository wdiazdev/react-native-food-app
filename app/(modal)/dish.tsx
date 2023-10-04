import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { getDishById } from '@/assets/data/restaurant'
import Colors from '@/constants/Colors'
import FullButton from '@/components/FullButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeIn, FadeInLeft } from 'react-native-reanimated'
import * as Haptics from 'expo-haptics'
import useBasketStore from '@/store/basketStore'

const Dish = () => {
  const { id } = useLocalSearchParams()
  //+ to convert string to number, alternative(Number(id))
  const item = getDishById(+id)

  const navigation = useNavigation()

  const { addProduct } = useBasketStore()

  const addToCart = () => {
    if (item) {
      addProduct(item)
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    navigation.goBack()
  }

  const { container, img, dishDetails, dishName, dishInfo, footerContainer } =
    styles
  return (
    <SafeAreaView style={container} edges={['bottom']}>
      <Animated.Image
        source={item?.img}
        style={img}
        entering={FadeIn.duration(500).delay(400)}
      />
      <View style={dishDetails}>
        <Animated.Text
          style={dishName}
          entering={FadeInLeft.duration(400).delay(400)}
        >
          {item?.name}
        </Animated.Text>
        <Animated.Text
          style={dishInfo}
          entering={FadeInLeft.duration(400).delay(700)}
        >
          {item?.info}
        </Animated.Text>
        <View
          style={{ borderBottomWidth: 2, borderBottomColor: Colors.grey }}
        />
      </View>
      <View style={footerContainer}>
        <FullButton text={`Add fot $${item?.price}`} handlePress={addToCart} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  img: { width: '100%', height: 300 },
  dishDetails: {
    padding: 16,
    gap: 4
  },
  dishName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  dishInfo: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.mediumDark,
    marginBottom: 10
  },
  footerContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 2,
    shadowColor: Colors.mediumDark,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    paddingTop: 10
  }
})

export default Dish
