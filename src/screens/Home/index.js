import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Title from '../../components/Title';

const Home = () => {
    return (
        <SafeAreaView>
            <View>
                <Title />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);
