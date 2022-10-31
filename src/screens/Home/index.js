import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text='Where do' style={{ fontWeight: 'normal' }} />
                <Title text='you want to go' />

                <Title text='Explore Attractions' style={styles.subtitle} />

                <Categories
                    selectedCategory={selectedCategory}
                    onCategoryPress={setSelectedCategory}
                    categories={['All', 'Popular', 'Historical', 'Random', 'Trending', 'Exclusive', 'Others']}
                />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);
