import { StyleSheet } from 'react-native';

export const createStyles = () => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            borderRadius: 30,
            paddingVertical: 6,
            paddingHorizontal: 25,
            marginTop: 5,
            borderWidth: 1.5,
            borderColor: 'transparent',
            height: 55,
        },
        imageSearch: {
            height: 15,
            width: 15,
            marginRight: 10,
            tintColor: 'gray',
        },
        input: {
            fontWeight: '500',
            color: '#000000',
            width: '93%',
        },
        focusiInput: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            borderRadius: 30,
            paddingVertical: 6,
            paddingHorizontal: 25,
            marginTop: 5,
            borderWidth: 1.5,
            borderColor: '#6086f4',
        },
    });
};
