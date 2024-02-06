import { Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Categories from '@/components/indexPage/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import Restaurants from '@/components/indexPage/Restaurants'
import Colors from '@/constants/Colors'

const Page = () => {
  const { container, header } = styles
  return (
    <SafeAreaView style={container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Categories />
        <Text style={header}>Top picks in your neighborhood</Text>
        <Restaurants />
        <Text style={header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 88,
    backgroundColor: Colors.lightGrey,
    paddingBottom: 50
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 8
  }
})

export default Page
