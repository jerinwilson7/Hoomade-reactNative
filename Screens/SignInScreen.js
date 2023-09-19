import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Make an API request to your backend here

  const handleSubmit = async () => {
    console.log("handle");
    if (name === "" || email === "" || password === "") {
      Alert.alert("required");
      return;
    }
    try {
      await axios.post("http://192.168.211.203:3000/users/create-user", {
        name,
        email,
        password,
      });
      console.log("data send");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <SafeAreaView className="flex">
      {/* Header */}
      <View className="flex-shrink-0 bg-seaGreen w-full h-60 rounded-b-log">
        <View className="pt-32 pl-8">
          <Text className="text-white font-gilroyBold text-3xl">Welcome !</Text>
          <Text className="text-white font-gilroyMedium text-lg">
            Create Your Account
          </Text>
        </View>
      </View>
      {/* form */}
      <View className=" flex mt-16 mx-4 space-y-4 ">
        <View className=" p-4  focus-within:shadow-lg space-x-2">
          <Text className=" text-gray-500 font-gilroySemiBold text-base">
            Name
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            underlineColorAndroid="grey"
            className="mb-3 pb-1 pt-2"
          />
          <Text className=" text-gray-500 font-gilroySemiBold text-base">
            E-mail
          </Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            underlineColorAndroid="grey"
            keyboardType="email-address"
            className="mb-3 pb-1 pt-2"
          />
          <Text className=" text-gray-500 font-gilroySemiBold text-base">
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            underlineColorAndroid="grey"
            secureTextEntry
            className="mb-3 pb-1 pt-2"
          />
          <View className="w-full">
            <TouchableOpacity
              onPress={handleSubmit}
              className="w-full rounded-2xl bg-seaGreen p-5 mt-7"
            >
              <Text className="text-xl font-gilroyBold text-center text-white">
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Text>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
              <Text className="text-sky-600">Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;