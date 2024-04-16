import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ParentResources = () => {
  return (
    <View style={styles.parentResources}>
      <Image
        style={[styles.image5Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={[styles.media, styles.mediaTypo]}>Media</Text>
      <Image
        style={[styles.image6Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Text style={[styles.disciplinaryTips, styles.mediaTypo]}>
        Disciplinary tips
      </Text>
      <Text style={[styles.printableCrafts, styles.moreResourcesTypo]}>
        Printable crafts
      </Text>
      <Text style={[styles.moreResources, styles.moreResourcesTypo]}>
        More resources
      </Text>
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <View style={styles.parentResourcesChild} />
      <Text style={[styles.resources, styles.mediaTypo]}>Resources</Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 188,
    width: 185,
    borderRadius: Border.br_131xl,
    top: 197,
    position: "absolute",
  },
  mediaTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    position: "absolute",
  },
  moreResourcesTypo: {
    top: 681,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout: {
    top: 472,
    height: 188,
    width: 185,
    borderRadius: Border.br_131xl,
    position: "absolute",
  },
  image5Icon: {
    left: 23,
  },
  media: {
    left: 88,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    top: 406,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  image6Icon: {
    left: 224,
  },
  disciplinaryTips: {
    left: 246,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    top: 406,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  printableCrafts: {
    left: 47,
  },
  moreResources: {
    left: 260,
  },
  image7Icon: {
    left: 23,
  },
  image8Icon: {
    left: 224,
  },
  parentResourcesChild: {
    top: 0,
    left: 0,
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
    position: "absolute",
  },
  resources: {
    top: 75,
    left: 141,
    fontSize: FontSize.size_14xl,
    letterSpacing: 1,
    width: 147,
    height: 20,
  },
  menuIcon: {
    top: 65,
    width: 40,
    height: 40,
    left: 23,
    position: "absolute",
  },
  parentResources: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default ParentResources;
