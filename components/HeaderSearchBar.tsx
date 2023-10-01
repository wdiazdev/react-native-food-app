import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
  placeholder: string
  link: any
}

const HeaderSearchBar = ({ placeholder, link }: Props) => {
  const {
    searchContainer,
    searchWrapper,
    searchField,
    searchIcon,
    input,
    optionBtn
  } = styles
  return (
    <View style={searchContainer}>
      <View style={searchWrapper}>
        <View style={searchField}>
          <Ionicons
            name={'ios-search'}
            size={20}
            color={Colors.medium}
            style={searchIcon}
          />
          <TextInput placeholder={placeholder} style={input} />
        </View>
        <Link href={link} asChild>
          <TouchableOpacity style={optionBtn}>
            <Ionicons
              name={'options-outline'}
              size={20}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    backgroundColor: '#fff'
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 10
  },
  searchField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    borderRadius: 8
  },
  searchIcon: {
    paddingLeft: 4
  },
  input: {
    padding: 10,
    color: Colors.mediumDark
  },
  optionBtn: {
    padding: 10,
    borderRadius: 50
  }
})

export default HeaderSearchBar
