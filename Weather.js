import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native' 
import PropTypes from 'prop-types'
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#181818", "#ba8b02"],
        title: "날아다니기 좋은날~",
        subtitle: "비바람이 부는 길가에~"
    },
    Drizzle: {
        iconName: "weather-rain",
        gradient: ["#00c6fb", "#005bea"],
        title: "우산 가져갈까...",
        subtitle: "이슬비인가"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#373b44", "#4286f4"],
        title: "집에 있자",
        subtitle: "비온데"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7de2fc", "#b9b6e5"],
        title: "눈오네",
        subtitle: "눈사람"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f2994a", "#f2c94c"],
        title: "맑다 맑아",
        subtitle: "날씨 좋데"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "구름 많아",
        subtitle: "어두워.."
    },
}

export default function Weather({ temp,condition }) {
    return(
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color={"#fff"}
                />
                <Text style={styles.temp}>
                    {temp}º
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textConteiner}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear", 
        "Clouds",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        color: "#fff",
        fontSize: 36,
    },  
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 24,
    },
    textConteiner: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})