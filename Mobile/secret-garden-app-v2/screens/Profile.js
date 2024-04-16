import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.childGrade, styles.childLayout]}>
        <Text style={styles.grade}>Grade</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.kg2b, styles.kg2bTypo]}>KG 2B</Text>
        </View>
      </View>
      <View style={[styles.childName, styles.childLayout]}>
        <Text style={styles.grade}>Name</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.kg2b, styles.kg2bTypo]}>Miguel Peters</Text>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={styles.editProfileParent}>
          <Text style={[styles.editProfile, styles.securityTypo]}>
            Edit profile
          </Text>
          <Text style={[styles.security, styles.securityTypo]}>security</Text>
          <Text style={[styles.notifications, styles.securityTypo]}>
            Notifications
          </Text>
          <Text style={[styles.settings, styles.securityTypo]}>Settings</Text>
          <Image
            style={[styles.settingsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/settings-icon.png")}
          />
          <Image
            style={[styles.notificationIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/notification-icon.png")}
          />
          <Image
            style={[styles.securityIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/security-icon.png")}
          />
          <Image
            style={[styles.profileIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile-icon.png")}
          />
        </View>
      </View>
      <Image
        style={styles.profile1Icon}
        contentFit="cover"
        source={require("../assets/profile-1.png")}
      />
      <View style={[styles.profileChild, styles.groupInnerPosition]} />
      <Text style={[styles.child1, styles.kg2bTypo]}>Child 1</Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={styles.downButtonIcon}
        contentFit="cover"
        source={require("../assets/down-button.png")}
      />
      <Image
        style={styles.downButtonIcon1}
        contentFit="cover"
        source={require("../assets/down-button1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 69,
    width: 342,
    left: 44,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    left: 0,
    width: 342,
    position: "absolute",
  },
  kg2bTypo: {
    fontWeight: "500",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 172,
    left: "50%",
    marginLeft: -171,
    width: 342,
  },
  groupInnerPosition: {
    backgroundColor: Color.colorPurple,
    top: 0,
    position: "absolute",
  },
  securityTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 66,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 14,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    left: 0,
    position: "absolute",
  },
  grade: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 14,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  kg2b: {
    marginTop: -6,
    top: "50%",
    left: 15,
    fontSize: FontSize.size_sm,
    lineHeight: 12,
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_100,
    textAlign: "left",
  },
  rectangleParent: {
    top: 25,
  },
  childGrade: {
    top: 517,
  },
  childName: {
    top: 424,
  },
  groupInner: {
    height: 172,
    left: "50%",
    marginLeft: -171,
    width: 342,
    borderRadius: Border.br_7xs,
  },
  editProfile: {
    top: 8,
  },
  security: {
    top: 47,
  },
  notifications: {
    top: 86,
  },
  settings: {
    top: 125,
  },
  settingsIcon: {
    top: 117,
  },
  notificationIcon: {
    top: 78,
    overflow: "hidden",
  },
  securityIcon: {
    top: 39,
    overflow: "hidden",
  },
  profileIcon: {
    top: 0,
    overflow: "hidden",
  },
  editProfileParent: {
    top: 13,
    left: 16,
    width: 165,
    height: 147,
    position: "absolute",
  },
  rectangleContainer: {
    top: 626,
    position: "absolute",
  },
  profile1Icon: {
    top: 187,
    left: 126,
    borderRadius: Border.br_131xl,
    width: 177,
    height: 180,
    position: "absolute",
  },
  profileChild: {
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
    backgroundColor: Color.colorPurple,
  },
  child1: {
    top: 75,
    left: 155,
    fontSize: FontSize.size_14xl,
    letterSpacing: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    textAlign: "center",
    width: 105,
    height: 20,
    color: Color.colorBlack,
  },
  menuIcon: {
    top: 65,
    left: 23,
    width: 40,
    height: 40,
    position: "absolute",
  },
  downButtonIcon: {
    top: 30,
    left: 444,
    width: 90,
    height: 90,
    position: "absolute",
  },
  downButtonIcon1: {
    top: 70,
    left: 265,
    width: 35,
    height: 35,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Profile;
