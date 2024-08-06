import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Icon } from 'react-native-elements'
import AddContactScreen from './AddContactScreen'

const ContactListScreen = (props) => {
    const [data, setData] = useState([]);
    const {navigation} = props;

    return (
        <View style={styles.mainContainer}>
            <FlatList
                contentContainerStyle={styles.flatListContainer}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.borderContainer}>
                            <View>
                                <Text style={styles.nameText}>
                                    {item.name}
                                </Text>
                                <Text style={styles.numberText}>
                                    {item.phoneNumber}
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Icon
                                    name="cross"
                                    type="entypo"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                }     
        />
            <View style={styles.addButtonContainer}>
                <TouchableOpacity 
                    style={styles.addButtonOpacity}
                    onPress={() => navigation.navigate('AddContact')}>
                    <Icon
                        name='plus'
                        type='antdesign'
                        size={24}
                    />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    flatListContainer:{
        padding:8
    },
    borderContainer:{
        margin:8,
        padding:16,
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    nameText:{
        fontSize:20,
        fontWeight:'bold'
    },
    numberText:{
        fontSize:18,
    },
    addButtonContainer:{
        position:'absolute',
        bottom:16,
        right:16
    },
    addButtonOpacity:{
        backgroundColor:'#B7F1D4',
        padding:16,
        borderRadius:100
    }
})
export default ContactListScreen