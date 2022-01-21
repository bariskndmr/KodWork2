import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 7,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bdbdbd',
    backgroundColor: '#fff',
  },
  text: {marginVertical: 3},
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationContainer: {
    backgroundColor: '#ef534f',
    padding: 3,
    borderRadius: 10,
    alignSelf: 'baseline',
  },
  location: {
    color: '#fff',
    fontWeight: 'bold',
  },
  level: {
    alignSelf: 'flex-end',
    color: '#ef534f',
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
