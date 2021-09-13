import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import * as Yup from "yup";
import { useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import AppForm from "../../components/App/Form/AppForm";
import AppFormek from "../../components/App/Form/AppFormek";
import SubmitButton from "../../components/App/Form/submitButton";
import * as authActions from "../../store/actions/auth";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Mininum 2 characters")
    .max(25, "Maximum 25 characters")
    .required("Your userName is required"),
  email: Yup.string()
    .required("Please Enter Your Username or Email")
    .email()
    .label("Email"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .label("Password"),
});

const signup = () => {
  const [secure, setSecure] = useState(true);
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView>
      <View style={styles.cont}>
        <AppFormek
          initialValues={{ userName: "", email: "", password: "" }}
          onSubmit={(val) =>
            dispatch(authActions.signup(val.email, val.password))
          }
          validationSchema={validationSchema}
        >
          <View style={{ width: "85%" }}>
            <Text style={styles.label}>Username</Text>

            <AppForm
              label="Username"
              placeholder="Create your username"
              autoCorrect={false}
              name="userName"
            />

            <Text style={styles.label}>E-mail</Text>

            <AppForm
              label="Email"
              placeholder="Enter your e-mail"
              KeyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              name="email"
            />

            <Text style={styles.label}> Password</Text>

            <AppForm
              label="Password"
              placeholder="Create your password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={secure}
              textContentType="password"
              minLength={6}
              onPress={() => setSecure((prev) => !prev)}
              pass={secure ? "eye-off" : "eye"}
              design={{ paddingRight: 10 }}
              name="password"
            />

            <SubmitButton
              text="Sign Up"
              width="100%"
              design={{ paddingVertical: "10%" }}
            />
          </View>
        </AppFormek>
      </View>
    </KeyboardAvoidingView>
  );
};

export default signup;

const styles = StyleSheet.create({
  cont: {
    height: Dimensions.get("screen").height * 0.68,
    backgroundColor: Colors.accent,
    alignItems: "center",
    paddingTop: "5%",
  },
  label: {
    fontSize: 16,
    paddingTop: "5%",
  },
});
