import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import ClassCard from "../components/ClassCard";
import { weeklySchedule } from "../data/mockData";

export default function ScheduleScreen({ navigation, theme }) {
  const [selectedDay, setSelectedDay] = useState("Mon");

  const activeGroup = weeklySchedule.find((g) => g.day === selectedDay) || weeklySchedule[0];

  const handleOpenDetail = (classItem) => {
    navigation.navigate("ClassDetail", { classItem });
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[styles.content, { maxWidth: 1000, alignSelf: "center", width: "100%" }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.screenTitle, { color: theme.text }]}>Weekly Schedule</Text>
      <Text style={[styles.hintText, { color: theme.secondaryText }]}>
        Long press for details
      </Text>

      <View style={[styles.daySelector, { backgroundColor: theme.card, borderColor: theme.border }]}>
        {weeklySchedule.map((group) => {
          const isSelected = selectedDay === group.day;
          return (
            <Pressable
              key={group.day}
              onPress={() => setSelectedDay(group.day)}
              style={[
                styles.dayPill,
                isSelected && { backgroundColor: theme.primary },
              ]}
            >
              <Text
                style={[
                  styles.dayPillText,
                  { color: isSelected ? "#FFFFFF" : theme.secondaryText },
                ]}
              >
                {group.day}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.dayHeaderRow}>
        <Text style={[styles.fullDayTitle, { color: theme.text }]}>{activeGroup.fullDay}</Text>
        <Text style={[styles.classCountText, { color: theme.secondaryText }]}>
          {activeGroup.classes.length} {activeGroup.classes.length === 1 ? "class" : "classes"}
        </Text>
      </View>

      {activeGroup.classes.map((item) => (
        <ClassCard
          key={item.id}
          item={item}
          theme={theme}
          onLongPress={handleOpenDetail}
        />
      ))}
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
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 2,
    marginTop: 8,
  },
  hintText: {
    fontSize: 12,
    marginBottom: 16,
  },
  daySelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 20,
  },
  dayPill: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  dayPillText: {
    fontSize: 13,
    fontWeight: "600",
  },
  dayHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 12,
  },
  fullDayTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  classCountText: {
    fontSize: 13,
    fontWeight: "500",
  },
});
