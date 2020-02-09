import React from 'react';
import { Left, Body, Footer, Thumbnail, Header, FooterTab, Card, CardItem, Content, H1, H2, H5, Icon, H3, Grid, Row, Col, Right, Button, List, ListItem } from 'native-base';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


class ProfileScreen extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#a83cb0', '#09478c']} style={{ flex: 1 }}>

                <Header style={{ backgroundColor: '#a83cb0' }}>
                    <Left>

                        <Icon name="person" style={{ color: 'white', padding: 5 }} />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: 'white' }}>Profile</Text>
                    </Body>
                    <Right style={{ padding: 6 }}>
                        <Icon name='call' style={{ color: 'white' }} />
                    </Right>
                </Header>
                <Content padder>

                    <Card style={{ borderRadius: 20, marginTop: 5 }}>
                        <CardItem style={{ borderRadius: 20 }}>

                            <Body style={{ alignItems: 'center', paddingTop: 5 }}>
                                <Thumbnail large source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5103AQERHOQbT09rDA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=hCsGYVtswYhzEsmRvEto7iNIMFgeGl9dTURv2B57dgI' }}></Thumbnail>
                            </Body>
                        </CardItem>
                        <CardItem style={{ borderRadius: 20 }}>
                            <Body style={{ alignItems: 'center', paddingBottom: 20 }}>
                                <H2 style={{ paddingBottom: 6 }}>Align Associates</H2>
                                <Text style={{ fontSize: 16, paddingBottom: 6 }}>jayaprakashkiki@gmail.com</Text>
                                <Button onPress={()=> this.props.navigation.navigate('EditProfile')} style={{ backgroundColor: '#09478c', marginTop: 10, borderRadius: 30, width: 100, height: 35 }}>
                                    <Text style={{ color: 'white', paddingLeft: 15 }}>Edit Profile</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>


                    <List style={{ marginTop: 10 }}>
                        <ListItem>
                            <Left>

                                <Text style={{ paddingLeft: 10, color: "white" }}>Update Password</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>

                                <Text style={{ paddingLeft: 10, color: "white" }}>Privacy Policy</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button>
                            <Left>

                                <Text style={{ paddingLeft: 10, color: "white" }}>Legal Information</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Button onPress={()=>this.props.navigation.navigate('login')} rounded block style={{ backgroundColor: '#a83cb0' }}><Text style={{ color: 'white' }}>SIGNOUT</Text></Button>
                    </View>
                </Content>
                <Footer style={{ backgroundColor: '#a83cb0' }}>
                    <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                        <Button onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="home" style={{ color: "white" }} />
                            <Text style={{ color: "white" }}>Home</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                        <Button onPress={() => this.props.navigation.navigate('Dashboard')}>
                            <Icon name="pie" style={{ color: "white" }} />
                            <Text style={{ color: "white" }}>Dashboard</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab  style={{ backgroundColor: '#a83cb0' }}>
                        <Button active style={{ backgroundColor: "#85256d" }} onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name="person" style={{ color: "white" }} />
                            <Text style={{ color: "white" }}>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </LinearGradient>
        );
    }
}
export default ProfileScreen;