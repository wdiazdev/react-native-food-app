import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const FilterItems = () => {
  const { filterItemWrapper, itemContainer, textContainer, header } = styles
  return (
    <React.Fragment>
      {['Sort', 'Higiene rating', 'Offers', 'Dietary'].map((item, index) => (
        <React.Fragment key={index}>
          <View style={filterItemWrapper}>
            <TouchableOpacity style={itemContainer}>
              <Ionicons
                name={
                  item === 'Sort'
                    ? 'arrow-down-outline'
                    : item === 'Higiene rating'
                    ? 'fast-food-outline'
                    : item === 'Offers'
                    ? 'pricetag-outline'
                    : 'nutrition-outline'
                }
                size={20}
                color={Colors.medium}
              />
              <View style={textContainer}>
                <Text>{item}</Text>
              </View>
              <Ionicons
                name={'chevron-forward'}
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </React.Fragment>
      ))}
      <Text style={header}>Categories</Text>
    </React.Fragment>
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
