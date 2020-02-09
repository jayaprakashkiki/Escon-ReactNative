import React from 'react';
import { Left, Body, Header, Right, Icon, } from 'native-base';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class HeaderScreen extends React.Component {
    render() {
        return (
            <View>
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

            </View>

        );
    }
}
export default HeaderScreen;