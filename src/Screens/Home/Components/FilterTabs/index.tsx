import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {createStyles} from './style';
import Constants from '../../../../Utils/Constants';
import {ProductCategory} from '../../../../Utils/Helper';

type FilterTabsProps = {
  onUpdateSelectesTab: (tab: ProductCategory) => void;
  selectesTab: ProductCategory;
};

const FilterTabs: React.FC<FilterTabsProps> = ({
  onUpdateSelectesTab,
  selectesTab,
}) => {
  const styles = createStyles();

  const handleSelectedTab = (t: ProductCategory) => {
    onUpdateSelectesTab(t);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabList}>
        {Constants.filterBtns.map((item, i) => {
          return (
            <TouchableOpacity
              onPress={() => handleSelectedTab(item.name)}
              key={i}
              style={
                selectesTab === item.name ? styles.activeBtns : styles.btns
              }>
              <Text
                style={
                  selectesTab === item.name ? styles.activeName : styles.name
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FilterTabs;
