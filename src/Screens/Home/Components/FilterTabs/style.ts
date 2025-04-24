import { StyleSheet } from 'react-native';

export const createStyles = () => {
    return StyleSheet.create({
        container: {
            marginTop: 10,
            flexDirection: 'row',
        },
        tabList: {
            gap: 15,
        },
        btns: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            padding: 8,
            paddingHorizontal: 15,
            borderRadius: 15,
        },
        activeBtns: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#6086f4',
            padding: 8,
            paddingHorizontal: 15,
            borderRadius: 15,
            color: '#ffffff',
        },
        name: {
            fontWeight: '500',
            color: '#000000',
        },
        activeName: {
            color: '#ffffff',
            fontWeight: '500',
        },
        imageLogo: {
            height: 20,
            width: 20,
        },
    });
};
