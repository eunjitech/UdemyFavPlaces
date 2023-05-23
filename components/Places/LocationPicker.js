import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

export default function LocationPicker() {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted; //부여되면 true
    }

    if (locationPermissionInformation.stauts === PermissionStatus.DENIED) {
      Alert.alert("권한없음", "위치 권한이 없습니다.");
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      //권한이 없으면 return
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log("location", location);
  }
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
