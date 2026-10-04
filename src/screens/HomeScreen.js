import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ClassCard from "../components/ClassCard";
import TaskItem from "../components/TaskItem";

export default function HomeScreen({ navigation, theme, classes, tasks, onToggleTask }) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 600;

  const buttonScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1.0,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const handleOpenDetail = (classItem) => {
    navigation.navigate("ClassDetail", { classItem });
  };

  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[styles.content, { maxWidth: 1000, alignSelf: "center", width: "100%" }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.greetingSub, { color: theme.secondaryText }]}>Good morning,</Text>
        <Text style={[styles.greetingName, { color: theme.text }]}>Leng 👋</Text>
        <Text style={[styles.greetingSummary, { color: theme.primary }]}>
          {classes.length} classes · {tasks.length - completedCount} tasks today
        </Text>
      </View>

      <Pressable
        onPress={() => handleOpenDetail(classes[0])}
        style={({ pressed }) => [
          styles.nextClassCard,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
            opacity: pressed ? 0.92 : 1.0,
          },
        ]}
      >
        <View style={styles.nextClassTop}>
          <Text style={[styles.nextClassBadge, { color: theme.primary }]}>NEXT CLASS</Text>
        </View>

        <Text style={[styles.nextClassTitle, { color: theme.text }]}>
          {classes[0]?.name || "Mobile Development"}
        </Text>

        <View style={styles.nextClassFooter}>
          <Ionicons name="time-outline" size={14} color={theme.secondaryText} />
          <Text style={[styles.nextClassDetail, { color: theme.secondaryText }]}>
            {" 08:00 – 10:00 · Room E4.4"}
          </Text>
        </View>
      </Pressable>

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Today's Classes</Text>
        <Pressable onPress={() => navigation.navigate("Schedule")}>
          <Text style={[styles.seeAll, { color: theme.primary }]}>See All</Text>
        </Pressable>
      </View>

      <Text style={[styles.hintText, { color: theme.secondaryText }]}>
        Long press for details
      </Text>

      <View style={[styles.classesContainer, isLargeScreen && styles.gridTwoColumns]}>
        {classes.map((item) => (
          <ClassCard
            key={item.id}
            item={item}
            theme={theme}
            onLongPress={handleOpenDetail}
            style={isLargeScreen ? styles.gridCard : null}
          />
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleRow}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Today's Tasks</Text>
          <Text style={[styles.taskSummaryText, { color: theme.secondaryText }]}>
            {completedCount} of {tasks.length} completed
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Tasks")}>
          <Text style={[styles.seeAll, { color: theme.primary }]}>See All</Text>
        </Pressable>
      </View>

      {tasks.slice(0, 3).map((item) => (
        <TaskItem key={item.id} item={item} theme={theme} onToggle={onToggleTask} />
      ))}

      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.addButton, { backgroundColor: theme.primaryLight }]}
        >
          <Text style={[styles.addButtonText, { color: theme.primary }]}>+ Add Task</Text>
        </Pressable>
      </Animated.View>
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
  header: {
    marginBottom: 18,
    marginTop: 8,
  },
  greetingSub: {
    fontSize: 15,
    fontWeight: "400",
  },
  greetingName: {
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 2,
  },
  greetingSummary: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
  },
  nextClassCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
  },
  nextClassTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  nextClassBadge: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  nextClassTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  nextClassFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  nextClassDetail: {
    fontSize: 13,
    fontWeight: "500",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    marginTop: 10,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginRight: 10,
  },
  taskSummaryText: {
    fontSize: 13,
    fontWeight: "500",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "600",
  },
  hintText: {
    fontSize: 12,
    marginBottom: 10,
  },
  classesContainer: {
    marginBottom: 14,
  },
  gridTwoColumns: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridCard: {
    width: "48%",
  },
  addButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
