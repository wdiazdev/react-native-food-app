import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TopHeader = ({ header, scrollA }) => {
  const safeArea = useSafeAreaInsets()

  const isFloating = !!scrollA
  const [isTransparent, setTransparent] = useState(isFloating)

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
  })
}

export default TopHeader
