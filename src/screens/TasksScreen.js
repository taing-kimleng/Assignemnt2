import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import TaskItem from "../components/TaskItem";

export default function TasksScreen({ theme, tasks, onToggleTask }) {
  const [activeTab, setActiveTab] = useState("All");

  const completedCount = tasks.filter((t) => t.done).length;

  const filteredTasks = tasks.filter((t) => {
    if (activeTab === "Today") return !t.done && t.due.includes("today");
    if (activeTab === "Upcoming") return !t.done && t.due.includes("tomorrow");
    if (activeTab === "Completed") return t.done;
    return true;
  });

  const tabs = ["All", "Today", "Upcoming", "Completed"];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[styles.content, { maxWidth: 1000, alignSelf: "center", width: "100%" }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerRow}>
        <Text style={[styles.screenTitle, { color: theme.text }]}>Tasks</Text>
        <View style={[styles.progressPill, { backgroundColor: theme.primaryLight }]}>
          <Text style={[styles.progressText, { color: theme.primary }]}>
            {completedCount} / {tasks.length} completed
          </Text>
        </View>
      </View>

      <Text style={[styles.hintText, { color: theme.secondaryText }]}>
        👉 Swipe right to mark task complete
      </Text>

      <View style={[styles.tabsRow, { borderBottomColor: theme.border }]}>
        {tabs.map((tab) => {
          const isSelected = activeTab === tab;
          return (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabItem,
                isSelected && { borderBottomColor: theme.primary, borderBottomWidth: 2 },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: isSelected ? theme.primary : theme.secondaryText },
                  isSelected && { fontWeight: "700" },
                ]}
              >
                {tab}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {filteredTasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: theme.secondaryText }]}>No tasks found.</Text>
        </View>
      ) : (
        filteredTasks.map((item) => (
          <TaskItem key={item.id} item={item} theme={theme} onToggle={onToggleTask} />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
    marginTop: 8,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  progressPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  progressText: {
    fontSize: 12,
    fontWeight: "600",
  },
  hintText: {
    fontSize: 12,
    marginBottom: 16,
  },
  tabsRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  tabItem: {
    paddingVertical: 10,
    marginRight: 20,
    paddingHorizontal: 4,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  emptyContainer: {
    paddingVertical: 30,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
