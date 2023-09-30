import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import FullButton from '@/components/FullButton'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

type Coords = {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

const locationSearch = () => {
  const [location, setLocation] = useState<Coords>({
    latitude: 51.5078788,
    longitude: -0.0877321,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02
  })
  console.log('location:', location)

  const navigation = useNavigation()

  const { container, map, btn, searchIcon } = styles
  return (
    <View style={container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log('details:', details)
          console.log('data:', data)
          // 'details' is provided when fetchDetails = true
          const coordsDetails = details?.geometry?.location
          if (!coordsDetails) return
          setLocation({
            ...location,
            latitude: coordsDetails.lat,
            longitude: coordsDetails.lng
          })
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: 'en'
        }}
        // nearbyPlacesAPI="GooglePlacesSearch"
        renderLeftButton={() => (
          <View style={searchIcon}>
            <Ionicons name="search-outline" size={24} color={Colors.medium} />
          </View>
        )}
        onFail={(error) => console.log(error)}
        styles={{
          container: {
            flex: 0,
            zIndex: 100
          },
          textInput: {
            backgroundColor: Colors.grey,
            paddingLeft: 35,
            borderRadius: 10
          },
          textInputContainer: {
            padding: 8,
            backgroundColor: '#fff'
          }
        }}
      />
      <MapView style={map} region={location} showsUserLocation={true} />

      <FullButton
        text={'Search'}
        btnContainer={btn}
        handlePress={() => navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    flex: 1,
    zIndex: 0
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    width: '100%'
  },
  searchIcon: { position: 'absolute', zIndex: 100, top: 17, left: 15 }
})
export default locationSearch
