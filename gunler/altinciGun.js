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

const AltinciGun = ({ navigation }) => {
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
                        source={require('../resimler/alti.jpg')}

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
                            <TouchableOpacity onPress={() => navigation.navigate("BesinciGun")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/bes.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>5. Gün</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("YedinciGun")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/yedi.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>7. Gün</Text></B>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.TextView}>
                        <Text style={styles.title}>
                            6. Gün Diyet Tarifi
                        </Text>
                        <Text style={styles.footer}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.sum}>

                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', color: "#003049", }}>Sabah Kahvaltı</Text>{"\n"}
                            2 domates ve 1 yumurta ile hazırlanmış menemen: <B>108 kalori</B>{"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B>{"\n"}
                            Yarım dilim az yağlı beyaz peynir: <B>30 kalori</B> {"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            3 diyet bisküvi: <B>50 kalori</B> {"\n"}
                            1/2 bardak süt: <B>60 kalori</B> {"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003566" }}>Öğle Yemeği</Text>{"\n"}
                            4 adet ızgara köfte: <B>240 kalori</B> {"\n"}
                            1 bardak ayran: <B>76 kalori</B> {"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B> {"\n"}
                            Salata (domates, salatalık, soğan, marul, nar ekşisi ya da limon): <B>40 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            1 elma: <B>60 kalori</B>{"\n"}
                            Yarım bardak süt: <B>60 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003049" }}>Akşam Yemeği</Text>{"\n"}
                            1 porsiyon pırasa yemeği: <B>180 kalori</B>{"\n"}
                            1 bardak ayran: <B>76 kalori</B>{"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B>{"\n"}
                            Toplam akşam yemeği: <B>311 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            Yarım bardak tarçınlı süt: <B>60 kalori</B>
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
export default AltinciGun

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