import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import NumericInput from "./NumericInput";
import BreathingCircle from "./BreathingCircle";
import PhaseLabel from "./PhaseLabel";
import { toValidNumber } from "../utils/validation";
import { useBreathingAnimation } from '../hooks/useBreathingAnimation';
import { COLORS } from "../constants/colors";

const BreathingConfigurator = () => {
    const [inhale, setInhale] = useState('4');
    const [hold1, setHold1] = useState('4');
    const [exhale, setExhale] = useState('4');
    const [hold2, setHold2] = useState('4');

    const validInhale = toValidNumber(inhale);
    const validHold1 = toValidNumber(hold1);
    const validExhale = toValidNumber(exhale);
    const validHold2 = toValidNumber(hold2);

    const { scale, phase } = useBreathingAnimation(
        validInhale,
        validHold1,
        validExhale,
        validHold2
    );

    // Preset configurations
    const setBoxBreathing = () => {
        setInhale('4');
        setHold1('4');
        setExhale('4');
        setHold2('4');
    };

    const setFourSevenEight = () => {
        setInhale('4');
        setHold1('7');
        setExhale('8');
        setHold2('0');
    };

    const setCalmingBreath = () => {
        setInhale('5');
        setHold1('2');
        setExhale('7');
        setHold2('2');
    };

    return (
        <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Serene Breathing</Text>
                    <Text style={styles.subtitle}>
                        Customize your breathing rhythm
                    </Text>
                </View>

                <View style={styles.circleContainer}>
                    <BreathingCircle scale={scale} />
                    <PhaseLabel phase={phase} />
                </View>

                <View style={styles.presetsContainer}>
                    <Text style={styles.sectionTitle}>Quick Presets</Text>
                    <View style={styles.presetButtons}>
                        <View style={styles.presetButton} onTouchEnd={setBoxBreathing}>
                            <Text style={styles.presetText}>Box</Text>
                            <Text style={styles.presetSubtext}>4-4-4-4</Text>
                        </View>
                        <View style={styles.presetButton} onTouchEnd={setFourSevenEight}>
                            <Text style={styles.presetText}>4-7-8</Text>
                            <Text style={styles.presetSubtext}>Relaxing</Text>
                        </View>
                        <View style={styles.presetButton} onTouchEnd={setCalmingBreath}>
                            <Text style={styles.presetText}>Calm</Text>
                            <Text style={styles.presetSubtext}>5-2-7-2</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.controlsContainer}>
                    <Text style={styles.sectionTitle}>Customize Duration (seconds)</Text>
                    <View style={styles.grid}>
                        <View style={styles.row}>
                            <NumericInput 
                                label="Inhale" 
                                value={inhale} 
                                onchange={setInhale} 
                            />
                            <NumericInput 
                                label="Hold" 
                                value={hold1} 
                                onchange={setHold1} 
                            />
                        </View>
                        <View style={styles.row}>
                            <NumericInput 
                                label="Exhale" 
                                value={exhale} 
                                onchange={setExhale} 
                            />
                            <NumericInput 
                                label="Hold" 
                                value={hold2} 
                                onchange={setHold2} 
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        💡 Tip: Start with 4 seconds each for balanced Box Breathing
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: COLORS.text,
        letterSpacing: -0.5,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textLight,
        fontWeight: '400',
    },
    circleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    presetsContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 15,
        letterSpacing: 0.3,
    },
    presetButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    presetButton: {
        flex: 1,
        backgroundColor: COLORS.surface,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
    },
    presetText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.primary,
        marginBottom: 4,
    },
    presetSubtext: {
        fontSize: 12,
        color: COLORS.textLight,
    },
    controlsContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    grid: {
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    infoContainer: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    infoText: {
        fontSize: 13,
        color: COLORS.textLight,
        textAlign: 'center',
        fontStyle: 'italic',
        lineHeight: 20,
    },
});

export default BreathingConfigurator;