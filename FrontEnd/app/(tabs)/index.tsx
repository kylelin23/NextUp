import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {styles.screen}>
      <Text style = {styles.bigCountdown}>10 DAYS</Text>
      <View style = {styles.allCountdownContainers}>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Second Countdown</Text>
        </View>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Third Countdown</Text>
        </View>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Fourth Countdown</Text>
        </View>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Fifth Countdown</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: 'rgb(231, 140, 237)',
  }, 

  bigCountdown: {
    fontSize: 80,
  }, 

  countdownContainer: {
    backgroundColor: 'purple', 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', 
    height: 50,
  },

  allCountdownContainers: {
    width: '100%',
    gap: 10,
    paddingTop: 10,
  },
});
