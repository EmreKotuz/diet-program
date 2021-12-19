/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Animated,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const BANNER_H = 460;
const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

const BesinciGun = ({ navigation }) => {
    const scrollA = useRef(new Animated.Value(0)).current;
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true }
                )}
                style={styles.scrollView}
            >
                <View style={styles.container}>
                    <Animated.Image
                        style={styles.banner(scrollA)}
                        width="100%"
                        height={BANNER_H}
                        source={require('../resimler/bes.jpg')}

                    />
                    <View style={{ flex: 3 }}>
                        <ScrollView style={{ marginTop: 20, marginBottom: 30 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => navigation.navigate("Endeks")}>
                                <Image style={{ width: 90, height: 90, borderRadius: 10, marginHorizontal: 10, borderColor: '#023e8a', borderWidth: 2 }} source={require('../resimler/dietHesap.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#012a4a', alignItems: 'center' }}>indeks H.</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("BirinciHafta")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/bir.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>1. Gün</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("IkinciHafta")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/iki.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>2. Gün</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("UcuncuHafta")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/uc.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>3. Gün</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("DorduncuHafta")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/Dort.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>4. Gün</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AltinciGun")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/alti.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>6. Gün</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("YedinciGun")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/yedi.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>7. Gün</Text></B>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.TextView}>
                        <Text style={styles.title}>
                            5. Gün Diyet Tarifi
                        </Text>
                        <Text style={styles.footer}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.sum}>

                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', color: "#003049", }}>Sabah Kahvaltı</Text>{"\n"}
                            Çay veya kahve (şekersiz): <B>0-8 Kalori</B> {"\n"}
                            1 kibrit kutusu beyaz peynir (az yağlı): <B>93 kalori</B> {"\n"}
                            salatalık, domates: <B>25 kalori</B>{"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            3 adet kuru kayısı: <B>54 kalori</B>{"\n"}
                            2 adet ceviz: <B>45 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003049" }}>Öğle Yemeği</Text>{"\n"}
                            1 kase yoğurt (kaymaksız) <B>120 kalori</B>  {"\n"}
                            8 yemek kaşığı sebze yemeği: <B>86 kalori</B> {"\n"}
                            salata (yağsız): <B>40 kalori</B> {"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            5-6 adet badem:45 kalori{"\n"}
                            1 elma: <B>60 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003049" }}>Akşam Yemeği</Text>{"\n"}
                            60 g tavuk (ızgara veya haşlanmış): <B>66 kalori</B> {"\n"}
                            1 küçük kutu ayran, <B>75 kalori</B>{"\n"}
                            salata (yağsız): <B>63 kalori</B>  {"\n"}
                            1 ince dilim ekmek (kepekli): <B>54 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            1/2 bardak tarçınlı süt: <B>60 kalori</B>
                        </Text>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: '#06d6a0', height: 50, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("Home")}>
                                <Text style={{ fontSize: 23, color: 'white', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Ana Sayfaya Dön</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>
        </>
    );
};
export default BesinciGun

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: '800',
        lineHeight: 26,
        padding: 20,
        paddingBottom: 0,

    },
    TextView: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: -30,

    },
    banner: scrollA => ({
        height: BANNER_H,
        width: "300%",
        transform: [{
            translateY: scrollA,
        },
        {
            scale: scrollA.interpolate({
                inputRange: [-BANNER_H, 5, BANNER_H, BANNER_H + 2],
                outputRange: [3, 1, 1.5, 3]
            })
        }
        ]
    }),
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        padding: 20,
        marginBottom: 100,

    },
})