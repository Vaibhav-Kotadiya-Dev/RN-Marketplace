import {View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {createStyles} from './style';

const SkeletonLoader = () => {
  const styles = createStyles();

  return (
    <SkeletonPlaceholder borderRadius={12}>
      <View style={styles.container}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={styles.subContainer}>
            <View style={styles.box} />
          </View>
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonLoader;
