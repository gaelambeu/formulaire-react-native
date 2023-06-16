import {useState} from "react";
import {Text, 
        View, 
        TextInput, 
        Button, 
        TouchableOpacity, 
        StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Entrez email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextInput 
                    style={styles.input} secureTextEntry 
                    placeholder="Entrez password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <Button title="Login" />
                
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>j 'ai pas de compte</Text>

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.link} >Register</Text>
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

export default LoginScreen;