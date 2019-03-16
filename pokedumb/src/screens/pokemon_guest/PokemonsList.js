import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'

import { FlatList, Image, StyleSheet, ToastAndroid, AsyncStorage } from 'react-native'
import {
    Container,
    Content,
    View,
    Text,
    List,
    ListItem,
    Left,
    Header,
    Icon,
    Button,
    Input,
    Item,
    Body,
    Right,
    Picker,
    Form,
    Fab,
    Drawer,
    Root,
} from 'native-base'

import { getPokemons, getPokemon, getCategories, getTypes } from '../../publics/redux/actions/pokemons'
import SideBar from './SideBar'
import store from '../../publics/redux/store'

class PokemonsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: '',
            type: '',
            limit: 10,
            types: '',
            selected: 0,
        }
    }


    async onValueChangeCategory(value) {
        await this.setState({
            category: value
        })
        await this.getData(this.state.name, this.state.category, this.state.types, this.state.limit)
    }

    async onValueChangeType(value) {
        if (value != '') {
            await this.setState({
                type: value,
                types: `[${value}]`,
            })
            await this.getData(this.state.name, this.state.category, this.state.types, this.state.limit)
        } else {
            await this.setState({
                type: value,
                types: value,
            })
            await this.getData(this.state.name, this.state.category, this.state.types, this.state.limit)
        }
    }

    async onValueChange(value) {
        await this.setState({
            limit: value
        })
        await this.getData(this.state.name, this.state.category, this.state.types, this.state.limit)
    }

    componentDidMount() {
        this.getCategory()
        this.getTypes()
        this.getData(this.state.name, this.state.category, this.state.types, this.state.limit)
    }

    getData = async (name, category, type, limit) => {
        await this.props.dispatch(getPokemons(name, category, type, limit))
    }

    getCategory = async () => {
        await this.props.dispatch(getCategories())
    }

    getTypes = async () => {
        await this.props.dispatch(getTypes())
    }

    _keyExtractor = (item, index) => item.id.toString()

    async getDetails(id) {
        await this.props.dispatch(getPokemon(id))
        await this.props.navigation.navigate('PokemonDetails')
    }

    async moveToAddPokemon() {
        const val_token = await AsyncStorage.getItem('token')
        if (val_token != null) {
            this.props.navigation.navigate('PokemonAdd')
        } else {
            ToastAndroid.show('Please Login to Add New Pokemon', ToastAndroid.SHORT);
            ToastAndroid.showWithGravity(
                'Lets Login or Register',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        }
    }

    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content=
                {
                    <Provider store={store}>
                        <Root>
                            <SideBar navigate={this.props.navigation.navigate} />
                        </Root>
                    </Provider>
                }
                onClose={() => closeDrawer()} >
                <Container>
                    <Header searchBar rounded>
                        <View style={{ backgroundColor: 'white', width: 40, height: 40, marginTop: 8, borderRadius: 5 }}>
                            <Icon type='FontAwesome5' name='align-justify' style={{ fontSize: 20, alignSelf: 'center', marginTop: 10 }}
                                onPress={() => openDrawer()}
                            />
                        </View>
                        <Item style={{ marginLeft: 10, marginRight: 10 }}>
                            <Icon name="ios-search" />
                            <Input placeholder="Search name"
                                onChangeText={(name) => this.getData(name, this.state.category, this.state.types, this.state.limit)}
                            />
                            <Icon type='MaterialCommunityIcons' name="pokeball" />
                        </Item>
                        <View style={{ backgroundColor: 'white', width: 80, height: 40, marginTop: 8, borderRadius: 5 }}>
                            <Form>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 80, height: 40, alignSelf: 'center' }}
                                    selectedValue={this.state.limit}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="10" value={10} />
                                    <Picker.Item label="20" value={20} />
                                    <Picker.Item label="30" value={30} />
                                    <Picker.Item label="40" value={40} />
                                    <Picker.Item label="50" value={50} />
                                </Picker>
                            </Form>
                        </View>
                    </Header>
                    <View style={{ flexDirection: 'row', backgroundColor: '#673AB7' }}>
                        <View style={{ marginLeft: 10 }}>
                            <Form>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 180, color: 'white' }}
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
                        <View style={{ marginLeft: 10 }}>
                            <Form>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={{ width: 150, color: 'white' }}
                                    selectedValue={this.state.type}
                                    onValueChange={this.onValueChangeType.bind(this)}
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
                    </View>
                    <Content>
                        <View style={styles.viewParent}>
                            <List>
                                <FlatList
                                    style={{}}
                                    data={this.props.pokemons.data}
                                    keyExtractor={this._keyExtractor}
                                    refreshing={this.props.pokemons.isLoading}
                                    onRefresh={this.getData}
                                    numColumns={1}
                                    horizontal={false}
                                    renderItem={({ item, index }) =>
                                        (
                                            <ListItem
                                                button={true}
                                                onPress={() => this.getDetails(item.id)}
                                            >
                                                <Left>
                                                    <Image source={{ uri: item.image_url }}
                                                        resizeMode='stretch'
                                                        style={styles.imagePokemon}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text>{item.name}</Text>
                                                    <Text style={{ marginTop: 5 }}>{item.category.name}</Text>
                                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                        {
                                                            item.type.map(function (data, idx) {
                                                                return (
                                                                    <View key={idx}
                                                                        style={{ borderWidth: 1, borderRadius: 50, marginLeft: 10 }}
                                                                    >
                                                                        <Text style={{ marginHorizontal: 5 }}>{data.name}</Text>
                                                                    </View>
                                                                )
                                                            })
                                                        }
                                                    </View>
                                                </Body>
                                                <Right>
                                                    <Icon name='ios-arrow-forward' />
                                                </Right>
                                            </ListItem>
                                        )} />
                            </List>
                        </View>
                    </Content>
                    <Fab
                        active={true}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.moveToAddPokemon()}>
                        <Icon name="add" />
                    </Fab>
                </Container>
            </Drawer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
    }
}
export default connect(mapStateToProps)(PokemonsList)

const styles = StyleSheet.create({
    viewParent: {
        marginTop: 10,
    },
    imagePokemon: {
        height: 72,
        width: 67,

    }

})