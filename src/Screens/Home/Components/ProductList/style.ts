import { StyleSheet } from 'react-native';

export const createStyles = () => {
    return StyleSheet.create({
        container: {
            marginTop: 10,
            flex: 1,
        },
        filterTab: {
            backgroundColor: 'white',
            zIndex: 10,
            height: 60,
        },
        loader: {
            margin: 16,
        },
        headerContainer: {
            zIndex: 10,
        },
        listEmpty: {
            flex: 1,
        },
        noData: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            flex: 1,
        },
        listContainer: {
            minHeight: '100%',
        },
        noDataText: {
            fontWeight: '500',
            fontSize: 15,
        },
    });
};
