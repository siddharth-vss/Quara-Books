/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Audio, BookMark, HomeScreen, ProfileScreen, TopCharts } from './screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
// import { useNavigation, DrawerActions } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Home = () => {
    // const navigation = useNavigation();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, size }) => {
                        let iconName;
                        let colour;
                        if (route.name === 'HomeScreen') {
                            iconName = focused ? 'home' : 'home-outline';
                            colour = focused ? '#C67C4E' : 'grey';
                        } else if (route.name === 'ProfileScreen') {
                            iconName = focused ? 'person' : 'person-outline';
                            colour = focused ? '#C67C4E' : 'grey';

                        } else if (route.name === 'BookMarks') {
                            iconName = focused ? 'bookmark' : 'bookmark-outline';
                            colour = focused ? '#C67C4E' : 'grey';

                        } else if (route.name === 'AudioBook') {
                            iconName = focused ? 'mic' : 'mic-outline';
                            colour = focused ? '#C67C4E' : 'grey';
                        } else if (route.name === 'TopCharts') {
                            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                            colour = focused ? '#C67C4E' : 'grey';
                        }
                        return <Ionicons name={iconName || 'question'} size={size} color={colour} />;
                    },
                    // headerLeft: () => {
                    //     return (
                    //         <Ionicons
                    //             onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    //             name="menu"
                    //             size={35}
                    //             color="#FFFFFF"
                    //         />
                    //     );
                    // },
                    headerStyle: {
                        backgroundColor: '#C67C4E',
                    },
                    headerTitle: () => {
                        let Path;
                        if (route.name === 'HomeScreen') {
                            Path = 'Home';
                        } else if (route.name === 'ProfileScreen') {
                            Path = 'Profile';
                        } else if (route.name === 'BookMarks') {
                            Path = 'Saved';
                        } else if (route.name === 'AudioBook') {
                            Path = 'Audio Books';
                        } else if (route.name === 'TopCharts') {
                            Path = 'Top Books';
                        }
                        return <Text style={{ fontWeight: 'bold',color: '#fff',fontSize: 18 }} >{Path}</Text>;
                    },
                    headerTitleAlign: 'center',
                    tabBarLabel: ({ focused, color }) => {
                        let Path;
                        if (route.name === 'HomeScreen') {
                            Path = 'Home';
                            color = focused ? '#C67C4E' : 'grey';
                        } else if (route.name === 'ProfileScreen') {
                            color = focused ? '#C67C4E' : 'grey';
                            Path = 'Profile';
                        } else if (route.name === 'BookMarks') {
                            Path = 'Saved';
                            color = focused ? '#C67C4E' : 'grey';
                        } else if (route.name === 'AudioBook') {
                            color = focused ? '#C67C4E' : 'grey';
                            Path = 'Audio';
                        } else if (route.name === 'TopCharts') {
                            Path = 'Top';
                            color = focused ? '#C67C4E' : 'grey';
                        }
                        return <Text style={{ color: color }} >{Path}</Text>;
                    },
                })}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            {/* <Tab.Screen name="TopCharts" component={TopCharts} />
            <Tab.Screen name="AudioBook" component={Audio} /> */}
            <Tab.Screen name="BookMarks" component={BookMark} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default Home;

