import React from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from '../styles';

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder={'Search Breaks'} style={styles.searchBreaks} />
      <Button title="Surfs Up Bra" style={styles.searchButton} />
    </View>
  );
}
