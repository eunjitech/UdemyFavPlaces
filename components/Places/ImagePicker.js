import React, { useState, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  getCameraPermissionsAsync,
  useCameraPermissions,
  PermissionStatus,
  requestCameraPermissionsAsync,
} from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function ImagePicker() {
  const [status, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    //카메라 액세스가 승인되면 true, 거부되면 false를 반환
    if (status.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted; //부여되면 true
    }

    if (status.stauts === PermissionStatus.DENIED) {
      Alert.alert("권한없음", "카메라권한이 없습니다.");
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      //권한이 없으면 카메라 열지 않음
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
