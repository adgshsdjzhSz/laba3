import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, RefreshControl } from 'react-native';
import LanguageCard from './LanguageCard.js';

const LanguagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const languages = [
    {
      id: '1',
      title: 'JavaScript',
      experience: '2 years of experience',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      id: '2',
      title: 'Python',
      experience: '3 months of experience',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    },
    {
      id: '3',
      title: 'Java',
      experience: 'Здесь могла бы быть Java, но я ее не учил',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LanguageCard
            title={item.title}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default LanguagesScreen;
