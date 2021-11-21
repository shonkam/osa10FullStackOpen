import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Button, Menu, Provider, TextInput } from 'react-native-paper';
import { useDebounce } from 'use-debounce';




const styles = StyleSheet.create({
  separator: {
    height: 10
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => {

  return (

    <RepositoryItem
      id={item.id}
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
  const [filter, setFilter] = useState('');
  const [bouncedFilter] = useDebounce(filter, 1000);
  const [visible, setVisible] = useState(false);
  const [sortedBy, setSortedBy] = useState('Latest repositories');

  const { repositories } = useRepositories(sortedBy, bouncedFilter);

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={< Button
          onPress={openMenu}
          mode="contained"
        >
          {sortedBy}
        </Button>}>
        <Menu.Item onPress={() => { setSortedBy('Latest repositories'), closeMenu(); }} title="Latest repositories" />
        <Menu.Item onPress={() => { setSortedBy('Highest rated repositories'), closeMenu(); }} title="Highest rated repositories" />
        <Menu.Item onPress={() => { setSortedBy('Lowest rated repositories'), closeMenu(); }} title="Lowest rated repositories" />
      </Menu >

      <FlatList
        ListHeaderComponent={
          <TextInput
            label='Filter repositories'
            value={filter}
            onChangeText={filter => setFilter(filter)}
          />}
      data={repositoryNodes}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
    />

    </Provider>
  );
};

export default RepositoryList;