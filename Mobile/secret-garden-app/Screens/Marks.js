import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Marks = () => {
  return (
    <View style={styles.marks}>
      <View style={[styles.marksChild, styles.marksLayout]} />
      <View style={[styles.marksItem, styles.marksLayout]} />
      <View style={[styles.marksInner, styles.marksLayout]} />
      <View style={[styles.englishQuiz1Parent, styles.englishLayout]}>
        <Text style={[styles.englishQuiz1, styles.marks1Typo]}>
          English Quiz 1
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Text style={styles.text}>10/10</Text>
      </View>
      <View style={[styles.englishQuiz1Group, styles.englishLayout]}>
        <Text style={[styles.englishQuiz1, styles.marks1Typo]}>
          English Quiz 1
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Text style={styles.text}>10/10</Text>
      </View>
      <View style={[styles.englishQuiz1Container, styles.englishLayout]}>
        <Text style={[styles.englishQuiz1, styles.marks1Typo]}>
          English Quiz 1
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Text style={styles.text}>10/10</Text>
      </View>
      <View style={[styles.rectangleView, styles.groupChildPosition]} />
      <Text style={[styles.marks1, styles.marks1Typo]}>Marks</Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  marksLayout: {
    height: 3,
    width: 433,
    borderTopWidth: 3,
    borderColor: Color.colorPurple,
    borderStyle: "solid",
    left: -1,
    position: "absolute",
  },
  englishLayout: {
    width: 345,
    left: 32,
    height: 57,
    position: "absolute",
  },
  marks1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  marksChild: {
    top: 214,
  },
  marksItem: {
    top: 294,
  },
  marksInner: {
    top: 374,
  },
  englishQuiz1: {
    top: 19,
    fontSize: FontSize.size_10xl,
    letterSpacing: 0.9,
    left: 0,
  },
  groupChild: {
    left: 231,
    borderRadius: Border.br_31xl,
    width: 114,
    height: 57,
  },
  text: {
    top: 21,
    left: 253,
    fontSize: FontSize.size_7xl,
    lineHeight: 18,
    fontFamily: FontFamily.robotoMedium,
    color: Color.lightBackgroundRed,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  englishQuiz1Parent: {
    top: 143,
    height: 57,
  },
  englishQuiz1Group: {
    top: 224,
    height: 57,
  },
  englishQuiz1Container: {
    top: 304,
    height: 57,
  },
  rectangleView: {
    backgroundColor: Color.colorPurple,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 430,
    height: 130,
    left: 0,
  },
  marks1: {
    top: 75,
    left: 167,
    fontSize: FontSize.size_14xl,
    letterSpacing: 1,
    width: 96,
    height: 20,
  },
  menuIcon: {
    top: 65,
    left: 23,
    width: 40,
    height: 40,
    position: "absolute",
  },
  marks: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Marks;
