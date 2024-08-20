import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {styles.screen}>
      <Text style = {styles.bigCountdown}>10 DAYS</Text>
      <View>
        <Text>Second Countdown</Text>
      </View>
      <View>
        <Text>Third Countdown</Text>
      </View>
      <View>
        <Text>Fourth Countdown</Text>
      </View>
      <View>
        <Text>Fifth Countdown</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: 50,
  }, 

  bigCountdown: {
    fontSize: 80,
  }, 
});
