import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Icon } from 'react-native-elements'
import realm from '../../store/realm'

const AddContactScreen = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const saveContact = () => {
        if (name !== '' && phoneNumber !== ''){
            realm.write(() => {
                const data = realm.create('Contact');
                const lastId = data.length === 0 ?
                1 
                :
                data[data.lastIdFromRealm - 1].id;

            realm.create('Contact', {
                id: data.length === 0 ? lastIdFromRealm : lastIdFromRealm + 1,
                name : name,
                phoneNumber : phoneNumber
                })
            })

            navigation.navigate('ContactList')
        } else {
            alert('Cant save your contact!')
        }
    }
        return (
            <View>
                <View style={styles.contactContainer}>
                    <Text style={styles.headerText}>Name</Text>
                    <TextInput
                        placeholder="Write name here"
                        style={styles.inputStyle}
                        onChangeText={(text) => setName(text)}
                    />

                    <Text>Phone Number</Text>
                    <TextInput
                        placeholder="Write phone number here"
                        style={styles.inputStyle}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                </View>

                <View style={styles.saveContainer}>
                    <TouchableOpacity 
                        style={styles.saveButton}
                        onPress={() => saveContact()}
                        >
                        <Text styles={{fontWeight:'bold'}}>SAVE CONTACT</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }

const styles = StyleSheet.create({
    contactContainer:{
        margin:16,
        marginBottom:0
    },
    headerText:{
        marginBottom:8,
        fontWeight:'bold'
    },
    inputStyle:{
        height:40,
        borderWidth:1,
        paddingLeft:8,
        paddingRight:8,
        borderRadius:10
    },
    saveContainer:{
        alignItems:'center',
        margin:16
    },
    saveButton:{
        backgroundColor:'#B7F1D4',
        padding:16,
        borderRadius:10
    }
})
export default AddContactScreen