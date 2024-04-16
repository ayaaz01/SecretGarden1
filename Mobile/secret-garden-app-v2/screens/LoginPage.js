import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
      <Image
        style={styles.secretGardenLogo1}
        contentFit="cover"
        source={require("../assets/secret-garden-logo-1.png")}
      />
      <View style={[styles.emailForm, styles.formPosition]}>
        <Image
          style={styles.emailFormChild}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Text style={[styles.enterYourEmail, styles.textTypo]}>
          Enter your email
        </Text>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
      <View style={[styles.passwordForm, styles.formPosition]}>
        <View style={[styles.passwordFormChild, styles.childBorder]} />
        <Text style={[styles.text, styles.textTypo]}>**********</Text>
        <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      </View>
      <View style={styles.rememberForgot}>
        <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
          Forgot password
        </Text>
        <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
          Remember me
        </Text>
        <View style={[styles.rememberForgotChild, styles.childBorder]} />
      </View>
      <View style={styles.signInButton}>
        <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
      </View>
      <Text style={[styles.dontHaveAnContainer, styles.signInTypo]}>
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <Text style={styles.text1}>{` `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formPosition: {
    width: 314,
    left: 58,
    position: "absolute",
  },
  textTypo: {
    height: 24,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: 5,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  emailTypo: {
    height: 22,
    color: Color.colorGray_200,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    top: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_xs,
    height: 19,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    textAlign: "center",
    letterSpacing: 0.4,
    position: "absolute",
  },
  signInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  secretGardenLogo1: {
    top: 133,
    left: 74,
    width: 282,
    height: 193,
    position: "absolute",
  },
  emailFormChild: {
    height: 40,
    borderRadius: Border.br_xs,
    left: 0,
    top: 28,
    width: 314,
    position: "absolute",
  },
  enterYourEmail: {
    top: 38,
    width: 138,
  },
  email: {
    left: 3,
    width: 58,
  },
  emailForm: {
    top: 425,
    height: 68,
  },
  passwordFormChild: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: 41,
    borderRadius: Border.br_xs,
    top: 28,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    width: 314,
  },
  text: {
    top: 42,
    width: 94,
  },
  password: {
    left: 4,
    width: 107,
  },
  passwordForm: {
    top: 514,
    height: 69,
  },
  forgotPassword: {
    left: 198,
    width: 111,
  },
  rememberMe: {
    left: 21,
    width: 98,
  },
  rememberForgotChild: {
    top: 2,
    borderRadius: Border.br_9xs,
    backgroundColor: "rgba(196, 196, 196, 0)",
    width: 14,
    height: 13,
  },
  rememberForgot: {
    top: 604,
    width: 309,
    height: 19,
    left: 58,
    position: "absolute",
  },
  signIn: {
    top: 8,
    left: 131,
    color: Color.lightBackgroundRed,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  signInButton: {
    top: 661,
    backgroundColor: Color.colorPurple,
    shadowColor: "rgba(233, 68, 75, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 312,
    height: 37,
    borderRadius: Border.br_xs,
    left: 58,
    position: "absolute",
  },
  dontHaveAn: {
    color: "#595959",
  },
  text1: {
    color: Color.colorBlack,
  },
  signUp: {
    color: "#ea454c",
  },
  dontHaveAnContainer: {
    top: 723,
    left: 107,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.3,
    width: 216,
    height: 15,
  },
  loginPage: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoginPage;
