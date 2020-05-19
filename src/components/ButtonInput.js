import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ButtonInput({ value, onPress }) {
    return (
        <View style={styles.centerButton}>
            <TouchableOpacity style={styles.ButtonInput} onPress={onPress}>
                <Text style={styles.ButtonValue}>{value}</Text>
            </TouchableOpacity>
        </View>
    );
}
