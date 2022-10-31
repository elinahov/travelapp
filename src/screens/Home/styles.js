import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle: {
        fontSize: 20,
        color: '#000000',
        marginTop: 40,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
    }
});

export default styles;
