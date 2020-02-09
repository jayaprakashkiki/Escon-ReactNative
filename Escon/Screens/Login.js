import React from 'react';
import { Text, Image, AsyncStorage, KeyboardAvoidingView, BackHandler } from 'react-native';
import { Container, Content, Form, Toast, Item, Icon, Input, H1, Button, View, } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

class LoginScreen extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (

      <LinearGradient colors={['#a83cb0', '#09478c']} style={{ flex: 1 }}>
        <Content padder>

          <KeyboardAvoidingView behavior="position">

            <Form style={{ alignItems: "center", paddingTop: 25, margin: 15 }}>
              <Image style={{ width: 180, height: 70, marginBottom: 50, borderRadius: 10 }} source={require('../assets/Images/escon.jpg')}></Image>
              <H1 style={{ color: 'white', marginBottom: 30 }}>Welcome</H1>

              <Item rounded style={{ marginBottom: 30, backgroundColor: 'white' }}>
                <Icon style={{ color: '#6813cc' }} name="person" />
                <Input onChangeText={text => this.setState({ username: text })} placeholder="Username" style={{ color: "black" }} />
              </Item>

              <Item rounded style={{ marginBottom: 10, backgroundColor: 'white' }}>
                <Icon style={{ color: '#6813cc' }} name="key" />
                <Input secureTextEntry={true} onChangeText={text => this.setState({ password: text })} placeholder="Password" style={{ color: "black", shadowColor: 'red', shadowOpacity: 5 }} />
              </Item>
            </Form>


            <Button onPress={this._userSignup} bordered light block style={{ margin: 20, borderRadius: 10 }}>
              <Text style={{ alignItems: "center", color: "white" }}>Login</Text>
            </Button>

            <Text style={{ textAlign: "center", color: 'white' }}>Need Help ?</Text>
          </KeyboardAvoidingView>
        </Content>

      </LinearGradient>




    );


  }


  _userSignup() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch("http://182.18.138.67/escon_staging/index.php/api/tech/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.username,
          password: value.password,
        })
      })
        .then((response) => response.json())
        .then((responseData) => {
          this._onValueChange(STORAGE_KEY, responseData.id_token),
            AlertIOS.alert(
              "Signup Success!",
              "Click the button to get a Chuck Norris quote!"
            )
        })
        .done();
    }
  }

}
export default LoginScreen;