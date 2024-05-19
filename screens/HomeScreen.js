import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView} from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { Card } from '@rneui/themed';
import Category from '../components/Category';
import CardCar from '../components/CardCar';


export default function HomeScreen() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Svg height="100%" width="100%" style={styles.background}>
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <Stop offset="0%" stopColor="#447eff" />
                        <Stop offset="100%" stopColor="#773bff" />
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="180" fill="url(#grad)" />
            </Svg>
            <View style={styles.header}>
           
          <View>
            <View style={styles.avatar}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.avatarImg} />
               
            </View>
          
          </View>
          <View>
           <Text style={styles.headerTitle}>
             Xin chào,
             Nguyễn Văn A
           </Text>
         </View>
        </View>
            
            <View style={styles.content}>
                <Card containerStyle={styles.card}>
                    <View style={styles.titleBackground}>
                        <Card.Title style={styles.title}>XE TỰ LÁI</Card.Title>
                    </View>
                    <View style={styles.dateFrom}>
                        <Text style={styles.fonts_1} h1>
                            Từ ngày
                        </Text>
                        <Text style={styles.fonts_2} h2>
                            h2 Heading
                        </Text>
                    </View>
                    <View style={styles.dateTo}>
                        <Text style={styles.fonts_1} h1>
                            Đến ngày
                        </Text>
                        <Text style={styles.fonts_2} h2>
                            h2 Heading
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Tìm kiếm</Text>
                    </View>
                </Card>
            </View>
            <View style={styles.category}>
                <Category />
            </View>
            <Text style={styles.titleList}>Xe dành cho bạn</Text>
            <View style={styles.listCar}>
                <CardCar />
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: 60,
        marginLeft: 40
      },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
      },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
   
    content: {
        position: 'absolute',
        top: 110,
        left: 5,
    },
    card: {
        marginTop: 10,
        borderRadius: 30,
        width: 350,
        height: 320,
        padding: 0,
        borderWidth: 1,
    },
    titleBackground: {
        backgroundColor: '#9EA2FE',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        marginTop: 16,
        fontWeight: 'bold'
    },
    dateFrom: {
        marginTop: 15
    },
    fonts_1: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 40,
        color: '#ACACAC',
        fontWeight: 'bold'
    },
    fonts_2: {
        marginTop: 5,
        marginBottom: 20,
        marginLeft: 40,
        color: 'black',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    button: {
        backgroundColor: '#773BFF',
        height: 40,
        width: 249,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 20,
        borderRadius: 30
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 10,
        color: 'white'
    },
    category: {
        marginTop: 360,
        marginLeft: 15
    },
    listCar: {
        marginTop: 5,
        flexDirection: 'row', 
        height: 380
    },
    titleList: {
        marginTop: 30,
        marginLeft: 30, 
        fontSize: 24,
        fontWeight: 'bold'
    },
    avatar: {
        position: 'relative',
      },
      avatarImg: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        marginRight: 10
      },
      avatarNotification: {
        position: 'absolute',
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: '#fff',
        top: 0,
        right: -2,
        width: 14,
        height: 14,
        backgroundColor: '#d1d5db',
      },
});

