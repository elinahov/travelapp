import React from 'react';
import { FlatList, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Gallery = ({ navigation, route }) => {
    const { images } = route?.params || {};

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList style={{ paddingHorizontal: 24, marginBottom: 24 }} data={images} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )} />

                <TouchableOpacity onPress={onBack} style={styles.backContainer}>
                    <Image source={require('../../assets/back.png')} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Gallery);
