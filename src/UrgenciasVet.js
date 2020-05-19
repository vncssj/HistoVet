import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../Styles';
import { AntDesign } from '@expo/vector-icons';

export default class UrgenciasVetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consultas: [
                {
                    id: 1,
                    tipo: 'Cão',
                    nome: 'Coxinha',
                    ocorrencia: 'O Coxinha ingeriu chocolate, e sentiu fortes dores estomacais. Receitei o remédio XXXXX',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Marcos'
                },
                {
                    id: 2,
                    tipo: 'Cão',
                    nome: 'Bob',
                    ocorrencia: 'O Coxinha ingeriu chocolate, e sentiu fortes dores estomacais. Receitei o remédio XXXXX',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Jonatas'
                },
                {
                    id: 3,
                    tipo: 'Gato',
                    nome: 'Britney',
                    ocorrencia: 'O Coxinha ingeriu chocolate, e sentiu fortes dores estomacais. Receitei o remédio XXXXX',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Mertens'
                },
                {
                    id: 4,
                    tipo: 'Gato',
                    nome: 'Britney',
                    ocorrencia: 'O Coxinha ingeriu chocolate, e sentiu fortes dores estomacais. Receitei o remédio XXXXX',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Mertens'
                },
                {
                    id: 5,
                    tipo: 'Gato',
                    nome: 'Britney',
                    ocorrencia: 'O Coxinha ingeriu chocolate, e sentiu fortes dores estomacais. Receitei o remédio XXXXX',
                    data: '19/09/20',
                    hora: '10:00',
                    dono: 'Mertens'
                },
                {
                    id: 6,
                    tipo: 'Gato',
                    nome: 'Britney',
                    ocorrencia: 'O Coxinha ingeriu chocolate, e sentiu fortes dores estomacais. Receitei o remédio XXXXX',
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
                <Text style={styles.ocorrenciaConsulta}>
                    {item.ocorrencia}
                </Text>
            </TouchableOpacity>
        );
    }
    addOcorrencia() {
        this.props.navigation.navigate('AddOcorrencias');
    }
    render() {
        return (
            <>
                <View style={styles.user}>
                    <Text style={styles.wellcome}>Bem-vindo Vinícius</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.topoOcorrencias}>
                        <TouchableHighlight style={styles.addOcorrencia} onPress={() => this.addOcorrencia()}>
                            <>
                                <AntDesign name="plus" size={20} color="#000" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                                <Text style={styles.textAddOcorrencia}> Nova Ocorrência</Text>
                            </>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.corpoHVet}>
                        <FlatList
                            data={this.state.consultas}
                            renderItem={({ item }) => this.renderConsultas(item)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
            </>
        );
    }
}
