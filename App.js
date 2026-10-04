import React, { useState } from "react";
import { useColorScheme, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Import theme configuration and mock data
import { lightTheme, darkTheme } from "./src/constants/theme";
import { initialClasses, initialTasks } from "./src/data/mockData";

// Import app screens
import HomeScreen from "./src/screens/HomeScreen";
import ScheduleScreen from "./src/screens/ScheduleScreen";
import TasksScreen from "./src/screens/TasksScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ClassDetailScreen from "./src/screens/ClassDetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tab Navigator Component strictly matching reference template icons
function BottomTabs({ theme, classes, tasks, onToggleTask, appearanceMode, setAppearanceMode }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Clean header matching the reference screen design
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondaryText,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          else if (route.name === "Schedule") iconName = focused ? "calendar" : "calendar-outline";
          else if (route.name === "Tasks") iconName = focused ? "checkbox" : "checkbox-outline";
          else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home">
        {(props) => (
          <HomeScreen
            {...props}
            theme={theme}
            classes={classes}
            tasks={tasks}
            onToggleTask={onToggleTask}
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Schedule">
        {(props) => <ScheduleScreen {...props} theme={theme} />}
      </Tab.Screen>

      <Tab.Screen name="Tasks">
        {(props) => (
          <TasksScreen
            {...props}
            theme={theme}
            tasks={tasks}
            onToggleTask={onToggleTask}
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Profile">
        {(props) => (
          <ProfileScreen
            {...props}
            theme={theme}
            appearanceMode={appearanceMode}
            setAppearanceMode={setAppearanceMode}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// Main Root Component
export default function App() {
  const systemColorScheme = useColorScheme();

  const [appearanceMode, setAppearanceMode] = useState("System"); // "Light" | "Dark" | "System"
  const [classes] = useState(initialClasses);
  const [tasks, setTasks] = useState(initialTasks);

  const isDarkMode =
    appearanceMode === "Dark" ||
    (appearanceMode === "System" && systemColorScheme === "dark");

  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.primary,
          headerTitleStyle: { color: theme.text, fontWeight: "700" },
        }}
      >
        <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
          {(props) => (
            <BottomTabs
              {...props}
              theme={theme}
              classes={classes}
              tasks={tasks}
              onToggleTask={handleToggleTask}
              appearanceMode={appearanceMode}
              setAppearanceMode={setAppearanceMode}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="ClassDetail"
          options={{ title: "Class Details", headerBackTitle: "Back" }}
        >
          {(props) => <ClassDetailScreen {...props} theme={theme} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
