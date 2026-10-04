import React, { useRef } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskItem({ item, theme, onToggle }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const panX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dx > 10 && Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) {
          panX.setValue(Math.min(gestureState.dx, 70));
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 40) {
          triggerCompletionAnimation();
          onToggle(item.id);
        }
        Animated.spring(panX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const triggerCompletionAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = () => {
    triggerCompletionAnimation();
    onToggle(item.id);
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.container,
        {
          transform: [{ scale: scaleAnim }, { translateX: panX }],
        },
      ]}
    >
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.row,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
            opacity: pressed ? 0.85 : 1.0,
          },
        ]}
      >
        <View
          style={[
            styles.checkbox,
            item.done
              ? { backgroundColor: theme.success, borderColor: theme.success }
              : { backgroundColor: "transparent", borderColor: theme.secondaryText },
          ]}
        >
          {item.done && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
        </View>

        <Text
          style={[
            styles.title,
            { color: item.done ? theme.secondaryText : theme.text },
            item.done && styles.strikethrough,
          ]}
          numberOfLines={1}
        >
          {item.title}
        </Text>

        <Text
          style={[
            styles.dueTag,
            {
              color: item.done
                ? theme.success
                : item.due.includes("today")
                ? theme.error
                : theme.warning,
            },
          ]}
        >
          {item.done ? "Completed" : item.due}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
  dueTag: {
    fontSize: 12,
    fontWeight: "600",
  },
});
