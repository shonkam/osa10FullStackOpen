import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { useHistory } from "react-router-native";

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl
}) => {

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
  let history = useHistory();

  const moveToSingleRepoView = () => {
    history.push(`/repository/${id}`);
  };

  return (
    < View style={styles.container}>
      <Pressable onPress={moveToSingleRepoView}>
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  logo: {
    width: 66,
    height: 58,
  },
  pictureNameDesc: {
    flexDirection: 'row',
    flex: 1,
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

  },
  stats: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default RepositoryItem;