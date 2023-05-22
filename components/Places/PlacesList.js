import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function PlacesList({ places }) {
  return <FlatList data={places}  keyExtractor={(item)=> item.id} renderItem={}/>;
}
const styles = StyleSheet.create({});
