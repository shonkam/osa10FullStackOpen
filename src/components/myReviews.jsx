import React from 'react';
import { View, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import Text from './Text';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import { useHistory } from "react-router-native";
import useDeleteReview from '../hooks/useDeleteReview';

const myReviews = () => {
  const [deleteReviewHook] = useDeleteReview();
  const includeReviews = true;
  let repositoryReviews = useAuthorizedUser(includeReviews);

  let history = useHistory();
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

  const ReviewItem = ({ review }) => {

    const date = new Date(review.createdAt);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const openRepo = () => {
      history.push(`/repository/${review.repository.id}`);
    };
    const deleteReview = () => {

      Alert.alert("Delete review", "Are you sure you want to delete this review?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "DELETE", onPress: removeReview }
        ]);
    };

    const removeReview = () => {
      try {
        deleteReviewHook(review.id);
        console.log('Successfully removed review');
        history.push('/myReviews');
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <View>
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
        <View style={styles.buttonContainer}>
          <Button
            onPress={openRepo}
            title={'View repository'}
          />
          <Button
            color='red'
            onPress={deleteReview}
            title={'Delete review'}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      {reviewNodes.map(item =>
        <View key={item.id} style={{ paddingBottom: 10 }}>
          <ReviewItem key={item.id} review={item} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {

    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10
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