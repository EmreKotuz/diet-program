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

const IkinciHafta = ({ navigation }) => {
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
                        source={require('../resimler/iki.jpg')}
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
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>1. G??n</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("UcuncuHafta")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/uc.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>3. G??n</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("DorduncuHafta")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/Dort.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>4. G??n</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("BesinciGun")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/bes.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>5. G??n</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AltinciGun")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/alti.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>6. G??n</Text></B>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("YedinciGun")}>
                                <Image style={{ width: 90, height: 90, marginHorizontal: 10, borderColor: 'pink', borderWidth: 2 }} source={require('../resimler/yedi.jpg')} />
                                <B><Text style={{ textAlign: 'center', color: '#e07a5f', alignItems: 'center' }}>7. G??n</Text></B>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.TextView}>
                        <Text style={styles.title}>
                            2. G??n Diyet Tarifi
                        </Text>
                        <Text style={styles.footer}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.sum}>

                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', color: "#003049", }}>Sabah Kahvalt??</Text>{"\n"}
                            1 dilim az ya??l?? beyaz peynir: <B>60 kalori</B>{"\n"}
                            1 dilim kepek ekmek: <B>55 kalori</B>{"\n"}
                            5 adet zeytin:<B>40 kalori</B>{"\n"}
                            Domates, Salatal??k: <B>25 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15, textDecorationLine: 'underline' }}>Ara ??????n</Text>{"\n"}
                            10 tane tuzsuz badem: <B>60 kalori</B>{"\n"}
                            1 ka????k kuru ??z??m: <B>50 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003049" }}>????le Yeme??i</Text>{"\n"}
                            2 tane etli biber dolmas??: <B>250 kalori</B>{"\n"}
                            1 kase kadar yo??urt: <B>120 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15, textDecorationLine: 'underline' }}>Ara ??????n</Text>{"\n"}
                            3 adet kuru kay??s??: <B>54 kalori</B>{"\n"}
                            3 adet ceviz i??i: <B>75 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "#003049" }}>Ak??am Yeme??i</Text>{"\n"}
                            1 kep??e ??orba: <B>57 kalori</B> {"\n"}
                            8 yemek ka???????? sebze yeme??i: <B>86 kalori</B> {"\n"}
                            ?? kase yo??urt (kaymaks??z) <B>60 kalori</B>  {"\n"}
                            Ya??s??z Salata (domates, salatal??k, marul, so??an, nar ek??isi ya da limon): <B>40 kalori</B>{"\n"}
                            2 ince dilim ekmek (kepekli): <B>108 kalori</B>{"\n"}{"\n"}

                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 15, textDecorationLine: 'underline' }}>Ara ??????n</Text>{"\n"}
                            1/2 bardak tar????nl?? s??t: <B>60 kalori</B>
                        </Text>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: '#06d6a0', height: 50, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("Home")}>
                                <Text style={{ fontSize: 23, color: 'white', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Ana Sayfaya D??n</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>
        </>
    );
};
export default IkinciHafta

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