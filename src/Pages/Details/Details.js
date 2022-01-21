import React from 'react';
import {ScrollView, Dimensions, SafeAreaView, Text, View} from 'react-native';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';

import Error from 'components/Error';
import Loading from 'components/Loading';
import useFetch from 'hooks/useFetch';

import Styles from './Details.style';
import PageButton from 'components/Buttons/PageButton';

const Header = ({job}) => {
  return (
    <View style={Styles.headerContainer}>
      <Text style={Styles.title}>{job.name}</Text>
      <Text style={Styles.locations}>
        <TextColor text="Location :" />{' '}
        {job.locations && job.locations.length > 0
          ? job.locations[0].name
          : 'No information'}
      </Text>
      <Text style={Styles.levels}>
        <TextColor text="Job Level :" />{' '}
        {job.levels && job.levels.length > 0
          ? job.levels[0].name
          : 'No information'}
      </Text>
      <Text style={Styles.header}>Job Detail</Text>
    </View>
  );
};

const Buttons = () => {
  return (
    <View style={Styles.buttons}>
      <PageButton icon="login" text="Submit" />
      <PageButton icon="heart" text="Favorite Job" />
    </View>
  );
};

const TextColor = ({text}) => {
  return <Text style={Styles.text}>{text}</Text>;
};

const Details = ({route}) => {
  const {id} = route.params;
  const {data, error, loading} = useFetch(`${Config.JOBS_API_URL}/${id}`);
  const {width} = Dimensions.get('window');

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  const source = {
    html: data.contents,
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Header job={data} />
      <ScrollView style={Styles.html} showsVerticalScrollIndicator={false}>
        <RenderHTML source={source} contentWidth={width} />
      </ScrollView>
      <Buttons />
    </SafeAreaView>
  );
};

export default Details;
