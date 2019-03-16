import React, { Component } from 'react'
import { AsyncStorage, BackHandler, Alert, Dimensions, Image } from 'react-native'
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps'
import Geocoder from 'react-native-geocoder'
import {
    Container,
    Content,
    View,
    Text,
    Button,
    Header,
    Left,
    Body,
    Right,
    Icon,
    Title
} from 'native-base'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = -6.21462
const LONGITUDE = 106.84513
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const MY_KEY = 'AIzaSyA-XW8f56W4TgL0joEoZEcrrpZP0Qxis7g'

class PokemonMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            location: [],
        }
    }

    async getLocation() {
        const { data } = this.props.pokemons
        for (let i = 0; i < data.length; i++) {
            var Coordinate = {
                lat: Number(data[i].latitude),
                lng: Number(data[i].longitude)
            }
            Geocoder.fallbackToGoogle(MY_KEY);
            let location = await Geocoder.geocodePosition(Coordinate)
            if (this.state.location.length == 0) {
                this.setState({
                    location: [location[0].formattedAddress]
                })
            } else {
                this.setState({
                    location: [...this.state.location, location[0].formattedAddress]
                })
            }
        }
    }

    componentWillMount() {
        this.getLocation()
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title style={{ marginLeft: 20 }}>Pokemon Map</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ width: '100%', height: '100%' }}>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ width: '100%', height: Dimensions.get('window').height }}
                            initialRegion={this.state.region}
                        >
                            {
                                this.props.pokemons.data.map(function (data, index) {
                                    return (
                                        <Marker
                                            key={index}
                                            coordinate={
                                                {
                                                    latitude: Number(data.latitude),
                                                    longitude: Number(data.longitude),
                                                    latitudeDelta: LATITUDE_DELTA,
                                                    longitudeDelta: LONGITUDE_DELTA,
                                                }}
                                        >
                                            <Image source={{ uri: data.image_url }}
                                                style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1, borderColor: 'blue' }}
                                            />
                                            <Callout>
                                                <View style={{ width: 300, height: 90 }}>
                                                    <Text>Pokemon: {data.name}</Text>
                                                    <Text>Location: {this.state.location[index]}</Text>
                                                </View>
                                            </Callout>
                                        </Marker>
                                    )

                                }, this)
                            }
                        </MapView>
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        users: state.users,
    }
}
export default connect(mapStateToProps)(PokemonMap)