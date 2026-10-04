import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Switch, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// ProfileScreen with realistic student details & theme switcher
export default function ProfileScreen({ theme, appearanceMode, setAppearanceMode }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const options = [
    { label: "Light", value: "Light", icon: "sunny-outline" },
    { label: "Dark", value: "Dark", icon: "moon-outline" },
    { label: "System", value: "System", icon: "desktop-outline" },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={[styles.content, { maxWidth: 1000, alignSelf: "center", width: "100%" }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.screenTitle, { color: theme.text }]}>Profile</Text>

      {/* Student Profile Info Card */}
      <View style={[styles.profileCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <Text style={styles.avatarText}>L</Text>
        </View>

        <Text style={[styles.userName, { color: theme.text }]}>Leng</Text>
        <Text style={[styles.userRole, { color: theme.secondaryText }]}>Student</Text>

        <View style={[styles.infoDivider, { backgroundColor: theme.border }]} />

        <View style={styles.studentInfoRow}>
          <Text style={[styles.infoLabel, { color: theme.secondaryText }]}>Student ID:</Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>2024-IT-0042</Text>
        </View>

        <View style={styles.studentInfoRow}>
          <Text style={[styles.infoLabel, { color: theme.secondaryText }]}>Major:</Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>Information Technology</Text>
        </View>
      </View>

      {/* Appearance Setting Section */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Appearance</Text>
      <View style={[styles.settingsCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        {options.map((opt, index) => {
          const isSelected = appearanceMode === opt.value;
          return (
            <Pressable
              key={opt.value}
              onPress={() => setAppearanceMode(opt.value)}
              style={({ pressed }) => [
                styles.optionRow,
                index < options.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
                { opacity: pressed ? 0.7 : 1.0 },
              ]}
            >
              <View style={styles.optionLeft}>
                <Ionicons
                  name={opt.icon}
                  size={18}
                  color={isSelected ? theme.primary : theme.secondaryText}
                  style={styles.optionIcon}
                />
                <Text style={[styles.optionLabel, { color: theme.text }]}>{opt.label}</Text>
              </View>

              <View
                style={[
                  styles.radioOuter,
                  { borderColor: isSelected ? theme.primary : theme.secondaryText },
                ]}
              >
                {isSelected && <View style={[styles.radioInner, { backgroundColor: theme.primary }]} />}
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Preferences Section */}
      <Text style={[styles.sectionTitle, { color: theme.text, marginTop: 20 }]}>Settings</Text>
      <View style={[styles.settingsCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        {/* Notifications Row */}
        <View style={[styles.optionRow, { borderBottomWidth: 1, borderBottomColor: theme.border }]}>
          <View style={styles.optionLeft}>
            <Ionicons name="notifications-outline" size={18} color={theme.secondaryText} style={styles.optionIcon} />
            <Text style={[styles.optionLabel, { color: theme.text }]}>Class Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: theme.border, true: theme.primary }}
          />
        </View>

        {/* About App Row */}
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Ionicons name="information-circle-outline" size={18} color={theme.secondaryText} style={styles.optionIcon} />
            <Text style={[styles.optionLabel, { color: theme.text }]}>About StudyPlan</Text>
          </View>
          <Text style={[styles.versionText, { color: theme.secondaryText }]}>v1.0 (Mobile Dev)</Text>
        </View>
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
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    marginTop: 8,
  },
  profileCard: {
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
  },
  userRole: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 1,
  },
  infoDivider: {
    height: 1,
    width: "100%",
    marginVertical: 14,
  },
  studentInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 3,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },
  settingsCard: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: 10,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  versionText: {
    fontSize: 12,
    fontWeight: "500",
  },
});
