import {StyleSheet, StatusBar, Platform} from 'react-native';


export const styles = StyleSheet.create({
    appBar: {
      flex: 1,
      backgroundColor: 'black',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,  
    },
    mainContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        marginTop: '4%',
        padding: '2%',
    },
    appBarText: {
        color: 'white',
        fontSize: 22,
        paddingTop: '4%',
        paddingLeft: '5%',

    },
    itemText: {
        paddingTop:10,
        paddingBottom: 7,
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemContainer: {
        alignItems: 'center',
        padding: 7,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
    },
    loader: {
        marginTop: 30,
        alignItems: 'center',
    },
    detailsContainer: {
        bottom: 5,
        flexDirection: 'row',
        paddingTop: 10,
    },
    detailsText: {
        color: 'blue',
        fontSize: 12,
    },
    dateStyle: {
        color: 'grey',
        fontSize: 15,
        paddingBottom: 15,
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 170/ 2
    },
    moreDetails: {
        alignItems: 'center',
    },
  });
