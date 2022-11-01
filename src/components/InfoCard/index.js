import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const InfoCard = ({ icon, text, style }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.title, style]}>{text}</Text>
        </View>
    );
};

export default React.memo(InfoCard);
