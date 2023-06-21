import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import useAuthContext from '../context/AuthContext';



const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, errors} = useAuthContext();

    const handleLogin = async (event) => {
        event.preventDefault();
        login({email, password});
    };



    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    secureTextEntry
                />
                <Button title="Se connecter" onPress={handleLogin} />
            </View>
        </View>        
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },

    input: {
        backgroundColor: '#bbb',
        padding: 15,
        width:200
    }
});
