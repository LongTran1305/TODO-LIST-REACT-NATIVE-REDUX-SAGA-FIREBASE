import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Foundation as DeleteIcon} from "@expo/vector-icons";

import styles from './styles';

const ItemList = ({item,onPress}) =>(
        <TouchableOpacity  >
            <View style={styles.container} >
                <Text style={styles.itemTitle}>{item.todo}</Text>
                <Text>Hello</Text>
                <View>
                    <DeleteIcon name="x" size={24} color="black" onPress={onPress} />
                </View>
            </View>
        </TouchableOpacity>
    );

export default ItemList;
