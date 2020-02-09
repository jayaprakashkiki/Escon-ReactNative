import React from 'react';
import { Container, Header,Left, Body, Footer,FooterTab,Icon, Card, CardItem, Content, H1, H2, H5, H3, Grid, Row, Col, Right, Button } from 'native-base';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import HeaderScreen from './HeaderPart';
import FooterScreen from './FooterPart';
class HomeScreen extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#a83cb0', '#09478c']} style={{ flex: 1 }}>
                 <Header style={{ backgroundColor: '#a83cb0' }}>
                    <Left>
                       
                        <Icon name="home" style={{ color: 'white', padding: 5 }} />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: 'white' }}>Home</Text>
                    </Body>
                    <Right style={{ padding: 6 }}>
                        <Icon name='call' style={{ color: 'white' }} />
                    </Right>
                </Header>

                <Content padder>
                    <View>
                        <H2 style={{ textAlign: 'center', paddingTop: 40, color: "white" }}>Align Associate</H2>
                    </View>
                    <View>
                        <Card style={{ marginTop: 40, borderRadius: 10, marginBottom: 10 }}>
                            <CardItem header bordered style={{ borderRadius: 10 }}>
                                <Text style={{ fontSize: 15, color: '#a83cb0' }}>Attendance</Text>
                                <Body />
                                <Left>
                                    <Text style={{ fontSize: 15 }}>10-12-2020</Text>
                                </Left>
                            </CardItem>
                            <CardItem style={{ borderRadius: 10, paddingBottom: 40 }}>
                                <Grid>
                                    <Col style={{ height: 100, margin: 10 }}>
                                        <H3 style={{ paddingBottom: 10 }}>Start Time</H3>
                                        <Text style={{ fontSize: 18, paddingBottom: 10 }}>09:22 AM</Text>
                                        <Button style={{ borderRadius: 5 }}>
                                            <Text style={{ alignItems: "center", paddingLeft: 30, textAlign: 'right', color: "white" }}>CHECK-IN</Text>
                                        </Button>
                                    </Col>
                                    <Col style={{ height: 100, margin: 10 }}>
                                        <H3 style={{ paddingBottom: 10 }}>End Time</H3>
                                        <Text style={{ fontSize: 18, paddingBottom: 10 }}>08:22 PM</Text>
                                        <Button style={{ borderRadius: 5 }}>
                                            <Text style={{ alignItems: "center", paddingLeft: 25, color: "white" }}>CHECK-OUT</Text>
                                        </Button>

                                    </Col>
                                </Grid>
                            </CardItem>

                        </Card>
                        <Card style={{ width: "100%", borderRadius: 8, marginBottom: 10 }} >
                            <CardItem button style={{ borderRadius: 8 }}>
                                <Text>Todays Ticket</Text>
                                <Right>
                                    <Text style={{ fontSize: 20 }}>89</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={{ width: "100%", borderRadius: 8 }} >
                            <CardItem button style={{ borderRadius: 8 }}>
                                <Text>Total Ticket</Text>
                                <Right>
                                    <Text style={{ fontSize: 20 }}>89</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>

                </Content>
                <Footer style={{ backgroundColor: '#a83cb0' }}>
                   <FooterTab style={{ backgroundColor: "red" }}>
                            <Button active style={{ backgroundColor: "#85256d" }} onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name="home" style={{color:"white"}}/>
                                <Text style={{color:"white"}}>Home</Text>
                            </Button>
                   </FooterTab>
                   <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                            <Button  onPress={() => this.props.navigation.navigate('Dashboard')}>
                                <Icon name="pie" style={{color:"white"}}/>
                                <Text style={{color:"white"}}>Dashboard</Text>
                            </Button>
                   </FooterTab>
                   <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                            <Button onPress={() => this.props.navigation.navigate('Profile')}>
                                <Icon name="person" style={{color:"white"}}/>
                                <Text style={{color:"white"}}>Profile</Text>
                            </Button>
                   </FooterTab>
                </Footer>
            </LinearGradient>
        );
    }
}

export default HomeScreen;