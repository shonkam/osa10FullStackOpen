import React from 'react';
import { View, Image, StyleSheet, Button, FlatList } from 'react-native';
import Text from './Text';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const myReviews = () => {
  const includeReviews = true;
  let repositoryReviews = useAuthorizedUser(includeReviews);
  console.log('reviews', repositoryReviews);

  if (!repositoryReviews) {
    return (
      <View>
        <Text>Loading reviews...</Text>
      </View>
    );
  }

  const reviewNodes = repositoryReviews
    ? repositoryReviews.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const ReviewItem = ({ review }) => {

    const date = new Date(review.createdAt);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
      <View style={styles.reviewContainer}>
        <View style={styles.reviewScore}>
          <Text style={styles.rating}>{review.rating}</Text>

        </View>
        <View style={styles.reviewInfo}>
          <Text fontWeight="bold" style={{ fontSize: 16 }}>{review.repository.ownerName}/{review.repository.name} </Text>
          <Text style={{ fontSize: 14 }}>{day}.{month}.{year} </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    );
  };


  return (
    <View>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
  },
  button: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  separator: {
    height: 10
  },
  logo: {
    width: 66,
    height: 58,
  },
  pictureNameDesc: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  nameDesc: {
    flexDirection: 'column',
    paddingLeft: 10,
    flex: 1
  },
  language: {
    backgroundColor: '#0366d6',
    color: 'white',
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  bottomFourStats: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  stats: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  reviewContainer: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  reviewInfo: {
    flex: 6,
    flexDirection: 'column'
  },
  reviewScore: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 3
  },
  rating: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#0366d6',
    borderColor: '#0366d6',
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    width: 40,
    alignSelf: 'center',

  }
});

export default myReviews;