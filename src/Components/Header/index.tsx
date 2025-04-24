import {View, Image} from 'react-native';
import React from 'react';
import {createStyles} from './style';

const Header = () => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imageLogo}
          source={require('../../Assets/Images/logo.jpg')}
        />
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageBellView}>
          <Image
            style={styles.imageBell}
            source={require('../../Assets/Images/bell.png')}
          />
        </View>
        <View>
          <View style={styles.imageUserView}>
            <Image
              style={styles.imageUser}
              source={require('../../Assets/Images/user.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
