import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1623659248894-1a0272243054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2405&q=80',
    name: 'Audi R8',
    price: 158600,
    hp: 562,
    acceleration: 3.2,
    miles: 24000,
    location: 'Seattle, WA',
    date: new Date('2022-10-20'),
  },
  {
    img: 'https://images.unsplash.com/photo-1590656364826-5f13b8e32cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
    name: 'Nissan GTR',
    price: 225500,
    hp: 598,
    acceleration: 3.7,
    miles: 13000,
    location: 'Richmond, VA',
    date: new Date('2022-11-22'),
  },
  {
    img: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    name: 'Porsche 911',
    price: 160100,
    hp: 640,
    acceleration: 3.5,
    miles: 6000,
    location: 'San Diego, CA',
    date: new Date('2022-11-23'),
  },
];

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.75, 400);

export default function CardCar() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail');
      }}>
      <View style={styles.card}>
        <Image
          alt=""
          resizeMode="cover"
          style={styles.cardImg}
          source={{ uri: item.img }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          {/* <Text style={styles.cardPrice}>
            ${item.price.toLocaleString('en-US')}
          </Text> */}
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>
              {item.location}
            </Text>
            <Text style={styles.cardFooterText}>
              {/* {item.date.toLocaleDateString('en-US', {
                day: 'numeric',
                year: 'numeric',
                month: 'short',
              })} */}
              {item.price.toLocaleString('en-US')} đ
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 0,
  },
  scrollViewContent: {
    paddingHorizontal: 18,
  },
  card: {
    width: CARD_WIDTH,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardImg: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardBody: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#2d2d2d',
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#444',
  },
  cardFooter: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: '#e9e9e9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardFooterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#909090',
  },
});