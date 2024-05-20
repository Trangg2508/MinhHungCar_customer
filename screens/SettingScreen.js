import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function SettingScreen() {
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.info}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.infoAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.infoAvatar} />
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.infoName}>Nguyễn Văn A</Text>
            <Text style={styles.infoAddress}>
              abc123@gmail.com
            </Text>
          </View>
        </View>

          <View style={styles.section}>

            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <Image style={styles.icon} source={require('../assets/account.png')}/>
                  <Text style={styles.rowLabel}>Tài khoản của tôi</Text>

                  <View style={styles.rowSpacer} />

                  <Image style={styles.rowValue} source={require('../assets/right.png')}/>

                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                    <Image style={styles.icon} source={require('../assets/history.png')}/>
                  <Text style={styles.rowLabel}>Lịch sử thuê xe</Text>

                  <View style={styles.rowSpacer} />

                  <Image style={styles.rowValue} source={require('../assets/right.png')}/>

                  <FeatherIcon
                    color="#bcbcbc"
                    name="chevron-right"
                    size={19} />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/chat.png')}/>
                  <Text style={styles.rowLabel}>Chat với admin</Text>

                  <View style={styles.rowSpacer} />

                  <Image style={styles.rowValue} source={require('../assets/right.png')}/>
                </View>
              </View>

              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/heart.png')}/>
                  <Text style={styles.rowLabel}>Xe yêu thích</Text>

                  <View style={styles.rowSpacer} />

                  <Image style={styles.rowValue} source={require('../assets/right.png')}/>
                </View>
              </View>

              <View style={[styles.rowWrapper, styles.rowLast]}>
                <View style={styles.row}>
                <Image style={styles.icon} source={require('../assets/bank_card.png')}/>
                  <Text style={styles.rowLabel}>Thông tin thanh toán</Text>

                  <View style={styles.rowSpacer} />

                  <Image style={styles.rowValue} source={require('../assets/right.png')}/>
                </View>
              </View>

              
            </View>
          </View>

          

          <View style={styles.section}>
            <View style={styles.sectionBody}>
              <View
                style={[
                  styles.rowWrapper,
                  styles.rowFirst,
                  styles.rowLast,
                  { alignItems: 'center' },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <Text style={[styles.rowLabel, styles.rowLabelLogout]}>
                    Log Out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.contentFooter}>App Version 2.24 #50491</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
  },
  /** Info */
  info: {
    padding: 24,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  infoAvatarWrapper: {
    position: 'relative',
  },
  infoAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  infoName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  infoAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  /** Content */
  content: {
    paddingHorizontal: 16,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a69f9f',
  },
  /** Section */
  section: {
    paddingVertical: 1,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginVertical: 14
  },
  /** Profile */
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileBody: {
    marginRight: 'auto',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  /** Row */
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    width: 15,
    height: 15,
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowLabelLogout: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#dc2626',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  }
});