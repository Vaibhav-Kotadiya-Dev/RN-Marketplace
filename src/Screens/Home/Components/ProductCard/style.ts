import { StyleSheet } from 'react-native';

export const createStyles = () => {
    return StyleSheet.create({
        container: {
            borderRadius: 20,
            backgroundColor: '#ffffff',
            width: '48%',
            marginBottom: 12,
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: '#d3d3d3',
        },
        loader: {
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            height: 150,
            width: '100%',
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
        },
        detailsContainer: {
            padding: 10,
        },
        name: {
            fontWeight: '600',
            color: '#000000',
            fontSize: 16,
        },
        price: {
            color: '#6086f4',
            fontWeight: '900',
            fontSize: 16,
            marginTop: 5,
        },
        detailsView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        categoryView: {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            padding: 8,
            paddingVertical: 4,
            borderRadius: 15,
            marginTop: 5,
        },
        category: {
            color: 'gray',
            fontWeight: '400',
        },
        postedAt: {
            color: '#b0b0b0',
            fontWeight: '500',
            marginTop: 5,
        },
    });
};
