import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import FullButton from '@/components/FullButton'
import { useNavigation } from 'expo-router'
import { categories } from '../../assets/data/categories'
import FilterItems from '@/components/filter/FilterItems'

type Category = {
  name: string
  count: number
  checked?: boolean
}

const Filter = () => {
  const navigation = useNavigation()

  const { container, footer, row } = styles

  const categoryItem: ListRenderItem<Category> = ({ item }) => (
    <View style={row}>
      <Text>{item.name}</Text>
    </View>
  )
  return (
    <View style={container}>
      <FlatList
        data={categories}
        renderItem={categoryItem}
        ListHeaderComponent={<FilterItems />}
      />
      <View style={{ height: 80 }} />
      <View style={footer}>
        <FullButton handlePress={() => navigation.goBack()} text={'Done'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    ShadowOffset: {
      width: 0,
      height: -10
    }
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff'
  }
})

export default Filter
