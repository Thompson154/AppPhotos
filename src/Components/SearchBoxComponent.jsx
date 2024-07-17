import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import Icon1 from 'react-native-vector-icons/FontAwesome'; 

import styles from '../theme/app-theme';

const SearchBoxComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.searchBoxContainer}>
      <Icon name="search" size={30} color="gray" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Icon1 name="microphone" size={30} color="gray" style={styles.searchIcon} />
    </View>
  );
};

export default SearchBoxComponent;
