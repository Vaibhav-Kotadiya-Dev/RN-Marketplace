import { StyleSheet } from 'react-native';

export const createStyles = () => {
  return StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    subContainer: {
      width: '48%',
      marginBottom: 20,
      borderRadius: 12,
      overflow: 'hidden',
    },
    box: { height: 230, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  });
};
