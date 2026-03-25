# SereneSpace Breathing Pace Configurator

## Overview
The **Breathing Pace Configurator** is a standalone React Native component build for the *SereneSpace* mobile application. It allows users to customize breathing cycles (inhale, hold, exhale, and hold) and preview them in real time through a smooth animated breathing cycle.

The component is designed for anxiety management use cases, focusing on accuracy, smooth animation, performance, and a calm user experience.

---

## Features

- Real-time breathing animation based on user input
- Four configurable phases:
   - Inhale
   - Hold (after inhale)
   - Exhale
   - Hold (after exhale)
- Smooth continuous loop animation
- Dynamic timing updates when inputs change
- Input validation with fallback defaults
- Clean, minimalist, calming UI
- Works on both IOS and Android
- Fully modular and maintainable code structure

---

## Installation & Setup

### 1. Clone the Project
git clone https://github.com/saqibaltaf27/SereneSpace.git
cd SereneSpace

### 2. Install Dependencies
npm install

### 3. Start Development Server
npx expo start

### 4. Run on Android / Emulator
press `a` in terminal

---

## Input Configuration
The component accepts four numeric inputs
Phase                Description
Inhale               Expansion duration
Hold                 Pause Duration
Exhale               Contraction Duration
Hold (after exhale)  Pause Duration

---

## Validation Rules
- Only positive integers allowed
- Empty or invalid values default to 4 seconds
- Non-numeric characters are automatically sanitized

---

## Animation Behavior

- Uses React Native Animation API
- Scale transformation controls breathing circle size
- Animation follows this seqeuence:
   1. Inhale -> scale up
   2. Hold -> pause
   3. Exhale -> Scale down
   4. Hold -> pause
   5. Loop Continuously

- Animation restarts cleanly whenever input values change
- No overlapping or duplicated animations

---