import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const TopHeader = ({ header, scrollA }) => {
  const [isTransparent, setTransparent] = useState(isFloating)
  const safeArea = useSafeAreaInsets()

  const navigation = useNavigation()

  const isFloating = !!scrollA

  useEffect(() => {
    if (!scrollA) {
      return
    }
    const listenerId = scrollA.addListener((a) => {
      const topNaviOffset = 350 - 60 - safeArea.top
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent)
    })
    return () => scrollA.removeListener(listenerId)
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: Colors.primary,
      headerBackVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.detailsBtn}
        >
          <Ionicons name={'arrow-back'} size={22} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.iconsRightContainer}>
          <TouchableOpacity style={styles.detailsBtn}>
            <Ionicons name={'share-outline'} size={22} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsBtn}>
            <Ionicons name={'ios-search'} size={22} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      )
    })
  })

  return (
    <>
      <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container(safeArea, isFloating, isTransparent)}>
        <Text style={styles.title(isTransparent)}>{header}</Text>
      </View>
    </>
  )
}
const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -60 - safeArea.top : 0,
    height: 60 + safeArea.top,
    justifyContent: 'center',
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? '#0004' : '#fff',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100
  }),
  title: (isTransparent) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: isTransparent ? '#FFF' : '#000'
  }),
  detailsBtn: {
    backgroundColor: Colors.grey,
    padding: 6,
    borderRadius: 50
  },
  iconsRightContainer: {
    flexDirection: 'row',
    gap: 10
  },

  text: { margin: 24, fontSize: 16 }
}

export default TopHeader
