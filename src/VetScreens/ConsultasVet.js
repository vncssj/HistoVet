import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../Styles';
import { AntDesign } from '@expo/vector-icons';

export default class ConsultasVetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consultas: [
                {
                    id: 1,
                    tipo: 'Cão',
                    nome: 'Coxinha',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Marcos'
                },
                {
                    id: 2,
                    tipo: 'Cão',
                    nome: 'Bob',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Jonatas'
                },
                {
                    id: 3,
                    tipo: 'Gato',
                    nome: 'Britney',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Mertens'
                },
                {
                    id: 4,
                    tipo: 'Gato',
                    nome: 'Britney',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Mertens'
                },
                {
                    id: 5,
                    tipo: 'Gato',
                    nome: 'Britney',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Mertens'
                },
                {
                    id: 6,
                    tipo: 'Gato',
                    nome: 'Britney',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Mertens'
                },
            ]
        }
    }

    renderConsultas(item) {
        return (
            <TouchableOpacity style={styles.consulta}>
                <Text style={styles.titleConsulta}>
                    {item.tipo + ' ' + item.nome}
                </Text>
                <Text style={styles.horaConsulta}>
                    {item.data + '\n' + item.hora}
                </Text>
            </TouchableOpacity>
        );
    }
    addConsulta() {
        this.props.navigation.navigate('AddConsultas');
    }
    render() {
        return (
            <>
                <View style={styles.user}>
                    <Text style={styles.wellcome}>Bem-vindo Vinícius</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.topoOcorrencias}>
                        <TouchableHighlight style={styles.addOcorrencia} onPress={() => this.addConsulta()}>
                            <>
                                <AntDesign name="plus" size={16} color="#000" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                                <Text style={styles.textAddOcorrencia}> Nova Consulta</Text>
                            </>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.corpoHVet}>
                        <FlatList
                            data={this.state.consultas}
                            renderItem={({ item }) => this.renderConsultas(item)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </>
        );
    }
}
