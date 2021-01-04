import React,{useState} from 'react';
import {View,TextInput} from "react-native";

import styles from './styles';

const SearchBar = ({value,onChangeText}) =>{
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                value={value}
                onChangeText={onChangeText}
                placeholder="Search"
                style={styles.input}
            />
        </View>
    )
}
export default SearchBar;
