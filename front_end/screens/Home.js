import React from "react";
import {View, Text, Button, StyleSheet } from 'react-native';

const Home  = () => {
    return (
        <View>
            <Text> Settings Screen</Text>
        </View>        
    );
};

export default Home;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc' 
    },
});