import { Navigate, Outlet, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";


const AuthLayout = () => {

    const { user, logout} = useAuthContext();

    
    return (
        user ? (
        <> 
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text>Bon arrivé</Text>
            

                
                {user ? (
                <li>
                    <button 
                    onClick={logout} 
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    > 
                    Logout
                    </button>
                </li>
                ) : (
                    <>
                        
                    </>) }
                
            
            </View>
            </View> 
         <Outlet /> 
        </>
     )  : (
     <Navigate to="/login" />
     )
    );
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

export default AuthLayout;