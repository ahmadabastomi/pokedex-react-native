import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Image,
    AsyncStorage,
    Alert,
    TextInput,
    StyleSheet
} from 'react-native';

import { Content, View, Text, Button, Toast, Icon } from 'native-base';

import { postLogin } from '../../publics/redux/actions/users'

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: null,
            email: '',
            password: '',
        }
    }
    componentWillMount() {
        this.checkToken()
    }
    async checkToken() {
        const val_token = await AsyncStorage.getItem('token')
        this.setState({
            token: val_token
        })
    }

    async loginAuth() {
        try {
            await this.props.dispatch(postLogin({
                email: this.state.email,
                password: this.state.password
            }))
            if (this.props.users.data.message == undefined) {
                //await AsyncStorage.setItem('id', (this.props.users.data.id).toString())
                await AsyncStorage.setItem('token', this.props.users.data.token)
                this.setState({
                    token: this.props.users.data.token
                })
                Toast.show({
                    text: 'Login Success',
                    position: "top",
                    type: "success",
                    textStyle: { textAlign: 'center' }

                })
                this.props.navigate('PokemonTabsScreen')
            }
            else {
                Toast.show({
                    text: 'Wrong Username or Password',
                    position: "top",
                    type: "danger",
                    textStyle: { textAlign: 'center' }

                })
            }
        } catch (error) {
            Toast.show({
                text: 'Wrong Username or Password ',
                position: "top",
                type: "danger",
                textStyle: { textAlign: 'center' }

            })
        }

    }


    logoutAccount() {
        Alert.alert(
            '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConfirm',
            `Are you sure you want to Logout?`,
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes', onPress: async () => {
                        try {
                            await AsyncStorage.removeItem('token')
                            this.setState({
                                token: null
                            })
                            this.props.navigate('PokemonTabsScreen')
                            Toast.show({
                                text: "Account Logout Success",
                                position: "top",
                                type: 'success',
                                textStyle: { textAlign: 'center' }
                            })
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
    }

    moveRegisterPage() {
        this.props.navigate('PokemonRegister')
    }
    render() {
        return (
            <Content style={{ backgroundColor: '#FFFFFF' }}>
                <View style={{ marginTop: 40 }}>
                    <Image source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
                        style={{ width: 100, height: 100, borderRadius: 100, alignSelf: 'center' }} />
                </View>
                {(this.state.token == null) &&
                    <View style={{ marginTop: 30, alignSelf: 'center', flexDirection: 'column' }}>
                        <View style={styles.contentView}>
                            <View style={{ marginLeft: 108.5 }}>
                                <Text style={{ fontSize: 20, color: '#E91E63' }}>Sign In</Text>
                            </View>
                            <View style={styles.formView}>
                                <Icon type='AntDesign' name='mail'
                                    style={styles.iconStyle}
                                />
                                <TextInput
                                    placeholder='Email'
                                    style={styles.inputStyle}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                />
                            </View>
                            <View style={styles.formView}>
                                <Icon type='SimpleLineIcons' name='lock'
                                    style={styles.iconStyle}
                                />
                                <TextInput
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    style={styles.inputStyle}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                />
                            </View>
                            <View style={{ marginTop: 20, alignSelf: 'center' }}>
                                <Button rounded style={{ backgroundColor: 'blue' }}
                                    onPress={() => this.loginAuth()}
                                >
                                    <Text>SIGN IN</Text>
                                </Button>
                            </View>
                            <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={styles.textSub}>Don't Have an Account? </Text>
                                <Text style={styles.textSub2}
                                    onPress={() => this.moveRegisterPage()}
                                >Sign Up</Text>
                            </View>
                        </View>
                    </View>

                }
                {(this.state.token != null) &&
                    <View>
                        <View style={{ marginTop: 30, alignSelf: 'center' }}>
                            <Text>Hi Tommy Wijaya!</Text>
                        </View>
                        <View style={{ marginTop: 10, alignSelf: 'center' }}>
                            <Text>ahmadabastomi@gmail.com</Text>
                        </View>
                        <View style={{ marginTop: 30, alignSelf: 'center' }}>
                            <Button rounded
                                onPress={() => this.logoutAccount()}
                            >
                                <Text>
                                    LOGOUT
                        </Text>
                            </Button>
                        </View>
                    </View>
                }
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        users: state.users,
    }
}
export default connect(mapStateToProps)(SideBar)

const styles = StyleSheet.create({
    contentView: {
        marginLeft: 20,
        marginTop: 60,
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

