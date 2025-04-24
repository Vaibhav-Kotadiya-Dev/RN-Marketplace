import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {createStyles} from './style';
import ProductList from './Components/ProductList';

const Home = () => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <ProductList />
    </View>
  );
};

export default Home;
