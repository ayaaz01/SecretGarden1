import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Inbox = () => {
  return (
    <View style={styles.inbox}>
      <View style={[styles.componentParent, styles.inboxChildLayout]}>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-21.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-22.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-23.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-24.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-25.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-26.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-27.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-28.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-29.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-210.png")}
              />
              <Text style={[styles.a10, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
        <View>
          <View style={styles.componentChild} />
          <View style={styles.groupParent}>
            <View style={[styles.ellipseParent, styles.groupChildPosition]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-211.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <Text style={[styles.subjectSwimmingWardrobe, styles.composeTypo1]}>
              Subject: Swimming Wardrobe
            </Text>
            <Text style={[styles.goodAfternoonPlease, styles.replyFlexBox]}>
              Good Afternoon, Please remember to pack the swimming wardrobe on
              the swimming day
            </Text>
            <Text style={[styles.ayaazEllemdeen, styles.composeTypo]}>
              Ayaaz Ellemdeen
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.replyLayout]}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
          <Text style={[styles.reply, styles.replyLayout]}>Reply</Text>
        </View>
      </View>
      <View style={[styles.inboxChild, styles.childPosition]} />
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Text style={styles.inbox1}>Inbox</Text>
      <View style={[styles.rectangleParent10, styles.groupChild9Layout]}>
        <View style={[styles.groupChild9, styles.groupChild9Layout]} />
        <Text style={[styles.compose, styles.composeTypo]}>Compose</Text>
        <Image
          style={styles.editIcon}
          contentFit="cover"
          source={require("../assets/edit.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inboxChildLayout: {
    width: 430,
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  aTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    lineHeight: 24,
    fontSize: FontSize.size_5xl,
    left: "36.38%",
    width: "27.24%",
    height: "44.88%",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  composeTypo1: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  replyFlexBox: {
    textAlign: "left",
    lineHeight: 18,
  },
  composeTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  replyLayout: {
    height: "20.59%",
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorPurple,
    top: 0,
    left: 0,
  },
  groupChild9Layout: {
    height: 57,
    width: 175,
    position: "absolute",
  },
  componentChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 445,
    height: 88,
    zIndex: 0,
  },
  groupChild: {
    height: "100%",
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  a: {
    top: "27.56%",
  },
  ellipseParent: {
    height: "60.91%",
    width: "17.58%",
    top: "16.55%",
    right: "82.42%",
    bottom: "22.54%",
  },
  subjectSwimmingWardrobe: {
    width: "72.6%",
    top: "31.18%",
    left: "25.14%",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    height: "27.58%",
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  goodAfternoonPlease: {
    height: "40.77%",
    width: "74.44%",
    top: "59.23%",
    left: "25.56%",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 18,
    position: "absolute",
  },
  ayaazEllemdeen: {
    width: "46.12%",
    left: "25.44%",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    height: "27.58%",
    textAlign: "center",
    lineHeight: 24,
    top: "0%",
  },
  groupParent: {
    height: "94.34%",
    width: "75.61%",
    top: "5.66%",
    right: "19.55%",
    left: "4.84%",
    zIndex: 1,
    bottom: "0%",
    position: "absolute",
  },
  vectorIcon: {
    width: "5.31%",
    top: "46.72%",
    right: "8.93%",
    bottom: "32.69%",
    left: "85.76%",
    zIndex: 2,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  reply: {
    width: "4.84%",
    top: "67.31%",
    left: "86.01%",
    fontSize: FontSize.size_5xs,
    zIndex: 3,
    textAlign: "left",
    lineHeight: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
  },
  a10: {
    top: "27.76%",
  },
  componentParent: {
    top: 132,
    height: 619,
    left: 0,
    width: 430,
  },
  inboxChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 130,
    width: 430,
    position: "absolute",
  },
  menuIcon: {
    top: 65,
    left: 23,
    width: 40,
    height: 40,
    position: "absolute",
  },
  inbox1: {
    top: 75,
    left: 168,
    fontSize: FontSize.size_14xl,
    letterSpacing: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    width: 93,
    height: 20,
    color: Color.colorBlack,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  groupChild9: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPurple,
    top: 0,
    left: 0,
  },
  compose: {
    top: 20,
    left: 27,
    width: 108,
    height: 17,
    textAlign: "left",
    lineHeight: 18,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  editIcon: {
    top: 4,
    left: 129,
    width: 29,
    height: 49,
    position: "absolute",
  },
  rectangleParent10: {
    top: 819,
    left: 232,
  },
  inbox: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    height: 1188,
    overflow: "hidden",
    width: "100%",
  },
});

export default Inbox;
