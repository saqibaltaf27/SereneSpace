import { SafeAreaView, StatusBar } from "react-native";
import BreathingConfigurator from '../components/BreathingConfigurator';
import { COLORS } from "../constants/colors";

export default function HomeScreen() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
                <BreathingConfigurator />
            </SafeAreaView>
        </>
    );
}