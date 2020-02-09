import React from 'react';
import {Icon, FooterTab, Button, Left, Body, Footer, Header, Card, CardItem, Content, H1, H2, H5, H3, Grid, Row, Col, Right } from 'native-base';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




class DashboardScreen extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#a83cb0', '#09478c']} style={{ flex: 1 }}>
                <Header style={{ backgroundColor: '#a83cb0' }}>
                    <Left>

                        <Icon name="pie" style={{ color: 'white', padding: 5 }} />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: 'white' }}>Dashboard</Text>
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
                        <Grid style={{ paddingTop: 40 }}>
                            <Col>
                                <Card style={{ height: 110, margin: 10,borderRadius:10 }}>
                                    <CardItem bordered style={{ borderRadius: 10 }}>
                                        <Text>Todays Ticket</Text>
                                    </CardItem>
                                    <CardItem button style={{ borderRadius: 10 }}>
                                        <H1>83</H1>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: 110, margin: 10,borderRadius:10  }}>
                                    <CardItem bordered style={{ borderRadius: 10 }}>
                                        <Text>Previous Day Ticket</Text>
                                    </CardItem>
                                    <CardItem button onPress={()=>this.props.navigation.navigate('pre_day_ticket')} style={{ borderRadius: 10 }}>
                                        <H1>1328</H1>
                                    </CardItem>

                                </Card>
                            </Col>
                        </Grid>

                        <Grid style={{  paddingTop: 5 }}>
                            <Col>
                                <Card style={{ height: 110, margin: 10,borderRadius:10  }}>
                                    <CardItem bordered style={{ borderRadius: 10 }}>
                                        <Text>Paused Ticket</Text>
                                    </CardItem>
                                    <CardItem button style={{ borderRadius: 10 }}>
                                        <H1>38</H1>
                                    </CardItem>

                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: 110, margin: 10,borderRadius:10  }}>
                                    <CardItem bordered style={{ borderRadius: 10 }}>
                                        <Text>Pending Ticket</Text>
                                    </CardItem>
                                    <CardItem button style={{ borderRadius: 10 }}>
                                        <H1>134</H1>
                                    </CardItem>

                                </Card>
                            </Col>
                        </Grid>
                        <Grid>
                            <Row style={{ paddingTop: 5 }}>
                                <Card style={{ width: "100%",borderRadius:10  }}>
                                    <CardItem button style={{ borderRadius: 10 }}>
                                        <Text>Closed Tickets</Text>
                                        <Right>
                                            <Text style={{ fontSize: 20 }}>329</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Row>
                            <Row style={{ paddingTop: 5 }}>
                                <Card style={{ width: "100%",borderRadius:10  }} >
                                    <CardItem button style={{ borderRadius: 10 }}>
                                        <Text>View Teams</Text>
                                        <Right>
                                            <Text style={{ fontSize: 20 }}>89</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Row>

                        </Grid>

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
                        <Button active style={{ backgroundColor: "#85256d" }} onPress={() => this.props.navigation.navigate('Dashboard')}>
                            <Icon name="pie" style={{ color: "white" }} />
                            <Text style={{ color: "white" }}>Dashboard</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                        <Button onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name="person" style={{ color: "white" }} />
                            <Text style={{ color: "white" }}>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </LinearGradient>
        );
    }
}
export default DashboardScreen;