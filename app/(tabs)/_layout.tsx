import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <Entypo size={28} name="home" color={"black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="conversation"
        options={{
          title: "Conversation",
          tabBarIcon: ({ color }) => (
            <Entypo size={28} name="message" color={"black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="addPost"
        options={{
          title: "AddPost",
          tabBarIcon: ({ color }) => (
            <Entypo name="plus" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profiles"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
