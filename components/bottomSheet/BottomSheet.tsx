import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal
} from '@gorhom/bottom-sheet'

import Colors from '@/constants/Colors'
import BottonSheetBtn from './BottonSheetBtn'
import BottomSheetLocationItem from './BottomSheetLocationItem'
import FullButton from '../FullButton'

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const [selectedOption, setSelectedOption] = useState('Delivery')

  const handleToggle = (option: string) => {
    setSelectedOption(option)
  }

  const snapPoints = useMemo(() => ['50%'], [])

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  )
  const { dismiss } = useBottomSheetModal()

  const { container, toggleContainer } = styles
  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}
      handleIndicatorStyle={{ display: 'none' }}
    >
      <View style={container}>
        <View style={toggleContainer}>
          <BottonSheetBtn
            handleToggle={() => handleToggle('Delivery')}
            isToggle={selectedOption === 'Delivery'}
            text="Delivery"
          />
          <BottonSheetBtn
            handleToggle={() => handleToggle('Pickup')}
            isToggle={selectedOption === 'Pickup'}
            text="Pickup"
          />
        </View>
        <BottomSheetLocationItem
          subheaderText={'Your Location'}
          btnText={'Current Location'}
        />
        <BottomSheetLocationItem
          subheaderText={'Arrival Time'}
          btnText={'Now'}
        />
        <FullButton handlePress={() => dismiss()} text={'Confirm'} />
      </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  container: { flex: 1 },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 30
  }
})

export default BottomSheet
