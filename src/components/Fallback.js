import { StyleSheet, Text, View, Image, CheckBox } from "react-native";
import React from "react";

const Fallback = () => {
    return(
        <View style={{alignItems: "center"}}>
            <Image source={require("../../assets/pngtree-to-do-list-icon-cartoon-style-png-image_1768114.jpg")} style={{height:500, widht: 100}}/>
            <Text>Start Adding Your Tasks</Text>  
        </View>
    )
}

export default Fallback

const style = StyleSheet.create({})