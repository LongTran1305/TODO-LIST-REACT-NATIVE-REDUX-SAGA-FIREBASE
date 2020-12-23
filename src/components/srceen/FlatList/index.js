import React, {useState,useEffect} from 'react';
import {View,Text,SafeAreaView,FlatList,Image,ActivityIndicator} from 'react-native';

import SearchBar from '../FlatList/SearchBar/';

import DATA from './data';

import styles from './styles';

const demoFlatList = () =>{
    const [text,setText] = useState('');
    const [data, setData] = useState(DATA);

    const renderItem = ({item}) => {
        return(
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        )
    }

    const handleOnChangeText = (text) ? data.filter(item => {
        const itemData = item.title.toUpperCase();
        const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
    }) : data;



    return(
        <SafeAreaView style={styles.container}>
            <SearchBar onChangeText={setText}/>
            <FlatList
                data={handleOnChangeText}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
export default demoFlatList;
