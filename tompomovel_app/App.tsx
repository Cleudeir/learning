/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {
  accelerometer,
  magnetometer,
  setUpdateIntervalForType,
  SensorTypes,
  gyroscope,
} from 'react-native-sensors';

interface AccelerationInfo {
  x: number;
  y: number;
  z: number;
}

interface MagnetometerInfo {
  x: number;
  y: number;
  z: number;
}

export default function App() {
  const [accelerationInfo, setAccelerationInfo] = useState<AccelerationInfo>({
    x: 0,
    y: 0,
    z: 0,
  });

  const [magnetometerInfo, setMagnetometerInfo] = useState<MagnetometerInfo>({
    x: 0,
    y: 0,
    z: 0,
  });

  const [gyroscopeInfo, setGyroscopeInfo] = useState<MagnetometerInfo>({
    x: 0,
    y: 0,
    z: 0,
  });

  const [direction, setDirection] = useState<string>('N/A');
  const [directionAngleNorth, setDirectionAngleNorth] = useState<number>(0);
  const rotation = new Animated.Value(directionAngleNorth);

  useEffect(() => {
    // Set update intervals for both accelerometer and magnetometer
    setUpdateIntervalForType(SensorTypes.accelerometer, 400);
    setUpdateIntervalForType(SensorTypes.magnetometer, 400);
    setUpdateIntervalForType(SensorTypes.gyroscope, 400);
    const gyroscopeSubscription = gyroscope.subscribe(({x, y, z}) =>
      setGyroscopeInfo({x, y, z}),
    );
    // Subscribe to accelerometer data
    const accelerometerSubscription = accelerometer.subscribe(({x, y, z}) => {
      setAccelerationInfo({x, y, z});
    });

    // Subscribe to magnetometer data
    const magnetometerSubscription = magnetometer.subscribe(({x, y, z}) => {
      setMagnetometerInfo({x, y, z});

      // Calculate the angle between the magnetic field vector and North (in degrees)
      let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;

      // Convert angle to a cardinal direction
      let cardinalDirection = 'N/A';

      if (angle >= -22.5 && angle < 22.5) {
        cardinalDirection = 'N';
      } else if (angle >= 22.5 && angle < 67.5) {
        cardinalDirection = 'NE';
      } else if (angle >= 67.5 && angle < 112.5) {
        cardinalDirection = 'E';
      } else if (angle >= 112.5 && angle < 157.5) {
        cardinalDirection = 'SE';
      } else if (angle >= 157.5 || angle < -157.5) {
        cardinalDirection = 'S';
      } else if (angle >= -157.5 && angle < -112.5) {
        cardinalDirection = 'SW';
      } else if (angle >= -112.5 && angle < -67.5) {
        cardinalDirection = 'W';
      } else if (angle >= -67.5 && angle < -22.5) {
        cardinalDirection = 'NW';
      }
      if (angle < 0) {
        angle += 360; // Ensure angle is between 0 and 360 degrees
      }
      angle = angle * -1;
      Animated.timing(rotation, {
        toValue: angle,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: false,
        easing: Easing.out(Easing.exp), // Use Easing for a smoother transition
      }).start();

      setDirectionAngleNorth(angle);

      setDirection(cardinalDirection);
    });

    return () => {
      // Unsubscribe from both sensors when the component unmounts
      accelerometerSubscription.unsubscribe();
      magnetometerSubscription.unsubscribe();
      gyroscopeSubscription.unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sensor Information</Text>
      <View style={styles.sensorContainer}>
        <Text style={styles.sensorLabel}>Accelerometer</Text>
        <View style={styles.sensorInfo}>
          <Text style={styles.sensorValue}>
            X: {accelerationInfo.x.toFixed(2)}
          </Text>
          <Text style={styles.sensorValue}>
            Y: {accelerationInfo.y.toFixed(2)}
          </Text>
          <Text style={styles.sensorValue}>
            Z: {accelerationInfo.z.toFixed(2)}
          </Text>
        </View>
        <Text style={styles.sensorLabel}>Magnetometer</Text>
        <View style={styles.sensorInfo}>
          <Text style={styles.sensorValue}>
            X: {magnetometerInfo.x.toFixed(2)}
          </Text>
          <Text style={styles.sensorValue}>
            Y: {magnetometerInfo.y.toFixed(2)}
          </Text>
          <Text style={styles.sensorValue}>
            Z: {magnetometerInfo.z.toFixed(2)}
          </Text>
        </View>
        <Text style={styles.sensorLabel}>Direction Magnetometer</Text>

        <View style={styles.sensorInfo}>
          <Text style={styles.sensorValue}>
            Direction: {direction} {directionAngleNorth}
          </Text>
        </View>
        <Text style={styles.sensorLabel}>gyroscopeInfo</Text>
        <View style={styles.sensorInfo}>
          <Text style={styles.sensorValue}>
            X: {gyroscopeInfo.x.toFixed(2)}
          </Text>
          <Text style={styles.sensorValue}>
            Y: {gyroscopeInfo.y.toFixed(2)}
          </Text>
          <Text style={styles.sensorValue}>
            Z: {gyroscopeInfo.z.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        <Animated.View
          style={[
            styles.arrow,
            {
              transform: [
                {
                  rotate: rotation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}>
          <Text style={styles.arrowText}>↑</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrowContainer: {
    alignItems: 'center',
    marginTop: 20, // Add margin to separate the arrow from sensor info
  },
  arrowText: {fontSize: 60},
  arrow: {
    justifyContent: 'center', // Center the arrow text
    alignItems: 'center', // Center the arrow text
    backgroundColor: 'transparent', // Make the background transparent
    fontSize: 24, // Increase the font size for a bigger arrow
    color: 'blue', // Set the arrow color
    transform: [{rotate: '0deg'}], // Initial rotation
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sensorContainer: {
    justifyContent: 'space-between',
    marginVertical: 20,
    flexDirection: 'column',
  },
  sensorInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  sensorLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sensorValue: {
    fontSize: 16,
  },
});
