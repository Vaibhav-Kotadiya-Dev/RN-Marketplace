import { StyleSheet } from 'react-native';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    imageLogo: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '22%',
    },
    imageBellView: {
      padding: 6,
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderRadius: 30,
    },
    imageBell: {
      height: 22,
      width: 22,

    },
    imageUserView: {
      padding: 8,
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderRadius: 30,
    },
    imageUser: {
      height: 18,
      width: 18,
    },
  });
};
