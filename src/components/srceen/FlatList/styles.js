import {StyleSheet} from "react-native";

 const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderBottomWidth: 0.8,
        marginVertical:2,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 22,
    },
     listItem: {
         marginTop: 10,
         paddingVertical: 20,
         paddingHorizontal: 20,
         backgroundColor: '#fff',
         flexDirection: 'row'
     },
     coverImage: {
         width: 100,
         height: 100,
         borderRadius: 8
     },
     metaInfo: {
         marginLeft: 10
     },
})

export default styles;
