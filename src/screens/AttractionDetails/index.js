import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
    const { item } = route?.params || {};

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text onPress={onBack} style={{ margin: 32 }}>BACK</Text>
            <Text>{item?.name}</Text>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
