import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../Styles';
import { AntDesign } from '@expo/vector-icons';

export default class PetVetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consultas: [
                {
                    id: 1,
                    tipo: 'Cão',
                    nome: 'Coxinha',
                    quantidade: 3
                },
                {
                    id: 2,
                    tipo: 'Cão',
                    nome: 'Bob',
                    quantidade: 1
                },
                {
                    id: 3,
                    tipo: 'Gato',
                    nome: 'Britney',
                    quantidade: 1
                },
                {
                    id: 4,
                    tipo: 'Gato',
                    nome: 'Britney',
                    quantidade: 1
                },
                {
                    id: 5,
                    tipo: 'Gato',
                    nome: 'Britney',
                    quantidade: 2
                },
                {
                    id: 6,
                    tipo: 'Gato',
                    nome: 'Britney',
                    quantidade: 2
                },
            ]
        }
    }
    addPets() {
        this.props.navigation.navigate('AddPets');
    }
    renderPets(item) {
        return (
            <TouchableOpacity style={styles.pets}>
                <Text style={styles.linhaPet}>
                    {item.tipo + ' ' + item.nome}
                </Text>
                <Text style={styles.quantidade}>
                    {item.quantidade}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <>
                <View style={styles.user}>
                    <Text style={styles.wellcome}>Bem-vindo Vinícius</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.topoOcorrencias}>
                        <TouchableHighlight style={styles.addOcorrencia} onPress={() => this.addPets()}>
                            <>
                                <AntDesign name="plus" size={20} color="#000" style={{ width: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                                <Text style={styles.textAddOcorrencia}> Novo Pet</Text>
                            </>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.corpoHVet}>
                        <FlatList
                            data={this.state.consultas}
                            renderItem={({ item }) => this.renderPets(item)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </>
        );
    }
}
