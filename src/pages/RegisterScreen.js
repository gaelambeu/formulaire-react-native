import React from "react";
import {Text, 
    View, 
    TextInput, 
    Button, 
    TouchableOpacity, 
    StyleSheet} from 'react-native';

import useAuthContext from "../context/AuthContext";


const RegisterScreen = ({navigation}) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const {register, errors} = useAuthContext();

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>

                <TextInput 
                    style={styles.input}
                    type="text" 
                    placeholder="Entrez nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextInput 
                    style={styles.input}
                    type="email" 
                    placeholder="Entrez email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextInput 
                    type="password"
                    style={styles.input} secureTextEntry 
                    placeholder="Entrez password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <TextInput 
                    type="password"
                    style={styles.input} secureTextEntry 
                    placeholder="Entrez password"
                    vvalue={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value) }
                />

                <Button title="Login" />
                
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>j 'ai pas de compte</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.link} >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>      
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper: {
        width: '80%'
    },

    input:{
        height:50,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    }, 

    link:{
        color:'blue',
    }
})

export default RegisterScreen;