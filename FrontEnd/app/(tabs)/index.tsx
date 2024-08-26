import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {styles.screen}>
      <View style = {styles.navBar}>
        <Text>All</Text>
        <Text>Group</Text>
      </View>
      <Text style = {styles.bigCountdown}>10:00:00:00</Text>
      <Text style = {{fontSize: 20}}>Weekend Whip Karaoke</Text>
      <View style = {styles.allCountdownContainers}>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Spinjitzu Class: 20:00:00:00</Text>
        </View>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Fight Serpentine: 22:00:00:00</Text>
        </View>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Ghost Whip Karaoke: 27:00:00:00:00</Text>
        </View>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Pirate Whip Karaoke: 29:00:00:00</Text>
        </View>
        <View style = {styles.countdownContainer}>
          <Text style = {{color: 'white'}}>Expand All</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',
    // paddingTop: 50,
    backgroundColor: 'rgb(231, 140, 237)',
  }, 

  bigCountdown: {
    fontSize: 60,
    paddingVertical: 10,
    paddingTop: 20,
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
    paddingTop: 30,
  },

  navBar: {
    backgroundColor: 'rgb(199, 191, 198)',
    height: 60,
    width: '100%',
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
