import React from 'react';
import { Container, Form } from 'native-base';
 
//screens
import LoginScreen from './Screens/Login';
import DashboardScreen from './Screens/DashBoard';  
import HomeScreen from './Screens/Home';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import ProfileScreen from './Screens/Profile';
import EditProfile from './Screens/EditProfile';
import pre_day_ticket_screen from './Screens/pre_day_ticket';  

export default function App() {
  return (
    <Container style={{ paddingTop: 24 }}>
      <Routes />
    </Container>
  );
}

//route
const AppNavigator = createSwitchNavigator({
  Initial: LoginScreen,
  Home: HomeScreen,
  Dashboard: DashboardScreen,
  Profile: ProfileScreen,
  login: LoginScreen,
  EditProfile: EditProfile,
  pre_day_ticket :pre_day_ticket_screen

},
  {
    initialRouteName: 'Initial',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const Routes = createAppContainer(AppNavigator);

