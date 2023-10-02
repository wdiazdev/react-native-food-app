import { Stack, useNavigation } from 'expo-router'
import CustomHeader from '@/components/CustomHeader'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(index)'
}

export default function RootLayoutNav() {
  const navigation = useNavigation()
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: 'modal',
            headerTitle: 'Filter',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack()
                }}
              >
                <Ionicons
                  name="close-outline"
                  size={28}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="(modal)/locationSearch"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Select Location',
            headerTitleAlign: 'center',
            // headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack()
                }}
              >
                <Ionicons
                  name="close-outline"
                  size={28}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="(modal)/dish"
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack()
                }}
                style={{
                  backgroundColor: '#fff',
                  padding: 6,
                  borderRadius: 50
                }}
              >
                <Ionicons
                  name="close-outline"
                  size={22}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            )
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  )
}
