import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../utils/database";

export default function AllPlaces({ route }) {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();
      //setLoadedPlaces((cur) => [...cur, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

const styles = StyleSheet.create({});
