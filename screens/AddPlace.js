//db삽입
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../utils/database";

export default function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces", { place: place });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});
