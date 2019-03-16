import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, StyleSheet, StatusBar, AsyncStorage, Image } from 'react-native'
import {
    Container, Content, Text, View,
    Icon, Button, Toast, Picker,
    Form,
} from 'native-base'

import { patchPokemon } from '../../publics/redux/actions/pokemons'

class PokemonPatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.pokemons.details.name,
            image_url: this.props.pokemons.details.image_url,
            category: this.props.pokemons.details.category.id,
            type1: 0,
            type2: 0,
            type3: 0,
            description: this.props.pokemons.details.description,
            latitude: this.props.pokemons.details.latitude,
            longitude: this.props.pokemons.details.longitude,
            types: [],
        }
    }
    componentWillMount() {
        const { type } = this.props.pokemons.details
        for (let i = 0; i < type.length; i++) {
            if (type.length == 1) {
                this.setState({
                    type1: type[i].id,
                    types: [type[i].id]
                })
            }
            if (type.length == 2) {
                if (i == 0) {
                    this.setState({
                        type1: type[i].id,
                        types: [type[i].id]
                    })
                } else {
                    this.setState({
                        type2: type[i].id,
                        types: [...this.state.types, type[i].id],
                    })
                }
            }
            if (type.length == 3) {
                if (i == 0) {
                    this.setState({
                        type1: type[i].id,
                        types: [type[i].id]
                    })
                } else if (i == 1) {
                    this.setState({
                        type2: type[i].id,
                        types: [...this.state.types, type[i].id],
                    })
                } else {
                    this.setState({
                        type3: type[i].id,
                        types: [...this.state.types, type[i].id],
                    })
                }
            }
        }
    }
    async onValueChangeCategory(value) {
        await this.setState({
            category: value
        })
    }
    async onValueChangeType1(value) {
        if (value != '') {
            await this.setState({
                type1: value,
                types: [value],
            })
        } else {
            await this.setState({
                type1: value,
                types: value,
            })
        }
    }

    async onValueChangeType2(value) {
        if (value != '') {
            await this.setState({
                type2: value,
                types: [...this.state.types, value],
            })
        } else {
            await this.setState({
                type2: value,
            })
        }
    }

    async onValueChangeType3(value) {
        if (value != '') {
            await this.setState({
                type3: value,
                types: [...this.state.types, value],
            })
        } else {
            await this.setState({
                type3: value,
            })
        }
    }

    async editPokemon() {
        await this.props.dispatch(patchPokemon(this.props.pokemons.details.id, {
            name: this.state.name,
            image_url: this.state.image_url,
            category_id: this.state.category,
            description: this.state.description,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            type: this.state.types,
        }))
        await this.props.navigation.navigate('PokemonDetails')
        //console.warn(this.state.types)
    }
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ marginTop: 10 }}>
                        {this.pokemonPhoto()}
                    </View>
                    <View style={styles.contentView}>
                        <View style={styles.formView}>
                            <Icon type='MaterialCommunityIcons' name='pokeball'
                                style={styles.iconStyle}
                            />
                            <TextInput
                                placeholder='Name Pokemon'
                                style={styles.inputStyle}
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}
                            />
                        </View>
                        <View style={styles.formView}>
                            <Icon type='Entypo' name='image'
                                style={styles.iconStyle}
                            />
                            <TextInput
                                placeholder='Image Pokemon'
                                secureTextEntry={false}
                                style={styles.inputStyle}
                                onChangeText={(image_url) => this.setState({ image_url })}
                                value={this.state.image_url}
                            />
                        </View>
                        <View style={styles.formView}>
                            <Icon type='FontAwesome5' name='clipboard-list'
                                style={styles.iconStyle}
                            />
                            <Form style={{ marginLeft: 10 }}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 180, color: 'black' }}
                                    selectedValue={this.state.category}
                                    onValueChange={this.onValueChangeCategory.bind(this)}
                                >
                                    <Picker.Item label='Select Category' value='' />
                                    {
                                        this.props.pokemons.categories.map(function (item, index) {
                                            return (

                                                <Picker.Item key={index} label={item.name} value={item.id} />
                                            )
                                        })
                                    }

                                </Picker>
                            </Form>
                        </View>
                        <View style={styles.formView}>
                            <Icon type='FontAwesome5' name='fire'
                                style={styles.iconStyle}
                            />
                            <Text style={{ marginLeft: 20, marginTop: 15, color: '#BDBDBD', fontSize: 14, }}>Type 1: </Text>
                            <Form style={{ marginLeft: 10 }}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 150, color: 'black' }}
                                    selectedValue={this.state.type1}
                                    onValueChange={this.onValueChangeType1.bind(this)}
                                >
                                    <Picker.Item label='Select Type' value='' />
                                    {
                                        this.props.pokemons.types.map(function (item, index) {
                                            return (

                                                <Picker.Item key={index} label={item.name} value={item.id} />
                                            )
                                        })
                                    }

                                </Picker>
                            </Form>
                        </View>
                        <View style={styles.formView}>
                            <Icon type='FontAwesome' name='snowflake-o'
                                style={styles.iconStyle}
                            />
                            <Text style={{ marginLeft: 20, marginTop: 15, color: '#BDBDBD', fontSize: 14, }}>Type 2: </Text>
                            <Form style={{ marginLeft: 10 }}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 150, color: 'black' }}
                                    selectedValue={this.state.type2}
                                    onValueChange={this.onValueChangeType2.bind(this)}
                                >
                                    <Picker.Item label='Select Type' value='' />
                                    {
                                        this.props.pokemons.types.map(function (item, index) {
                                            return (

                                                <Picker.Item key={index} label={item.name} value={item.id} />
                                            )
                                        })
                                    }

                                </Picker>
                            </Form>
                        </View>
                        <View style={styles.formView}>
                            <Icon type='Entypo' name='tree'
                                style={styles.iconStyle}
                            />
                            <Text style={{ marginLeft: 20, marginTop: 15, color: '#BDBDBD', fontSize: 14, }}>Type 3: </Text>
                            <Form style={{ marginLeft: 10 }}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 150, color: 'black' }}
                                    selectedValue={this.state.type3}
                                    onValueChange={this.onValueChangeType3.bind(this)}
                                >
                                    <Picker.Item label='Select Type' value='' />
                                    {
                                        this.props.pokemons.types.map(function (item, index) {
                                            return (

                                                <Picker.Item key={index} label={item.name} value={item.id} />
                                            )
                                        })
                                    }

                                </Picker>
                            </Form>
                        </View>
                        <View style={styles.formView}>
                            <Icon type='Entypo' name='book'
                                style={styles.iconStyle}
                            />
                            <TextInput
                                placeholder='Description'
                                secureTextEntry={false}
                                style={styles.inputStyle}
                                onChangeText={(description) => this.setState({ description })}
                                value={this.state.description}
                            />
                        </View>
                        <View style={styles.formView}>
                            <Icon type='MaterialCommunityIcons' name='radar'
                                style={styles.iconStyle}
                            />
                            <TextInput
                                placeholder='Latitude'
                                secureTextEntry={false}
                                style={styles.inputStyle}
                                onChangeText={(latitude) => this.setState({ latitude })}
                                value={this.state.latitude}
                            />
                        </View>
                        <View style={styles.formView}>
                            <Icon type='MaterialCommunityIcons' name='radar'
                                style={styles.iconStyle}
                            />
                            <TextInput
                                placeholder='Longitude'
                                secureTextEntry={false}
                                style={styles.inputStyle}
                                onChangeText={(longitude) => this.setState({ longitude })}
                                value={this.state.longitude}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 20, alignSelf: 'center' }}>
                        <Button block rounded style={{ backgroundColor: 'blue' }}
                            onPress={() => this.editPokemon()}
                        >
                            <Text>PATCH POKEMON</Text>
                        </Button>
                    </View>
                </Content>
            </Container >
        )
    }
    pokemonPhoto() {
        if (this.state.image_url == '') {
            return (
                <Image source={{ uri: 'http://pedals.id/img/imageEmpty.png' }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
            )
        } else {
            return (
                <Image source={{ uri: this.state.image_url }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        users: state.users,
    }
}
export default connect(mapStateToProps)(PokemonPatch)

const styles = StyleSheet.create({
    contentView: {
        marginLeft: 20,
        marginTop: 5,
        flexDirection: 'column',
        width: 300
    },
    formView: {
        flexDirection: 'row',
        paddingTop: 20,
        borderBottomWidth: 0.5,
        borderColor: '#BDBDBD',
        paddingLeft: 5
    },
    iconStyle: {
        paddingTop: 15,
        color: '#BDBDBD',
        fontSize: 18
    },
    inputStyle: {
        width: 300,
        marginLeft: 10,
        fontSize: 15
    },
    textSub: {
        fontSize: 14,
        color: '#E91E63'
    },
    textSub2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#E91E63'
    }

})
