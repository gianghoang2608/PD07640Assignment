// Input.js
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label ]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder} // Đặt giá trị placeholder dạng chuỗi
          style={styles.input}
        ></TextInput>
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require("../../assets/eye.png")
                  : require("../../assets/eye_closed.png")
              }
            ></Image>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
