import React from "react";
import { SafeAreaView } from "react-native";
import BreathingConfigurator from "./components/BreathingConfigurator";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BreathingConfigurator />
        </SafeAreaView>
    );
}