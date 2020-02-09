import React from "react";
import { Icon, FooterTab, Button, Item, Input, Left, Body, Footer, Header, Card, CardItem, Content, H1, H2, H5, H3, Grid, Row, Col, Right, Container } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
} from "react-native";
export default class Source extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Source Listing",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { textAlign: "center", flex: 1 }
        };
    };
    constructor(props) {
        super(props);
        this.state = { loading: true, dataSource: [] }
    }
    componentDidMount() {
        return fetch('http://182.18.138.67/escon_staging/index.php/api/tech/jobs/162')
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson.tickets

                })
                console.log(dataSource);
                
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    // FlatListItemSeparator = () => {
    //     return (
    //         <View style={{
    //             height: .5,
    //             width: "100%",
    //             backgroundColor: "rgba(0,0,0,0.5)",
    //         }}
    //         />
    //     );
    // }


    renderItem = (data) =>
        <View style={{ margin: 10 }}>
            <Card style={{ borderRadius: 10, marginTop: 20 }}>
                <CardItem header bordered style={{ borderRadius: 10 }}>
                    <Left>
                        <Text>{data.item.request_id}</Text>
                    </Left>
                    <Body>

                    </Body>
                    <Right>
                        <Text>{data.item.date}</Text>
                    </Right>
                </CardItem>
                <CardItem style={{ borderRadius: 10 }}>
                    <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', justifyContent: 'center' }}>{data.item.custName}</Text>
                    </Body>
                </CardItem>
                <CardItem footer bordered style={{ borderRadius: 10 }}>
                    <Left>
                        <Text>{data.item.liftno}</Text>
                    </Left>
                    <Body>
                        <Text>{data.item.category}</Text>
                    </Body>
                    <Right>
                        <Text>{data.item.currStat}</Text>
                    </Right>
                </CardItem>
            </Card>
        </View>


    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }
        return (

            <Container>
                <LinearGradient colors={['#a83cb0', '#09478c']} style={{ flex: 1 }}>
                    <Header style={{ backgroundColor: '#a83cb0' }}>
                        <Left>

                            <Icon name="arrow-back" style={{ color: 'white', padding: 5 }} />
                        </Left>
                        <Body>
                            <Text style={{ fontSize: 15, color: 'white' }}>Pervious Day Ticket</Text>
                        </Body>
                        <Right style={{ padding: 6 }}>
                            <Icon name='call' style={{ color: 'white' }} />
                        </Right>
                    </Header>

                    <View style={styles.container}>
                        <FlatList
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={item => this.renderItem(item)}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
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
            </Container>
        )
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    }
});