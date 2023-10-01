import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { restaurants } from '@/assets/data/restaurantsAndCategories'
import { Link } from 'expo-router'

const Restaurants = () => {
  const {
    categoryText,
    container,
    bgImg,
    cardDetailsContainer,
    ratingText,
    distanceText
  } = styles
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10
      }}
    >
      {restaurants.map((item) => (
        <Link href={'/details'} key={item.id} asChild>
          <TouchableOpacity>
            <View style={container}>
              <Image source={item.img} style={bgImg} />

              <View style={cardDetailsContainer}>
                <Text style={categoryText}>{item.name}</Text>
                <Text style={ratingText}>
                  {item.rating} {item.ratings}
                </Text>
                <Text style={distanceText}>{item.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#fff',
    marginEnd: 10,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    borderRadius: 10,
    overflow: 'hidden'
  },
  bgImg: {
    flex: 4,
    resizeMode: 'cover',
    width: 'auto'
  },
  cardDetailsContainer: { flex: 2, gap: 2, padding: 8 },
  categoryText: { fontSize: 14, fontWeight: 'bold' },
  ratingText: {
    color: Colors.green,
    fontSize: 12
  },
  distanceText: {
    color: Colors.medium,
    fontSize: 12
  }
})
export default Restaurants
