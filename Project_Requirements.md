# Breathing Pace Configuration Component for SereneSpace

## Overview
This project delivers a standalone React Native component designed for a mental health mobile application called `SereneSpace`. The component allows users (patients) to configure breathing cycle durations and preview them visually in real time.

## Objective
Provide a smooth, responsive, and visually calming breathing pacer that dynamically adjusts based on user input without lag or interruption.

## Functional Requirements

1. Input Controls
- Four numeric inputs
    - Inhale Duration (seconds)
    - Hold After Inhale (seconds)
    - Exhale Duration (seconds)
    - Hold After Exhale (seconds)
- Only positive integers allowed
- Empty or invalid values fallback to default (4 seconds)

2. Breathing Animation
- A circular visual element (`breathing circle`)
- Smooth scaling animation using React Native Animation API
- Phases:
    - Inhale -> scale up
    - Hold -> stay expanded
    - Exhale -> scale down
    - Hold -> stay collapsed
- Continuous loop without visible jumps
- Dynamically updates timing based on inputs

3. Validation
- Reject negative values, decimals, and non-numeric input
- Auto-correct invalid values to defaults
- No app crashes or animation breaks

4. UI/UX
- Minimalist and calming design
- Soft color palette:
    - Sage Green
    - Muted Blue
    - Soft Grey
- Clean spacing and typography
- Responsive layout for different screen sizes

5. Architecture
- Separation of concerns
    - UI components
    - Animation logic
    - State management
- Clean, readable, well-commented code

6. Performance
- No animation lag
- Smooth transitions between phases
- Efficient re-rendering

---

## Deliverables
1. Codebase: A ZIP file containing the complete React Native project directory (excluding node_modules).
2. Repository: A link to a public GitHub repository containing the source code and a descriptive README.
3. Visual Proof: A screen recording (MP4) showing the configuration inputs being changed and the breathing animation adjusting its speed accordingly.
4. Static View: Three screenshots showing different configuration states (e.g., Box Breathing vs. 4-7-8 Breathing).