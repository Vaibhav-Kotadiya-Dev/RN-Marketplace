import {View, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {createStyles} from './style';
import {SearchProps} from '../../../../Utils/Helper';

const Search: React.FC<SearchProps> = ({value, onUpdateSetSearch}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const styles = createStyles();

  const handleInputFocus = (val: boolean) => {
    setIsInputFocused(val);
  };

  return (
    <View style={isInputFocused ? styles.focusiInput : styles.container}>
      <Image
        style={styles.imageSearch}
        source={require('../../../../Assets/Images/search.png')}
      />
      <TextInput
        placeholder="Search products..."
        value={value}
        onChangeText={text => onUpdateSetSearch(text)}
        style={styles.input}
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        placeholderTextColor="#000000"
      />
    </View>
  );
};

export default Search;
