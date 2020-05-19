import React, { Component } from 'react';

import { Modal, SafeAreaView, ScrollView, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../Styles';

import { LoginInput, TextArea, ModalInput } from '../../../components/LoginInput';
import ButtonInput from '../../../components/ButtonInput';


export default class AddPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nivel: '',
            modal: false,
        }
    }

    controlModal() {
        this.setState({ modal: true })
    }

    render() {
        return (
            <>
                <KeyboardAvoidingView style={Styles.container} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={Styles.titlePage}>Novo Pet</Text>
                        <LoginInput label="Tipo" />
                        <LoginInput label="Dono" />
                        <LoginInput label="Nome" />
                        <LoginInput label="Raça" />
                        <LoginInput label="Peso" />
                        <ButtonInput value="Salvar" />
                    </ScrollView>
                </KeyboardAvoidingView>
                <Modal visible={false}>
                    <View style={{ alignItems: 'center', paddingVertical: 20, marginVertical: 50 }}>
                        <Text style={{ fontSize: 22 }}>Selecione o nível de gravidade</Text>
                    </View>
                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Leve')}
                    >
                        <Text style={{ fontSize: 22 }}>Leve</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Moderado')}
                    >
                        <Text style={{ fontSize: 22 }}>Moderado</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Grave')}
                    >
                        <Text style={{ fontSize: 22 }}>Grave</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginVertical: 10,
                        borderBottomColor: "#ccc",
                        borderBottomWidth: 1
                    }}
                        onPress={() => this.select('Urgência')}
                    >
                        <Text style={{ fontSize: 22 }}>Urgência</Text>
                    </TouchableOpacity>

                </Modal>
            </>
        );
    }
}
