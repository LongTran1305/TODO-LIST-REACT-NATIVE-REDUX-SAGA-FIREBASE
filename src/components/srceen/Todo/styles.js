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
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textInput: {
        borderColor: 'red',
        borderBottomWidth: 1,
        width: '80%',
        borderRadius: 10,
        fontSize: 16,
        padding: 10,

    },
    flatListView: {
        flex: 1,
        width: '85%',
        paddingHorizontal: 15,
        marginTop: 10,
    },

})
export default styles;
