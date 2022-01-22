import {Alert} from 'react-native';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {job} = action.payload;
      const filtered = state.favoritesList.find(item => item.id === job.id);
      let newList = [];
      if (filtered) {
        Alert.alert('Warning', 'The job already in favorite list!');
        return state;
      } else {
        Alert.alert('Success', 'The job added favorite list successfully!');
        newList = [...state.favoritesList, job];
        return {...state, favoritesList: newList};
      }
    case 'REMOVE_FAVORITE':
      const {id} = action.payload;
      const list = state.favoritesList.filter(item => item.id !== id);
      return {...state, favoritesList: list};

    default:
      return state;
  }
};
