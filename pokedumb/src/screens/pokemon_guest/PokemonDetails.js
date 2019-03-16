import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Footer,
    FooterTab,
    Left,
    Right,
    Body,
    Icon,
    Content,
    Fab,
    Toast
} from 'native-base'
import { StyleSheet, Dimensions, StatusBar, Image, BackHandler, Alert, AsyncStorage, ToastAndroid } from 'react-native'

import { deletePokemon } from '../../publics/redux/actions/pokemons'


class PokemonDetails extends Component {
    constructor(props) {
        super(props)

    }

    async deletePokemon() {
        const val_token = await AsyncStorage.getItem('token')
        if (val_token != null) {
            Alert.alert(
                '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConfirm',
                `Are you sure you want to delete this Pokemon ${this.props.pokemons.details.name}`,
                [
                    {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Yes', onPress: async () => {
                            try {
                                await this.props.dispatch(deletePokemon(this.props.pokemons.details.id))
                                await this.props.navigation.navigate('PokemonTabsScreen')
                                return true
                            }
                            catch (exception) {
                                return false
                            }
                        }
                    },
                ],
                { cancelable: false },
            )
        } else {
            ToastAndroid.show('Please Login to Delete Pokemon', ToastAndroid.SHORT);
            ToastAndroid.showWithGravity(
                'Lets Login or Register in Home Page',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        }
    }

    async moveEditPokemon() {
        const val_token = await AsyncStorage.getItem('token')
        if (val_token != null) {
            this.props.navigation.navigate('PokemonPatch')
        } else {
            ToastAndroid.show('Please Login to Edit Pokemon', ToastAndroid.SHORT);
            ToastAndroid.showWithGravity(
                'Lets Login or Register in Home Page',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        }
    }
    render() {
        const { details } = this.props.pokemons
        return (
            <Container>
                <Content>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ marginTop: 20 }}>
                            <Image source={{ uri: details.image_url }}
                                resizeMode='stretch'
                                style={{ width: 250, height: 250, alignSelf: 'center' }} />
                        </View>
                        <View style={{ marginTop: 20, alignSelf: 'center', borderWidth: 1, borderRadius: 50 }}>
                            <Text style={{ fontSize: 30, marginHorizontal: 30 }}>{details.name}</Text>
                        </View>
                        <View style={{ marginTop: 10, alignSelf: 'center', borderWidth: 1, borderRadius: 50 }}>
                            <Text style={{ marginHorizontal: 20 }}>Category : {details.category.name}</Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', borderWidth: 1, borderRadius: 50 }}>
                            <Text style={{ marginLeft: 20 }}>Type : </Text>
                            <View style={{ marginRight: 20, flexDirection: 'row' }}>
                                {
                                    details.type.map(function (data, idx) {
                                        if (details.type.length == 1) {
                                            return (
                                                <View key={idx}>
                                                    <Text> {data.name}</Text>
                                                </View>
                                            )
                                        } else {
                                            return (
                                                <View key={idx} style={{ borderLeftWidth: 1 }}>
                                                    <Text> {data.name} </Text>
                                                </View>
                                            )
                                        }
                                    })
                                }
                            </View>
                        </View>
                        <Text style={{ marginTop: 20, marginLeft: 10 }}>Description: </Text>
                        <View style={{ marginTop: 10, marginHorizontal: 10, borderWidth: 1, borderRadius: 10 }}>
                            <Text style={{ marginHorizontal: 10 }}>{details.description}</Text>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'red' }}>
                        <Button active vertical onPress={() => this.deletePokemon()}
                            style={{ backgroundColor: 'red' }}
                        >
                            <Icon active type='Entypo' name="trash" />
                            <Text>Delete Pokemon</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button active vertical onPress={() => this.moveEditPokemon()} >
                            <Icon active type='Entypo' name="pencil" />
                            <Text>Edit Pokemon</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
    }
}
export default connect(mapStateToProps)(PokemonDetails)

const styles = StyleSheet.create({

})
