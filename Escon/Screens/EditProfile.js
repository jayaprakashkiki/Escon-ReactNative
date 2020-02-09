import React from 'react';
import { Text, Image, KeyboardAvoidingView, Linking } from 'react-native';
import { Container, Content, Form, Item, Icon, Input, H1, Button, View, Header, Left, Body, Right, Footer, FooterTab, Label } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class EditProfile extends React.Component {
    render() {
        return (

            <LinearGradient colors={['#a83cb0', '#09478c']} style={{ flex: 1 }}>
                <Header style={{ backgroundColor: '#a83cb0' }}>
                    <Left>
                        <Icon name="arrow-back" style={{ color: 'white', padding: 5 }} />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: 'white' }}>Edit Profile</Text>
                    </Body>
                    <Left></Left>
                </Header>



                <Content padder>
                    <KeyboardAvoidingView behavior='position'>
                        <Form style={{ marginTop: 100 }}>
                            <Item stackedLabel>
                                <Label style={{ color: 'white' }} >Name</Label>
                                <Input style={{ color: 'white' }} />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'white' }}>Email ID</Label>
                                <Input style={{ color: 'white' }} />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'white' }}>Phone</Label>
                                <Input style={{ color: 'white' }} keyboardType="numeric" />
                            </Item>

                        </Form>
                        <Button onPress={() => this.props.navigation.navigate('Profile')} bordered light block style={{ margin: 20, borderRadius: 10, marginTop: 40 }}>
                            <Text style={{ alignItems: "center", color: "white" }}>Update</Text>
                        </Button>
                    </KeyboardAvoidingView>
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
                    <FooterTab style={{ backgroundColor: '#a83cb0' }}>
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

export default EditProfile;