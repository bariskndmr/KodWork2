import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {removeFavorite} from '../../Context/favoritesSlice';
import JobCard from 'components/JobCard';

import Styles from './Favorites.style';

const Favorites = () => {
  const favoritesList = useSelector(state => state.favorites.favoritesList);
  const dispatch = useDispatch();
  const removeFav = id => {
    dispatch(removeFavorite(id));
  };

  const renderFavorites = ({item}) => {
    return (
      <JobCard job={item} isButton={true} onRemove={() => removeFav(item.id)} />
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList data={favoritesList} renderItem={renderFavorites} />
    </SafeAreaView>
  );
};

export default Favorites;
