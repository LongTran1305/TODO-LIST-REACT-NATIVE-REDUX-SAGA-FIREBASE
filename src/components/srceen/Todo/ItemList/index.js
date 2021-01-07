import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {AntDesign as DeleteIcon, AntDesign as EditIcon} from '@expo/vector-icons';

import styles from './styles';

const ItemList = ({item, deleteOnPress, editOnPress}) => {
    function handleDeleteOnPress() {
        const id = item.id;
        deleteOnPress(id);
    }

    function handleEditOnPress() {
        const todo = {item};
        editOnPress(todo);
    }

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.itemTitle}>{item.todo}</Text>
                <View style={styles.icon}>
                    <EditIcon name="edit" size={24} color="black" style={styles.editIcon} onPress={handleEditOnPress}/>
                    <DeleteIcon name="delete" size={24} color="black" onPress={handleDeleteOnPress}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemList;
