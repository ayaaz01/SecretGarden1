import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Navigation1 = () => {
  return (
    <View style={styles.navigation}>
      <View style={[styles.rectangleParent, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <View style={styles.groupItem} />
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <View style={styles.groupItem} />
        <Text style={[styles.calendar, styles.profileTypo]}>Calendar</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <View style={styles.groupItem} />
        <Text style={[styles.marks, styles.marksTypo]}>Marks</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <View style={styles.groupItem} />
        <Text style={[styles.inbox, styles.marksTypo]}>Inbox</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Text style={[styles.aboutUs, styles.marksTypo]}>About us</Text>
        <View style={styles.groupItem} />
      </View>
      <View style={[styles.navigationChild, styles.childPosition]} />
      <Image
        style={styles.closeIcon}
        contentFit="cover"
        source={require("../assets/close.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    height: 70,
    left: "50%",
    marginLeft: -215,
  },
  childPosition: {
    top: 0,
    width: 430,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "center",
    color: Color.lightBackgroundRed,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  marksTypo: {
    top: 11,
    textAlign: "center",
    color: Color.lightBackgroundRed,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  groupChild: {
    height: 70,
    left: "50%",
    marginLeft: -215,
    top: 0,
    backgroundColor: Color.colorViolet,
  },
  groupItem: {
    top: 70,
    left: 87,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 256,
    height: 1,
    position: "absolute",
  },
  profile: {
    top: 13,
    left: 162,
  },
  rectangleParent: {
    top: 495,
    width: 430,
    height: 70,
    left: "50%",
    marginLeft: -215,
    position: "absolute",
  },
  calendar: {
    top: 6,
    left: 136,
  },
  rectangleGroup: {
    top: 431,
    width: 430,
    height: 70,
    left: "50%",
    marginLeft: -215,
    position: "absolute",
  },
  marks: {
    left: 165,
  },
  rectangleContainer: {
    top: 355,
    width: 430,
    height: 70,
    left: "50%",
    marginLeft: -215,
    position: "absolute",
  },
  inbox: {
    left: 169,
  },
  groupView: {
    top: 285,
    width: 430,
    height: 70,
    left: "50%",
    marginLeft: -215,
    position: "absolute",
  },
  aboutUs: {
    left: 139,
  },
  rectangleParent1: {
    top: 215,
    width: 430,
    height: 70,
    left: "50%",
    marginLeft: -215,
    position: "absolute",
  },
  navigationChild: {
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
    height: 130,
  },
  closeIcon: {
    top: 65,
    left: 360,
    width: 40,
    height: 40,
    position: "absolute",
  },
  navigation: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorViolet,
  },
});

export default Navigation1;
