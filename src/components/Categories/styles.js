import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        paddingVertical: 2,
    },
    selectedItem: {
        color: '#000000'
    },
    itemContainer: {
        marginRight: 17,
        marginBottom: 14,
    },
    selectedItemContainer: {
        borderBottomColor: '#4681A3',
        borderBottomWidth: 1,
    }
});

export default styles;
