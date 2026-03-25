import React from "react";
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../constants/colors';
import { sanitizeInput } from '../utils/validation';

const NumericInput = ({ label, value, onchange }) => {
    const handleChange = (text) => {
        onchange(sanitizeInput(text));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={value}
                onChangeText={handleChange}
                placeholder="4"
                placeholderTextColor={COLORS.subtle}
                maxLength={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: COLORS.textLight,
        marginBottom: 8,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    input: {
        backgroundColor: COLORS.surface,
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderRadius: 12,
        width: 70,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.text,
        borderWidth: 1.5,
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
});

export default NumericInput;