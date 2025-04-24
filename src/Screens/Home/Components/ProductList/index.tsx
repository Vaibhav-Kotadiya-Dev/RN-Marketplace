import React, {useEffect, useRef, useState} from 'react';
import {Animated, ActivityIndicator, View, Text} from 'react-native';
import ProductCard from '../ProductCard';
import {api} from '../../../../Services/ProductApi';
import {Product, ProductCategory} from '../../../../Utils/Helper';
import Header from '../../../../Components/Header';
import Search from '../Search';
import FilterTabs from '../FilterTabs';
import SkeletonLoader from '../../../../Components/SkeletonView';
import {createStyles} from './style';

const HEADER = 115;

const CustomParallaxList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState<Product[]>([]);
  const [filterProductList, setFilterProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState<number>();
  const [selectesTab, setSelectesTab] = useState<ProductCategory>('All');
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const isFetchingData = useRef(false);

  const styles = createStyles();

  const headerTranslateHeight = scrollY.interpolate({
    inputRange: [0, HEADER],
    outputRange: [0, -HEADER],
    extrapolate: 'clamp',
  });

  const animatedHeaderHeightStyle = {
    transform: [{translateY: headerTranslateHeight}],
  };

  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const getProductData = async (reset = false) => {
    if (search.trim() && !reset) {
      return;
    }
    if (
      isFetchingData.current ||
      (!reset && totalProducts && productList.length >= totalProducts)
    ) {
      return;
    }

    isFetchingData.current = true;
    setLoading(true);

    try {
      const data = await api.getProducts({
        page: reset ? 1 : page,
        category: selectesTab,
      });

      if (reset) {
        setProductList(data.data);
        setFilterProductList(data.data);
        setTotalProducts(data.pagination.totalItems);
      } else {
        setProductList(prev => [...prev, ...data.data]);
        setFilterProductList(prev => [...prev, ...data.data]);
        if (!totalProducts) {
          setTotalProducts(data.pagination.totalItems);
        }
      }
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      setLoading(false);

      setIsLoading(false);
    }, 1000);
    isFetchingData.current = false;
  };

  const onEndReached = () => {
    if (!loading && productList.length < (totalProducts || 0)) {
      setPage(prev => prev + 1);
    }
  };

  const renderItem = ({item}: {item: Product}) => {
    return <ProductCard details={item} />;
  };

  const handleSearch = (value: any) => {
    setSearch(value);
  };

  useEffect(() => {
    setIsLoading(true);
    setPage(1);
    setTotalProducts(undefined);
    getProductData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectesTab]);

  useEffect(() => {
    if (page > 1) {
      getProductData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (search.trim()) {
      const filterValue = productList?.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilterProductList(filterValue);
    } else {
      setFilterProductList([...productList]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Animated.FlatList
      data={!isLoading ? filterProductList : []}
      keyExtractor={item => item.name}
      renderItem={!isLoading ? renderItem : null}
      numColumns={2}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <Animated.View style={styles.headerContainer}>
          <Animated.View style={[{opacity}]}>
            <Header />
            <Search value={search} onUpdateSetSearch={handleSearch} />
          </Animated.View>
          <Animated.View style={[styles.filterTab, animatedHeaderHeightStyle]}>
            <FilterTabs
              onUpdateSelectesTab={setSelectesTab}
              selectesTab={selectesTab}
            />
          </Animated.View>
        </Animated.View>
      }
      stickyHeaderIndices={[0]}
      ListFooterComponent={
        loading && productList?.length ? (
          <ActivityIndicator style={styles.loader} color="#6086f4" />
        ) : null
      }
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={
        <View style={styles.listEmpty}>
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <View style={styles.noData}>
              <Text style={styles.noDataText}>No data found</Text>
            </View>
          )}
        </View>
      }
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}
    />
  );
};

export default CustomParallaxList;
