import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign as DeleteIcon } from '@expo/vector-icons';
import { AntDesign as EditIcon } from '@expo/vector-icons';

import styles from './styles';

const ItemList = ({ item, deleteOnPress, editOnPress }) => (
    <TouchableOpacity >
        <View style={styles.container} >
            <Text style={styles.itemTitle}>{item}</Text>
            <View style={styles.icon}>
                <EditIcon name="edit" size={24} color="black" style={styles.editIcon} onPress={editOnPress} />
                <DeleteIcon name="delete" size={24} color="black" onPress={deleteOnPress} />
            </View>
        </View>
    </TouchableOpacity>
);
export default ItemList;
