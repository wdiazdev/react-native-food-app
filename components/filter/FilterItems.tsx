import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const FilterItems = () => {
  const { filterItemWrapper, itemContainer, textContainer, header } = styles
  return (
    <>
      <View style={filterItemWrapper}>
        <TouchableOpacity style={itemContainer}>
          <Ionicons
            name={'arrow-down-outline'}
            size={20}
            color={Colors.medium}
          />
          <View style={textContainer}>
            <Text>Sort</Text>
          </View>
          <Ionicons name={'chevron-forward'} size={20} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={itemContainer}>
          <Ionicons
            name={'fast-food-outline'}
            size={20}
            color={Colors.medium}
          />
          <View style={textContainer}>
            <Text>Higiene rating</Text>
          </View>
          <Ionicons name={'chevron-forward'} size={20} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={itemContainer}>
          <Ionicons name={'pricetag-outline'} size={20} color={Colors.medium} />
          <View style={textContainer}>
            <Text>Offers</Text>
          </View>
          <Ionicons name={'chevron-forward'} size={20} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={itemContainer}>
          <Ionicons
            name={'nutrition-outline'}
            size={20}
            color={Colors.medium}
          />
          <View style={textContainer}>
            <Text>Dietary</Text>
          </View>
          <Ionicons name={'chevron-forward'} size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <Text style={header}>Categories</Text>
    </>
  )
}

const styles = StyleSheet.create({
  filterItemWrapper: {
    backgroundColor: '#fff',

    padding: 6
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    paddingVertical: 12
  },
  textContainer: {
    flex: 1
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
  }
})

export default FilterItems
