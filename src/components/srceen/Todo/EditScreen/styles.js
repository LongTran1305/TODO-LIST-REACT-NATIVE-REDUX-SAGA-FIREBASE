import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        color: 'grey',
        padding: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textInput: {
        borderColor: 'red',
        borderBottomWidth: 1,
        width: '70%',
        borderRadius: 10,
        fontSize: 22,
        padding: 10,

    },
    editBtn:{
        backgroundColor: '#80ccff',
        padding: 8,
        borderRadius: 10,
    },
    btnTitle:{
        fontSize: 22,
        color: 'black',
    }

})
export default styles;
