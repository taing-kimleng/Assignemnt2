import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ClassDetailScreen({ route, theme }) {
  const classItem = route.params?.classItem || {
    name: "Mobile Development",
    time: "08:00 - 10:00",
    room: "E4.4",
    teacher: "Voneat PEN",
    topic: "React Native Navigation",
    note: "Remember to bring your laptop and class materials.",
    color: "#2868E8",
    icon: "phone-portrait-outline",
  };

  const accentColor = classItem.color || theme.primary;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[styles.content, { maxWidth: 1000, alignSelf: "center", width: "100%" }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.heroCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={[styles.iconBox, { backgroundColor: accentColor + "15" }]}>
          <Ionicons name={classItem.icon || "book"} size={32} color={accentColor} />
        </View>
        <Text style={[styles.className, { color: theme.text }]}>{classItem.name}</Text>
        <Text style={[styles.timeText, { color: theme.secondaryText }]}>{classItem.time}</Text>
      </View>

      <View style={[styles.detailCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={18} color={theme.secondaryText} style={styles.infoIcon} />
          <View>
            <Text style={[styles.infoLabel, { color: theme.secondaryText }]}>Room</Text>
            <Text style={[styles.infoValue, { color: theme.text }]}>Room {classItem.room.replace("Room ", "")}</Text>
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: theme.border }]} />

        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={18} color={theme.secondaryText} style={styles.infoIcon} />
          <View>
            <Text style={[styles.infoLabel, { color: theme.secondaryText }]}>Teacher</Text>
            <Text style={[styles.infoValue, { color: theme.text }]}>{classItem.teacher}</Text>
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: theme.border }]} />

        <View style={styles.infoRow}>
          <Ionicons name="book-outline" size={18} color={theme.secondaryText} style={styles.infoIcon} />
          <View>
            <Text style={[styles.infoLabel, { color: theme.secondaryText }]}>Today's Topic</Text>
            <Text style={[styles.infoValue, { color: theme.text }]}>
              {classItem.topic || "React Native Navigation"}
            </Text>
          </View>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>Class Note</Text>
      <View style={[styles.noteCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Ionicons name="document-text-outline" size={18} color={theme.primary} style={{ marginRight: 10, marginTop: 2 }} />
        <Text style={[styles.noteText, { color: theme.text }]}>
          {classItem.note || "Remember to bring your laptop."}
        </Text>
      </View>
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
  heroCard: {
    alignItems: "center",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  className: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
    fontWeight: "500",
  },
  detailCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  infoIcon: {
    marginRight: 14,
  },
  infoLabel: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    marginVertical: 4,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
  },
  noteCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
});
