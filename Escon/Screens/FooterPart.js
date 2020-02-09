import React from 'react';
import {Footer, Icon, Content, FooterTab, Button} from 'native-base';
import {Text, View } from "react-native";

class FooterScreen extends React.Component {
    render() {
        return (
               <View>
                   <Content/>
                <Footer style={{ backgroundColor: '#a83cb0' }}>
                   <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                            <Button>
                                <Icon name="home" style={{color:"white"}}/>
                                <Text style={{color:"white"}}>Home</Text>
                            </Button>
                   </FooterTab>
                   <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                            <Button onPress={() => this.props.navigation.navigate('Dashboard')}>
                                <Icon name="pie" style={{color:"white"}}/>
                                <Text style={{color:"white"}}>Dashboard</Text>
                            </Button>
                   </FooterTab>
                   <FooterTab style={{ backgroundColor: '#a83cb0' }}>
                            <Button>
                                <Icon name="person" style={{color:"white"}}/>
                                <Text style={{color:"white"}}>Profile</Text>
                            </Button>
                   </FooterTab>
                </Footer>
         
               </View>
                
        );
    }
}
export default FooterScreen;