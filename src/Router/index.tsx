import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../pages/Home';
import Icon from '@expo/vector-icons/Ionicons';
import { theme } from '../Style/theme';

const Tab = createBottomTabNavigator();

const IconTab = ({ name, color, size }: any) => {
  return (
    <TouchableOpacity
      style={{
        width: 60,
        height: 60,
        backgroundColor: theme.primaryRed,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      }}
    >
      <Icon name={name} color={theme.primaryYellow} size={size} />
    </TouchableOpacity>
  );
};

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.tabBar,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <IconTab name="add" color={color} size={35} />;
            },
            title: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
