import react from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
export default function Home () {
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Projeto Soma</Text>
            <TextInput style={styles.input} placeholder="Digite um valor"></TextInput>
            <TextInput style={styles.input} placeholder="Digite outro valor"></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4493BD',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#FFF',
        fontSize: 20,
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
    },
    button:{
        backgroundColor: '#FFF',
        padding: 15,
        marginTop: 15,
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 15,
        color: '#4493BD',
        fontWeight: 'bold'
    }
});