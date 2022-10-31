import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        padding: 4,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 15,
        marginBottom: 12,
    },
    image: {
        width: (width - 96) / 2,
        borderRadius: 15,
        height: 120,
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 12,
        marginLeft: 6,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '300',
        color: 'rgba(0,0,0,0.5)',
    },
    icon: {
        width: 10,
        height: 10,
        marginRight: 6,
    },
    row: {
        marginBottom: 12,
        marginLeft: 6,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;
