import { useEffect, useRef, useState } from "react";
import { Animated, Easing } from 'react-native';

export const useBreathingAnimation = (inhale, hold1, exhale, hold2) => {
    const scale = useRef(new Animated.Value(1)).current;
    const animationRef = useRef(null);
    const [phase, setPhase] = useState('Inhale');

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.stop();
        }

        scale.setValue(1);
        
        let timeouts = [];
        let isAnimating = true;

        const runCycle = () => {
            if (!isAnimating) return;

            setPhase('Inhale');
            
            // Inhale animation
            Animated.timing(scale, {
                toValue: 1.6,
                duration: inhale * 1000,
                easing: Easing.inOut(Easing.cubic),
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (finished && isAnimating) {
                    setPhase('Hold');
                    
                    const holdTimeout = setTimeout(() => {
                        if (!isAnimating) return;
                        
                        setPhase('Exhale');
                        
                        Animated.timing(scale, {
                            toValue: 1,
                            duration: exhale * 1000,
                            easing: Easing.inOut(Easing.cubic),
                            useNativeDriver: true,
                        }).start(({ finished: exhaleFinished }) => {
                            if (exhaleFinished && isAnimating) {
                                setPhase('Hold');
                                
                                const finalHoldTimeout = setTimeout(() => {
                                    if (isAnimating) {
                                        runCycle();
                                    }
                                }, hold2 * 1000);
                                timeouts.push(finalHoldTimeout);
                            }
                        });
                    }, hold1 * 1000);
                    timeouts.push(holdTimeout);
                }
            });
        };

        runCycle();

        return () => {
            isAnimating = false;
            timeouts.forEach(clearTimeout);
            if (animationRef.current) {
                animationRef.current.stop();
            }
        };
    }, [inhale, hold1, exhale, hold2]);

    return { scale, phase };
};