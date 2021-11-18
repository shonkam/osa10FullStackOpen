import React from 'react';
import { View, Image, StyleSheet, Button, FlatList } from 'react-native';
import Text from './Text';
import { useParams } from "react-router-native";
import useRepository from '../hooks/useRepository';
import * as WebBrowser from 'expo-web-browser';

const SingleRepositoryView = () => {

  const { id } = useParams();
  console.log('single param id', id);
  const repo = useRepository(id);

  if (!repo) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const fullName = repo.repository.fullName;
  const description = repo.repository.description;
  const language = repo.repository.language;
  let forksCount = repo.repository.forksCount;
  let stargazersCount = repo.repository.stargazersCount;
  const ratingAverage = repo.repository.ratingAverage;
  const reviewCount = repo.repository.reviewCount;
  const ownerAvatarUrl = repo.repository.ownerAvatarUrl;
  const url = repo.repository.url;

  const repositoryReviews = repo.repository.reviews.edges.map(edge => edge.node);

  const openGitHub = () => {
    WebBrowser.openBrowserAsync(url);
  };

  if (stargazersCount > 999) {
    stargazersCount = Math.round(stargazersCount / 100) * 100;
    stargazersCount = stargazersCount.toString();
    stargazersCount = stargazersCount.slice(0, -2);

    if (stargazersCount < 100) {
      let hundreds = stargazersCount.slice(1, 2);
      stargazersCount = stargazersCount.slice(0, -1);
      stargazersCount = stargazersCount + '.' + hundreds + 'k';
    }
    else {
      let hundreds = stargazersCount.slice(2, 3);
      stargazersCount = stargazersCount.slice(0, -1);
      stargazersCount = stargazersCount + '.' + hundreds + 'k';
    }
  }

  if (forksCount > 999) {
    forksCount = Math.round(forksCount / 100) * 100;
    forksCount = forksCount.toString();
    forksCount = forksCount.slice(0, -2);
    if (forksCount < 100) {
      let forksHundreds = forksCount.slice(1, 2);
      forksCount = forksCount.slice(0, -1);
      forksCount = forksCount + '.' + forksHundreds + 'k';
    }
    else {
      let forksHundreds = forksCount.slice(2, 3);
      forksCount = forksCount.slice(0, -1);
      forksCount = forksCount + '.' + forksHundreds + 'k';
    }
  }

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
          <Text fontWeight="bold" style={{ fontSize: 16 }}>{review.user.username} </Text>
          <Text style={{ fontSize: 14 }}>{day}.{month}.{year} </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    );
  };

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    < View style={styles.container}>
      <View style={styles.pictureNameDesc}>
        <Image style={styles.logo} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.nameDesc}>
          <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
          <Text>{description}</Text>
          <View>
            <Text fontWeight="bold" style={styles.language}>{language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomFourStats}>
        <Text style={styles.stats} fontWeight="bold">{stargazersCount}</Text>
        <Text style={styles.stats} fontWeight="bold">{forksCount}</Text>
        <Text style={styles.stats} fontWeight="bold">{reviewCount}</Text>
        <Text style={styles.stats} fontWeight="bold">{ratingAverage}</Text>
      </View>
      <View style={styles.bottomFourStats}>
        <Text style={styles.stats}>Stars</Text>
        <Text style={styles.stats}>Forks</Text>
        <Text style={styles.stats}>Reviews</Text>
        <Text style={styles.stats}>Rating</Text>
      </View>

      <View style={styles.button}>
        <Button
          onPress={openGitHub}
          title={'Open in GitHub'}
        />
      </View>

      <View style={styles.separator} />

      <FlatList
        data={repositoryReviews}
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

export default SingleRepositoryView;