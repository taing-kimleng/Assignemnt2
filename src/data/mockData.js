// Local mock data for student classes and tasks

export const initialClasses = [
  {
    id: "1",
    name: "Mobile Development",
    time: "08:00 - 10:00",
    room: "E4.4",
    teacher: "Voneat PEN",
    topic: "React Native Navigation",
    note: "Remember to bring your laptop and class materials.",
    icon: "phone-portrait-outline",
    color: "#2868E8",
  },
  {
    id: "2",
    name: "Operating System",
    time: "10:00 - 12:00",
    room: "E3.2",
    teacher: "Mrs. Sophea",
    topic: "Memory Management & Paging",
    note: "Read Chapter 4 before class.",
    icon: "hardware-chip-outline",
    color: "#E6A000",
  },
  {
    id: "3",
    name: "Database",
    time: "14:00 - 16:00",
    room: "E2.1",
    teacher: "Mr. Vanna",
    topic: "SQL Relational Joins",
    note: "Submit assignment 2 on portal.",
    icon: "server-outline",
    color: "#18A878",
  },
];

export const weeklySchedule = [
  {
    day: "Mon",
    fullDay: "Monday",
    classes: [
      { id: "m1", name: "Mobile Development", time: "08:00 - 10:00", room: "E4.4", teacher: "Voneat PEN", topic: "React Native Navigation", note: "Bring laptop.", icon: "phone-portrait-outline", color: "#2868E8" },
      { id: "m2", name: "Operating System", time: "10:00 - 12:00", room: "E3.2", teacher: "Mrs. Sophea", topic: "Processes & Threads", note: "Lab assignment.", icon: "hardware-chip-outline", color: "#E6A000" },
    ],
  },
  {
    day: "Tue",
    fullDay: "Tuesday",
    classes: [
      { id: "t1", name: "Operating System", time: "10:00 - 12:00", room: "E3.2", teacher: "Mrs. Sophea", topic: "Memory Management", note: "Chapter notes.", icon: "hardware-chip-outline", color: "#E6A000" },
      { id: "t2", name: "Database", time: "14:00 - 16:00", room: "E2.1", teacher: "Mr. Vanna", topic: "Relational Algebra", note: "Quiz next week.", icon: "server-outline", color: "#18A878" },
    ],
  },
  {
    day: "Wed",
    fullDay: "Wednesday",
    classes: [
      { id: "w1", name: "Database", time: "14:00 - 16:00", room: "E2.1", teacher: "Mr. Vanna", topic: "SQL Joins", note: "Submit code.", icon: "server-outline", color: "#18A878" },
      { id: "w2", name: "Mobile Development", time: "08:00 - 10:00", room: "E4.4", teacher: "Voneat PEN", topic: "State Management", note: "Project check.", icon: "phone-portrait-outline", color: "#2868E8" },
    ],
  },
  {
    day: "Thu",
    fullDay: "Thursday",
    classes: [
      { id: "th1", name: "Mobile Development", time: "08:00 - 10:00", room: "E4.4", teacher: "Voneat PEN", topic: "Gestures & Animations", note: "Bring laptop.", icon: "phone-portrait-outline", color: "#2868E8" },
    ],
  },
  {
    day: "Fri",
    fullDay: "Friday",
    classes: [
      { id: "f1", name: "Operating System", time: "10:00 - 12:00", room: "E3.2", teacher: "Mrs. Sophea", topic: "File Systems", note: "Review week.", icon: "hardware-chip-outline", color: "#E6A000" },
    ],
  },
];

export const initialTasks = [
  { id: "1", title: "Read Chapter 3", due: "Due today", done: false },
  { id: "2", title: "Finish React Native project", due: "Due tomorrow", done: false },
  { id: "3", title: "Prepare presentation", due: "Completed", done: true },
];
