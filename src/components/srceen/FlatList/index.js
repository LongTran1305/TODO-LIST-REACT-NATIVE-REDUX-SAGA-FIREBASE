import React from 'react';
import {View,Text,SafeAreaView,FlatList} from 'react-native';

import DATA from './data';

import styles from './style';

const demoFlatList = () =>{
    const renderItem = ({item}) => {
        return(
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem}  />
        </SafeAreaView>
    )
}
export default demoFlatList;
