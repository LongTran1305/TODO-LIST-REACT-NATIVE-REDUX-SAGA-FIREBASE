import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#BCF7FE' ,
        width: '85%',
        alignSelf: 'center',
        margin: 5,
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 15,
    },
    itemTitle: {
        fontSize: 22,
    },
    icon:{
        flexDirection: 'row',
    },
    editIcon:{
        paddingHorizontal: 10,
    }
})
export default styles;
