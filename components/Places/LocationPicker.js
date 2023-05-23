import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

export default function LocationPicker() {
  function getLocationHandler() {}
  function pickOnMapHandler() {}
  return (
    <View>
      <View style={styles.mapPreivew}></View>
      <View style={styles.actions}>
        <OutlinedButton onPress={getLocationHandler} icon="location">
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={pickOnMapHandler} icon="map">
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreivew: {
    width: "100%",
    height: 200,
    marginVertival: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
