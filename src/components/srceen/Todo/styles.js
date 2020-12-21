import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 64,
        color: 'lightgrey',
        padding: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textInput: {
        borderColor: 'red',
        borderBottomWidth: 1,
        width: '80%',
        borderRadius: 10,
        fontSize: 16,
        padding: 10
    },

    flatListView: {
        width: '80%',
        paddingHorizontal: 15,
        margin: 10,


    },

})
export default styles;
