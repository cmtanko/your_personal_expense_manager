/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from './components/Dashboard';

import LockPage from './components/LockPage';

import SettingPage from './components/SettingPage';
import ReportPage from './components/ReportPage';

import RecordAddExpense from './components/Dashboard/RecordAddExpense';
import RecordAddIncome from './components/Dashboard/RecordAddIncome';
import RecordAddTransfer from './components/Dashboard/RecordAddTransfer';

import AccountPage from './components/AccountPage';
import AccountAdd from './components/AccountPage/AccountAdd';
import AccountList from './components/AccountPage/AccountList';

import CategoryPage from './components/CategoryPage';
import CategoryAdd from './components/CategoryPage/CategoryAdd';
import CategoryList from './components/CategoryPage/CategoryList';
// import {Header, Button} from 'react-native-elements';

import {COLOR_DARK_BLUE} from './styles/common';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLOR_DARK_BLUE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerLeft: ({color, size}) => (
            <MaterialCommunityIcons
              name="menu"
              color="#fff"
              size={23}
              style={{paddingLeft: 8}}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen name="RecordAddIncome" component={RecordAddIncome} />
      <Stack.Screen name="RecordAddExpense" component={RecordAddExpense} />
      <Stack.Screen name="RecordAddTransfer" component={RecordAddTransfer} />
      <Stack.Screen name="CategoryAdd" component={CategoryAdd} />
    </Stack.Navigator>
  );
};

const AccountStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Accounts',
        headerStyle: {
          backgroundColor: COLOR_DARK_BLUE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Account"
        options={{
          headerLeft: ({color, size}) => (
            <MaterialCommunityIcons
              name="menu"
              color="#fff"
              size={23}
              style={{paddingLeft: 8}}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
        component={AccountPage}
      />
      <Stack.Screen name="AccountAdd" component={AccountAdd} />
      <Stack.Screen name="AccountList" component={AccountList} />
    </Stack.Navigator>
  );
};

const CategoryStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLOR_DARK_BLUE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Category"
        component={CategoryPage}
        options={{
          headerLeft: ({color, size}) => (
            <MaterialCommunityIcons
              name="menu"
              color="#fff"
              size={23}
              style={{paddingLeft: 8}}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen name="CategoryAdd" component={CategoryAdd} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
    </Stack.Navigator>
  );
};

const ReportStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Reports',
        headerStyle: {
          backgroundColor: COLOR_DARK_BLUE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: ({color, size}) => (
          <MaterialCommunityIcons
            name="menu"
            color="#fff"
            size={23}
            style={{paddingLeft: 8}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="Report" component={ReportPage} />
    </Stack.Navigator>
  );
};

const SettingStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: 'Settings',
        headerStyle: {
          backgroundColor: COLOR_DARK_BLUE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: ({color, size}) => (
          <MaterialCommunityIcons
            name="menu"
            color="#fff"
            size={23}
            style={{paddingLeft: 8}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="Setting" component={SettingPage} />
    </Stack.Navigator>
  );
};

const LockScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LockedScreen" component={LockPage} />
    </Stack.Navigator>
  );
};

const HomeDrawer = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      overlayColor="transparent"
      drawerType="slide"
      drawerStyle={{width: '56%'}}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Accounts"
        component={AccountStack}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoryStack}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="shape" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Report"
        component={ReportStack}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chart-bar"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStack}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

function App({locked}) {
  const [isAppLocked, setAppLocked] = useState(true);

  useEffect(() => {
    setAppLocked(!!locked);
  }, [locked]);

  return (
    <NavigationContainer>
      {isAppLocked ? <LockScreen /> : <HomeDrawer />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    locked: state.backup.locked,
  };
};

export default connect(mapStateToProps, null)(App);
