import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, { useLayoutEffect, useRef } from 'react'
import { useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import TopHeader from '@/components/detailsPage/TopHeader'

const details = () => {
  const scrollA = useRef(new Animated.Value(0)).current

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: Colors.primary,
      headerBackVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={detailsBtn}
        >
          <Ionicons name={'arrow-back'} size={22} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={iconsRightContainer}>
          <TouchableOpacity style={detailsBtn}>
            <Ionicons name={'share-outline'} size={22} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={detailsBtn}>
            <Ionicons name={'ios-search'} size={22} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      )
    })
  })

  const { detailsBtn, iconsRightContainer, bannerContainer, banner } = styles

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

        <Text style={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          nulla dolores delectus! Numquam, excepturi! Maiores, asperiores quod
          nesciunt rem possimus similique, nostrum saepe officiis vitae magnam
          laborum in! Hic, explicabo! Impedit omnis aspernatur a consectetur
          maxime, tenetur est voluptatem ex iure ab sequi repudiandae facere at.
          Quo dolores nesciunt deleniti dolorem optio architecto veritatis magni
          officia ipsam corporis, adipisci delectus! Aperiam facilis rerum
          exercitationem fuga minima molestiae repudiandae eos ipsum suscipit
          optio, voluptate, asperiores tempora eaque tempore! Saepe omnis
          aliquid consectetur, ipsum dolorem, voluptates laboriosam ratione
          laborum, nesciunt voluptatibus qui. Quia totam ullam ratione, omnis,
          nulla est ipsa iste molestiae distinctio sed amet. Est nemo id eos
          sapiente reiciendis, quidem laboriosam temporibus! Alias voluptate
          odio saepe quasi placeat vero distinctio! Maiores cum corporis debitis
          perspiciatis placeat reprehenderit delectus aliquam quisquam sapiente
          labore, accusamus voluptate nostrum corrupti officia minus, ipsa harum
          qui animi commodi explicabo optio quaerat, quia odit? Id, fuga. Earum
          amet fugit deserunt magnam accusantium dolorem libero exercitationem
          expedita obcaecati accusamus delectus nulla, quia dolor ad corporis
          quas ipsa! Illo neque beatae explicabo iusto dicta vel quibusdam
          reiciendis soluta! Dolor, voluptatem molestias harum dolorem nemo
          inventore nobis et sequi beatae nesciunt excepturi magni a blanditiis
          quia facilis iste quod, natus libero! Dolorum, commodi non? Facere,
          eveniet repudiandae. Eaque, velit! Saepe dignissimos, maiores quas
          accusamus obcaecati ut. Nam eos repudiandae fuga expedita doloribus in
          incidunt odio molestiae neque pariatur, rem ipsam facere veniam et
          cupiditate dicta necessitatibus ea minus soluta? Quos, laudantium. Quo
          cupiditate consequuntur atque labore amet repellat delectus sit nihil
          impedit laborum harum fugiat, sed cum animi hic. Nam autem sapiente
          error officia necessitatibus! Praesentium suscipit perferendis cumque?
          Ratione assumenda fugiat in illum dignissimos soluta laboriosam
          suscipit id sint? Molestias delectus quae inventore quas, itaque
          doloribus dolorum eligendi neque voluptates natus quam id repellendus
          fugit assumenda ratione? Aspernatur. Magni iusto aspernatur deserunt
          consequuntur illum quia tenetur ab commodi, suscipit hic tempore
          labore optio culpa. Quae eveniet repellat porro, optio, repudiandae
          reprehenderit pariatur sunt, commodi atque quasi quisquam fugiat!
          Beatae harum voluptate minus tempora quam consectetur, veniam sapiente
          quis itaque quos! Reiciendis, aspernatur sint consequuntur voluptas
          minus minima blanditiis praesentium nesciunt nemo aliquid deleniti
          maxime labore veniam voluptates eligendi. Ducimus ipsa minus harum
          perferendis sit eius ullam dolore tempore unde explicabo. Ab quos
          cumque labore ad quia neque, deleniti minus omnis numquam totam,
          dolorem enim sunt quae distinctio delectus. Error praesentium
          molestias quasi voluptate et? Magni perspiciatis asperiores similique,
          illum voluptas esse officia obcaecati quod quidem modi ipsam sint
          fugiat vel aut. Velit perspiciatis molestiae quibusdam voluptatem rem
          ipsum. Velit nam quas, quae molestias magnam maiores soluta dolores
          saepe recusandae veritatis aut? Nobis pariatur voluptas sequi repellat
          ea assumenda? Dolores velit quia et enim qui a incidunt est quibusdam?
          Odio, excepturi necessitatibus repellat architecto nobis modi, natus
          similique nulla, laudantium odit qui dolor neque sed quasi aliquam
          pariatur? Perspiciatis praesentium quaerat natus porro deserunt,
          tempora dignissimos minima debitis repudiandae. Facilis atque voluptas
          dolores pariatur provident aperiam vitae possimus iure ipsum
          voluptatum nam labore dolore explicabo, doloremque nulla praesentium a
          fugit expedita minima quibusdam nesciunt, ducimus sunt veritatis
          laboriosam. Earum. Ullam consectetur sequi nostrum! Et, ipsa mollitia
          iusto, quis, provident inventore numquam distinctio voluptas ducimus
          dicta veniam doloremque. Odit ducimus consequatur officia eveniet
          sapiente eius nesciunt mollitia aliquam natus? Ab. Deserunt,
          voluptatibus alias odit mollitia totam eaque tempora officiis
          reiciendis veniam natus quas ea voluptas cupiditate quam quod officia
          magni quos autem modi numquam quo corporis earum, odio at.
          Consequuntur? Odit modi magni recusandae ex corporis blanditiis
          consequatur, impedit itaque ea ullam ad accusantium nostrum molestias
          quia quasi eos explicabo in consequuntur, sapiente nisi voluptatum
          quos iste animi expedita! Optio.
        </Text>
      </Animated.ScrollView>
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
})

export default details
