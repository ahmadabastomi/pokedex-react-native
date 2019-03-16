import React, { Component } from 'react'
import { View, Container, Text, Icon } from 'native-base'
import { Dimensions, StatusBar, Image, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class PokemonSplash extends Component {

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        setTimeout(() => {
            this.moveMainPage()
        }, 2500)
    }

    moveMainPage() {
        this.props.navigation.navigate('StackNavigator')
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#FDFDFD" barStyle="light-content" hidden={true} />
                <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: '#FDFDFD' }}>
                    <View style={{ alignSelf: 'center', marginTop: 200 }}>
                        <Image source={require('../../../assets/pokemon_logo.png')}
                            resizeMode='stretch'
                            style={{ width: 200, height: 100 }}
                        />

                    </View>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        pokemons: state.pokemons,
    }
}
export default connect(mapStateToProps)(PokemonSplash)