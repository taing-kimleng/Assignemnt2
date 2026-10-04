# StudyPlan

StudyPlan is a simple React Native mobile application created as a student project for a Mobile Development course. It helps students track their daily classes, weekly schedule, pending assignments, and appearance settings.

## Features

- **Home Screen**: Overview of today's schedule, next class highlight, and quick task summary.
- **Weekly Schedule**: Day-by-day class timetable (Monday to Friday).
- **Task Manager**: Interactive task checklist with category filtering and completion tracking.
- **Profile & Settings**: Student profile details and Light / Dark / System theme preferences.
- **Class Details**: Detailed view for individual classes showing time, room, teacher, topic, and notes.

## Interactive Features & Gestures

- **Long Press (Gesture 1)**: Long press any class card on the Home or Schedule screen to view details.
- **Swipe Right (Gesture 2)**: Swipe right on any task to mark it as complete.
- **Task Completion Animation**: Animated scale effect, checkmark status update, and text strikethrough.
- **Button Press Feedback**: Spring animation feedback when pressing the Add Task button.
- **Adaptive UI**: Responsive grid layout for phone and tablet screen widths.

## Tech Stack

- React Native
- Expo
- JavaScript (ES6+)
- React Navigation (Bottom Tabs & Native Stack)

## Installation & Running

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run on Web:
   ```bash
   npm run web
   ```
4. Run on Mobile (Expo Go):
   ```bash
   npx expo start
   ```

## Screen Structure

```text
App
├── Bottom Tabs
│   ├── Home Screen
│   ├── Schedule Screen
│   ├── Tasks Screen
│   └── Profile Screen
└── Stack Screens
    └── Class Detail Screen
```
