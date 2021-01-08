import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Foundation} from "@expo/vector-icons";
import styles from './styles';



const Index = ({item,onPress}) => {

    function handleOnPress(){
        if(onPress){
            onPress(item);
        }
    }
    return (
        <TouchableOpacity  >
            <View style={styles.flatListItem} >
                <Text style={styles.textItem}>{item.data}</Text>
                <View>
                    <Foundation name="x" size={24} color="black" onPress={handleOnPress} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default Index;
