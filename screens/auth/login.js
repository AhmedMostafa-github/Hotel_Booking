import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
  email: Yup.string()
    .required("Please Enter Your Username or Email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required("Please Enter Your Password")
    .min(6)
    .label("Password"),
});

const login = () => {
  const [secure, setSecure] = useState(true);
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView>
      <View style={styles.cont}>
        <AppFormek
          initialValues={{ email: "", password: "" }}
          onSubmit={(val) =>
            dispatch(authActions.login(val.email, val.password))
          }
          validationSchema={validationSchema}
        >
          <View style={{ width: "85%" }}>
            <Text style={styles.label}>Username or E-mail</Text>

            <AppForm
              label="Email"
              placeholder="Ahmed@Gmail.Com"
              KeyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              name="email"
            />

            <Text style={styles.label}> Password</Text>

            <AppForm
              label="Password"
              placeholder="********"
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
            <TouchableOpacity style={styles.forgotCont}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
            <SubmitButton
              text="Login"
              width="100%"
              design={{ paddingVertical: "10%" }}
            />
          </View>
        </AppFormek>
      </View>
    </KeyboardAvoidingView>
  );
};

export default login;

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
  forgotCont: {
    alignItems: "flex-end",
    paddingTop: "7%",
  },
  forgotText: {
    fontSize: 14,
    color: Colors.sText,
  },
});
