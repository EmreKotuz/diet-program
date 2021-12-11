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

const BirinciGun = ({ navigation }) => {
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
                        source={require('../resimler/bir.jpg')}
                    />
                    <View style={styles.TextView}>
                        <Text style={styles.title}>
                            0 - 1. Gün Diyet Tarifi
                        </Text>
                        <Text style={styles.footer}>
                            <Text style={{ fontWeight: 'bold', color: "#003049", }}>Sabah Kahvaltı</Text>{"\n"}
                            1 dilim az yağlı beyaz peynir: <B>60 kalori</B>{"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B>{"\n"}
                            1 adet haşlanmış yumurta: <B>80 kalori</B>{"\n"}
                            Domates, salatalık: <B>25 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            3 diyet bisküvi: <B>50 kalori</B>{"\n"}
                            1/2 bardak süt: <B>60 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003049" }}>Öğle Yemeği</Text>{"\n"}
                            Ton Balıklı Salata: <B>150 kalori</B>{"\n"}
                            2 dilim kepek ekmek: <B>110 kalori</B>{"\n"}
                            1 bardak tuzsuz ayran: <B>76 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            1 elma: <B>60 kalori</B>{"\n"}
                            Yarım bardak süt: <B>60 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003049" }}>Akşam Yemeği</Text>{"\n"}
                            1 porsiyon etsiz sebze yemeği: <B>200 kalori</B>{"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B>{"\n"}
                            1 kase yoğurt: <B>120 kalori</B>{"\n"}
                            Yağsız Salata (domates, salatalık, marul, soğan, nar ekşisi ya da limon): <B>40 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", textDecorationLine: 'underline' }}>Ara Öğün</Text>{"\n"}
                            Yarım bardak tarçınlı süt: <B>60 kalori</B>{"\n"}

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
export default BirinciGun

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