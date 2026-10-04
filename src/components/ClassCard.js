import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// ClassCard component - neutral card design with small colored accent icon
export default function ClassCard({ item, theme, onLongPress, style }) {
  const accentColor = item.color || theme.primary;

  return (
    <Pressable
      // Gesture 1: Long Press to open Class Detail screen
      onLongPress={() => onLongPress && onLongPress(item)}
      delayLongPress={400}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
          opacity: pressed ? 0.9 : 1.0,
        },
        style,
      ]}
    >
      <View style={[styles.iconBox, { backgroundColor: accentColor + "15" }]}>
        <Ionicons name={item.icon || "book-outline"} size={20} color={accentColor} />
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.timeText, { color: theme.secondaryText }]}>{item.time}</Text>
        <Text style={[styles.className, { color: theme.text }]} numberOfLines={1}>
          {item.name}
        </Text>
      </View>

      <View style={[styles.roomPill, { backgroundColor: theme.isDark ? "#334155" : "#F1F5F9" }]}>
        <View style={[styles.dot, { backgroundColor: accentColor }]} />
        <Text style={[styles.roomText, { color: theme.secondaryText }]}>
          {item.room.replace("Room ", "")}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 10,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  timeText: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 2,
  },
  className: {
    fontSize: 15,
    fontWeight: "600",
  },
  roomPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
  roomText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
