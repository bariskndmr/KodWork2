/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Config from 'react-native-config';

import Error from 'components/Error';
import JobCard from 'components/JobCard';
import PageButton from 'components/Buttons/PageButton';
import useFetch from 'hooks/useFetch';

import Styles from './Jobs.style';
import Loading from 'components/Loading';

const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {data, error, loading} = useFetch(
    `${Config.JOBS_API_URL}?page=${page}`,
  );

  useEffect(() => {
    page;
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleSelect = id => {
    navigation.navigate('DetailsPage', {id});
  };

  const renderJob = ({item}) => {
    return <JobCard job={item} onSelect={() => handleSelect(item.id)} />;
  };

  const increasePage = () => {
    return setPage(page + 1);
  };
  const decreasePage = () => {
    return page === 1 ? setPage(1) : setPage(page - 1);
  };

  const Footer = () => {
    return (
      <View style={Styles.footerContainer}>
        <PageButton text="Previos" onPress={decreasePage} />
        <Text>{page} / 50</Text>
        <PageButton text="Next" onPress={increasePage} />
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJob}
        key={item => item.id}
        ListFooterComponent={<Footer />}
      />
    </SafeAreaView>
  );
};

export default Jobs;
