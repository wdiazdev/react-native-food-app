import {
  View,
  Text,
  Animated,
  StyleSheet,
  SectionList,
  ListRenderItem,
  TouchableOpacity,
  Image
} from 'react-native'
import React, { useRef } from 'react'
import TopHeader from '@/components/detailsPage/TopHeader'
import { restaurant } from '@/assets/data/restaurant'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import useBasketStore from '@/store/basketStore'
import { SafeAreaView } from 'react-native-safe-area-context'

type Meal = {
  id: number
  name: string
  price: number
  info: string
  img: any
}
const details = () => {
  const scrollA = useRef(new Animated.Value(0)).current

  const { total, items } = useBasketStore()

  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index
  }))

  const renderItem: ListRenderItem<Meal> = ({ item }) => (
    <Link href={{ pathname: '/(modal)/dish', params: { id: item.id } }} asChild>
      <TouchableOpacity style={sectionItemContainer}>
        <View style={itemDetails}>
          <Text style={itemName}>{item.name}</Text>
          <Text style={itemPrice}>{item.info}</Text>
          <Text style={itemPrice}>${item.price}</Text>
        </View>
        <Image source={item.img} style={dishImg} />
      </TouchableOpacity>
    </Link>
  )

  const {
    bannerContainer,
    banner,
    detailsContainer,
    restaurantName,
    restaurantDescription,
    sectionHeader,
    sectionItemContainer,
    itemDetails,
    itemName,
    itemPrice,
    dishImg,
    footerContainer,
    footerBasket,
    basketTotal,
    footerContainerWrapper
  } = styles

  return (
    <View>
      <TopHeader header="Details" scrollA={scrollA} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={bannerContainer}>
          <Animated.Image
            style={[
              banner,
              {
                transform: [
                  {
                    translateY: scrollA.interpolate({
                      inputRange: [-350, 0, 350, 350 + 1],
                      outputRange: [-350 / 2, 0, 350 * 0.75, 350 * 0.75]
                    })
                  },
                  {
                    scale: scrollA.interpolate({
                      inputRange: [-350, 0, 350, 350 + 1],
                      outputRange: [2, 1, 0.5, 0.5]
                    })
                  }
                ]
              }
            ]}
            source={require('../assets/images/restaurant.jpg')}
          />
        </View>

        <View style={detailsContainer}>
          <Text style={restaurantName}>{restaurant.name}</Text>
          <Text style={restaurantDescription}>
            {restaurant.delivery} ·
            {restaurant.tags.map(
              (tag, index) =>
                `${tag} ${index < restaurant.tags.length - 1 ? '·' : ''}`
            )}
          </Text>
          <Text style={restaurantDescription}>{restaurant.about}</Text>
          <SectionList
            sections={DATA}
            //scrollEnabled = false because the Animated.ScrollView
            scrollEnabled={false}
            keyExtractor={(item, index) => `${item.id + index}`}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={sectionHeader}>{title}</Text>
            )}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  backgroundColor: Colors.lightGrey,
                  marginBottom: 5,
                  marginTop: 5
                }}
              />
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: 2, backgroundColor: Colors.lightGrey }} />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </Animated.ScrollView>
      {items > 0 && (
        <View style={footerContainer}>
          <SafeAreaView edges={['bottom']}>
            <Link href={'/basket'} asChild>
              <TouchableOpacity style={footerContainerWrapper}>
                <Text style={basketTotal}>{items}</Text>
                <Text style={footerBasket}>View Basket</Text>
                <Text
                  style={[
                    basketTotal,
                    { ...basketTotal, backgroundColor: 'none' }
                  ]}
                >
                  ${Math.ceil(total)}
                </Text>
              </TouchableOpacity>
            </Link>
          </SafeAreaView>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden'
  },
  banner: {
    height: 350,
    width: '200%'
  },
  detailsContainer: { padding: 16, gap: 10, backgroundColor: '#fff' },
  restaurantName: { fontSize: 30, fontWeight: 'bold' },
  restaurantDescription: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.mediumDark
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20
  },
  sectionItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    paddingVertical: 8
  },
  itemDetails: { flex: 1, gap: 4 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemPrice: { fontSize: 12, color: Colors.mediumDark },
  dishImg: {
    width: 80,
    height: 80,
    borderRadius: 4,
    elevation: 2,
    shadowColor: Colors.mediumDark,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3
  },
  footerContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 2,
    shadowColor: Colors.mediumDark,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    paddingTop: 10
  },
  footerContainerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: Colors.primary,
    padding: 12,
    margin: 16,
    alignItems: 'center',
    borderRadius: 8
  },
  footerBasket: { color: '#fff', fontWeight: 'bold' },
  basketTotal: {
    color: Colors.mediumDark,
    fontWeight: 'bold',
    backgroundColor: Colors.grey,
    padding: 5,
    borderRadius: 5
  }
})

export default details
