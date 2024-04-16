import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Gallery = () => {
  return (
    <View style={styles.gallery}>
      <Image
        style={[styles.running1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/running-1.png")}
      />
      <Text style={[styles.track, styles.textTypo]}>Track</Text>
      <Text style={[styles.artCompetition, styles.textTypo]}>
        Art Competition
      </Text>
      <Text style={[styles.peterPanPlay, styles.textTypo]}>Peter Pan Play</Text>
      <Text style={[styles.swimming, styles.textTypo]}>Swimming</Text>
      <Image
        style={[styles.swimming1Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/swimming-1.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.image9Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={[styles.galleryChild, styles.childPosition]} />
      <Text style={styles.gallery1}>Gallery</Text>
      <Image
        style={[styles.menuIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.text, styles.textTypo]}>2024</Text>
        <Image
          style={styles.downButtonIcon}
          contentFit="cover"
          source={require("../assets/down-button1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 175,
    width: 175,
    borderRadius: Border.br_131xl,
    top: 248,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 18,
    color: Color.colorBlack,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition1: {
    left: 224,
    position: "absolute",
  },
  iconPosition: {
    left: 23,
    position: "absolute",
  },
  iconLayout: {
    top: 502,
    height: 175,
    width: 175,
    borderRadius: Border.br_131xl,
  },
  childPosition: {
    backgroundColor: Color.colorPurple,
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 57,
    width: 175,
    position: "absolute",
  },
  running1Icon: {
    left: 21,
    position: "absolute",
  },
  track: {
    top: 441,
    left: 81,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 18,
  },
  artCompetition: {
    top: 695,
    left: 30,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 18,
  },
  peterPanPlay: {
    top: 696,
    left: 240,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 18,
  },
  swimming: {
    top: 440,
    left: 255,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 18,
  },
  swimming1Icon: {
    height: 175,
    width: 175,
    borderRadius: Border.br_131xl,
    top: 248,
  },
  image4Icon: {
    top: 502,
    height: 175,
    width: 175,
    borderRadius: Border.br_131xl,
  },
  image9Icon: {
    left: 224,
    position: "absolute",
  },
  galleryChild: {
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
    position: "absolute",
  },
  gallery1: {
    top: 75,
    left: 141,
    fontSize: FontSize.size_14xl,
    letterSpacing: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    textAlign: "center",
    width: 147,
    height: 20,
    color: Color.colorBlack,
    fontWeight: "500",
    position: "absolute",
  },
  menuIcon: {
    top: 65,
    width: 40,
    height: 40,
  },
  groupChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPurple,
    left: 0,
    top: 0,
  },
  text: {
    top: 20,
    left: 44,
    fontSize: FontSize.size_5xl,
    width: 91,
    height: 17,
  },
  downButtonIcon: {
    top: 12,
    left: 117,
    width: 35,
    height: 35,
    position: "absolute",
  },
  rectangleParent: {
    top: 148,
    left: 127,
  },
  gallery: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Gallery;
