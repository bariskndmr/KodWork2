import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import JobCard from 'components/JobCard';

import Styles from './Favorites.style';

const Favorites = () => {
  const favoriteList = useSelector(s => s.favoritesList);
  const dispatch = useDispatch();
  const removeFav = id => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {id}});
  };

  const renderFavorites = ({item}) => {
    return (
      <JobCard job={item} isButton={true} onRemove={() => removeFav(item.id)} />
    );
  };
  return (
    <SafeAreaView style={Styles.container}>
      <FlatList data={favoriteList} renderItem={renderFavorites} />
    </SafeAreaView>
  );
};

export default Favorites;
