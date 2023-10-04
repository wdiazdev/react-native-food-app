import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import useBasketStore from '@/store/basketStore'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import ConfettiCannon from 'react-native-confetti-cannon'
import { Link } from 'expo-router'
import SwipeableRow from '@/components/SwipeableRow'

const Basket = () => {
  const [order, setOrder] = useState<boolean>(false)
  const { products, total, clearCart, reduceProduct } = useBasketStore()

  const FEE = {
    service: 2.99,
    delivery: 4.99
  }

  const handleCheckout = () => {
    setOrder(true)
    clearCart()
  }

  const {
    rowContainer,
    qty,
    itemName,
    itemTotal,
    orderDetailsContainer,
    subtotal,
    footerBtn,
    footerContainer,
    footerText,
    orderBtn
  } = styles
  return (
    <>
      {order && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fallSpeed={2500}
          fadeOut={true}
          autoStart={true}
        />
      )}
      {order && (
        <View style={{ marginTop: '60%', padding: 20, alignItems: 'center' }}>
          <Text
            style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}
          >
            Thank you for your order!
          </Text>
          <Link href={'/'} asChild>
            <TouchableOpacity style={orderBtn}>
              <Text style={footerText}>New order</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
      {!order && (
        <>
          <FlatList
            ListHeaderComponent={
              <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 14 }}>
                Items
              </Text>
            }
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: Colors.grey }} />
            )}
            data={products}
            renderItem={({ item }) => (
              <SwipeableRow onDelete={() => reduceProduct(item)}>
                <View style={rowContainer}>
                  <Text style={qty}>{item.quantity}x</Text>
                  <Text style={itemName}>{item.name}</Text>

                  <Text style={itemTotal}>
                    {(item.quantity * item.price).toFixed(2)}
                  </Text>
                </View>
              </SwipeableRow>
            )}
            keyExtractor={(item) => item.name}
            ListFooterComponent={
              <View>
                <View style={{ height: 1, backgroundColor: Colors.grey }} />
                <View style={orderDetailsContainer}>
                  <Text
                    style={[subtotal, { ...subtotal, color: Colors.medium }]}
                  >
                    Subtotal
                  </Text>
                  <Text style={subtotal}>${total.toFixed(2)}</Text>
                </View>
                <View style={orderDetailsContainer}>
                  <Text
                    style={[subtotal, { ...subtotal, color: Colors.medium }]}
                  >
                    Service fee
                  </Text>
                  <Text style={subtotal}>${FEE.service}</Text>
                </View>
                <View style={orderDetailsContainer}>
                  <Text
                    style={[subtotal, { ...subtotal, color: Colors.medium }]}
                  >
                    Delivery fee
                  </Text>
                  <Text style={subtotal}>${FEE.delivery}</Text>
                </View>
                <View style={orderDetailsContainer}>
                  <Text
                    style={[
                      subtotal,
                      { ...subtotal, color: Colors.medium, fontSize: 18 }
                    ]}
                  >
                    Total
                  </Text>
                  <Text style={[subtotal, { ...subtotal, fontSize: 18 }]}>
                    ${(FEE.delivery + FEE.service + total).toFixed(2)}
                  </Text>
                </View>
              </View>
            }
          />
          <View style={footerContainer}>
            <SafeAreaView edges={['bottom']}>
              <TouchableOpacity onPress={handleCheckout} style={footerBtn}>
                <Text style={footerText}>Order now</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </>
      )}
    </>
  )
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    gap: 20
  },
  qty: { color: Colors.primary, fontWeight: 'bold' },
  itemName: { flex: 1, fontWeight: 'bold' },
  itemTotal: { fontWeight: 'bold' },
  orderDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff'
  },
  subtotal: { fontWeight: 'bold' },
  footerContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
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
  footerBtn: {
    flex: 1,
    height: 56,
    backgroundColor: Colors.primary,
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  footerText: { color: '#fff', fontWeight: 'bold' },
  orderBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: 250,
    height: 50,
    justifyContent: 'center',
    marginTop: 20
  }
})

export default Basket
