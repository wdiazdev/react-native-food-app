import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { categories } from '../../assets/data/restaurantsAndCategories'
import Colors from '@/constants/Colors'

const Categories = () => {
  const { categoryCard, categoryText, cardImg } = styles
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10
      }}
    >
      {categories.map((item, index) => (
        <View style={categoryCard} key={index}>
          <Image source={item.img} style={cardImg} />
          <Text style={categoryText}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    marginEnd: 10,
    elevation: 2,
    shadowColor: Colors.mediumDark,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    borderRadius: 4
  },
  cardImg: { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  categoryText: { padding: 4, fontSize: 14, fontWeight: 'bold' }
})

export default Categories
