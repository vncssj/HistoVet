import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputBorderLogin: {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 5,
        padding: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 15,
        marginVertical: 10,
        width: '100%'
    },
    inputLabelLogin: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        color: '#FFF',
        fontSize: 16,
        borderRadius: 50,
    },
    inputLogin: {
        fontSize: 20,
        backgroundColor: '#FFF',
        color: '#000',
        padding: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 0,
    },
    inputTextArea: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 0,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        maxHeight: 300,
    },

    // BUTTON
    centerButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonInput: {
        marginVertical: 20,
        borderRadius: 10,
        padding: 3,
        width: 300,
    },
    ButtonValue: {
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 5,
        textAlign: 'center',
    },
});