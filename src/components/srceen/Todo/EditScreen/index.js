import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { firebase } from '../../../../firebase/firebase';

import styles from './styles';

import { editTodo } from '../../../../redux/todo/action';

const EditScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    //Get the value of route from TodoScreen
    const { item } = route.params;
    const [updateTodo, setUpdateTodo] = useState(item.todo);
    const db = firebase.firestore();
    const todoRef = db.collection("Todo");

    // Send value,key to Reducer
    function handleEditTodoOnPress() {
        // dispatch(editTodo(updateTodo, item.key));
        todoRef.doc(item.id).update({
            todo: updateTodo,
        })
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Screen</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={updateTodo}
                    onChangeText={setUpdateTodo}
                />
                <TouchableOpacity style={styles.editBtn} onPress={handleEditTodoOnPress}>
                    <Text style={styles.btnTitle}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default EditScreen;

