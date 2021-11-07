import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => {
  return (
    <RepositoryItem
      fullName={item.fullName}
      description={item.description}
      language={item.language}
      forksCount={item.forksCount}
      stargazersCount={item.stargazersCount}
      ratingAverage={item.ratingAverage}
      reviewCount={item.reviewCount}
      ownerAvatarUrl={item.ownerAvatarUrl}
    />
  );
};

const RepositoryList = () => {

  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
      <FlatList
      data={repositoryNodes}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;