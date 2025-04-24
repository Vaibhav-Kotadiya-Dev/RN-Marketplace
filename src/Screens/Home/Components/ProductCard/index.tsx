import {View, Image, Text} from 'react-native';
import React from 'react';
import {createStyles} from './style';
import {ProductCardProps} from '../../../../Utils/Helper';

const ProductCard = ({details}: ProductCardProps) => {
  // const [loading, setloading] = useState(true);
  const styles = createStyles();

  const getPostTime = (date: string): string => {
    const now = new Date();
    const mainData = new Date(date);
    const seconds = Math.floor((now.getTime() - mainData.getTime()) / 1000);

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return 'Just now';
    }
    if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    if (days < 7) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    if (weeks < 4) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    }
    if (months < 12) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
    return `${years} year${years > 1 ? 's' : ''} ago`;
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: details.imageUrl}} />
      {/* {loading && <View style={styles.loader}><ActivityIndicator color="#6086f4" /></View>} */}
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {details.name}
          </Text>
        </View>
        <View>
          <Text style={styles.price}>${details.price}</Text>
        </View>
        <View style={styles.detailsView}>
          <View style={styles.categoryView}>
            <Text style={styles.category}>{details.category}</Text>
          </View>
          <Text style={styles.category}>{details.distanceInKm} km</Text>
        </View>
        <View>
          <Text style={styles.postedAt}>
            Posted {getPostTime(details.postedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
