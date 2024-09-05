import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  const [isVisible, setIsVisible] = React.useState(false);
  const changeVisibility = (isVisible: boolean) => {
    setIsVisible(isVisible);
  }

  return (
    <View style = {styles.screen}>
      <View style = {styles.navBar}>
        <Pressable onPress={() => changeVisibility(false)}>
          <Text style = {isVisible == false ? styles.selected: {}}>All</Text>
        </Pressable>
        <Pressable onPress = {() => changeVisibility(true)}>
          <Text style = {isVisible == true ? styles.selected : {}}>Group</Text>
        </Pressable>
      </View>
      {(isVisible == true) && 
      (<View style = {styles.group}>
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
      </View>)}

      {(isVisible == false) && 
      (<View style = {styles.all}>
        <Text style = {styles.bigCountdown}>10:00:00:00</Text>
        <Text style = {{fontSize: 20}}>Weekend Whip Karaoke</Text>
        <View style = {styles.allCountdownContainers}>
          <View style = {styles.countdownContainer}>
            <Text style = {{color: 'white'}}>Tae Kwon Do Practice: 15:00:00:00</Text>
          </View>
          <View style = {styles.countdownContainer}>
            <Text style = {{color: 'white'}}>Spinjitzu Class: 20:00:00:00</Text>
          </View>
          <View style = {styles.countdownContainer}>
            <Text style = {{color: 'white'}}>Fight Serpentine: 22:00:00:00:00</Text>
          </View>
          <View style = {styles.countdownContainer}>
            <Text style = {{color: 'white'}}>Weekend Whip Karaoke 2: 24:00:00:00</Text>
          </View>
          <View style = {styles.countdownContainer}>
            <Text style = {{color: 'white'}}>Expand All</Text>
          </View>
        </View>
      </View>)}

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
    backgroundColor: 'rgb(193, 107, 199)',
    height: 60,
    width: '100%',
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  all: {
    alignItems: 'center',
    margin: 0,
    width: '100%'
  }, 

  group: {
    alignItems: 'center',
    margin: 0,
    width: '100%', 
  },

  selected: {
    color: 'white',
  },
});
