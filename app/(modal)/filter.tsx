import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/Colors'
import FullButton from '@/components/FullButton'
import { useNavigation } from 'expo-router'
import { filterCategories } from '../../assets/data/filterCategories'
import FilterItems from '@/components/filter/FilterItems'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Animated, { FadeIn, FadeInRight } from 'react-native-reanimated'

type Category = {
  name: string
  count: number
  checked?: boolean
}

const Filter = () => {
  const [checkboxState, setCheckboxState] =
    useState<Category[]>(filterCategories)
  const [selectedCategory, setSelectedCategory] = useState<boolean>()

  useEffect(() => {
    const selected = checkboxState.filter((item) => item.checked).length > 0
    setSelectedCategory(selected)
  }, [checkboxState])

  const navigation = useNavigation()

  const handleClear = () => {
    const clearItem = checkboxState.map((item) => {
      item.checked = false
      return item
    })
    setCheckboxState(clearItem)
  }

  const {
    container,
    footer,
    row,
    itemText,
    buttonContainer,
    outlineButton,
    outlineButtonText
  } = styles

  const categoryItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={row}>
      <Text style={itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        fillColor={Colors.primary}
        unfillColor="#fff"
        innerIconStyle={{ borderWidth: 2 }}
        disableBuiltInState
        isChecked={checkboxState[index].checked}
        onPress={() => {
          const isChecked = checkboxState[index].checked

          const checkedItem = checkboxState?.map((item) => {
            if (item.name === checkboxState[index].name) {
              item.checked = !isChecked
            }
            return item
          })
          setCheckboxState(checkedItem)
        }}
      />
    </View>
  )
  return (
    <View style={container}>
      <FlatList
        data={filterCategories}
        renderItem={categoryItem}
        ListHeaderComponent={<FilterItems />}
        keyExtractor={(item) => item.name}
      />
      <View style={{ height: 80 }} />
      <View style={footer}>
        <View style={buttonContainer}>
          <FullButton handlePress={() => navigation.goBack()} text={'Done'} />

          {selectedCategory && (
            <Animated.View
              style={{ flex: 1 }}
              entering={FadeInRight.duration(300).delay(100)}
            >
              <FullButton
                handlePress={handleClear}
                text={'Clear'}
                btnStyles={outlineButton}
                btnText={outlineButtonText}
              />
            </Animated.View>
          )}
        </View>
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
  },
  itemText: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  outlineButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    borderColor: Colors.primary,
    borderWidth: 0.5
  },
  outlineButtonText: {
    color: Colors.primary,
    fontWeight: 'bold'
  }
})

export default Filter
