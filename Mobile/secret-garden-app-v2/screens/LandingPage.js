import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <View style={styles.landingPage}>
      <Image
        style={styles.secretGardenLogo1}
        contentFit="cover"
        source={require("../assets/secret-garden-logo-1.png")}
      />
      <Text style={[styles.aboutSecretGarden, styles.referAFriendTypo]}>
        About Secret Garden Nursery School
      </Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.ourHistory, styles.ourTypo]}>{`Our History
 
Secret Garden Nursery School was opened when childcare was needed for four toddlers in the family. We wanted care for the children that catered for them as individuals, in a family situation. When friends heard about us, they wanted their children to join. “It’s the sort of place you’d want your children to go to.”
We are pleased to report that 7 children from our own family have passed through or are currently attending Secret Garden. These include 2 of our own boys and 5 grandchildren.
The aim of our school is: To provide the type of care children would have from a family member who loves children and at the same time has knowledge and experience in child care and child development.`}</Text>
      <Image
        style={[styles.image2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.ourPhilosophy, styles.ourTypo]}>{`Our Philosophy
 
Since March 2008 Secret Garden has grown into the happy fun filled preschool that it is today. Secret Garden is split into three separate sections. We take babies from 3 months in our dedicated baby nursery. As they become ready they move to our baby toddler class for children up to 2 years. 
When the children are turning 3, they move to our grade 0000 class, the older toddler age group.
Our 4 to 6 year olds are grouped according to age in the “senior” section of the school.
Emphasis is placed on kindness towards children. Their individual development is nurtured through play and age appropriate structured activities. Groups are small and well supervised by carefully selected staff.
`}</Text>
      <Text style={[styles.ourBeliefs, styles.ourTypo]}>{`Our Beliefs

Christianity is our cornerstone. Bible stories are read daily and prayers are said. Bible verses are memorised. Christian values are presented in an age appropriate way. 
We do however welcome children from all faiths and pray that the kindness and caring of our staff shines through to all.
Our school is set in a lovely garden on a large double plot property in Vorna Valley. The atmosphere is happy and peaceful as well as lots of fun.`}</Text>
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Text
        style={[styles.referAFriend, styles.referAFriendTypo]}
      >{`Refer a friend and get a discount on your next payment

Use the link Below`}</Text>
      <View style={[styles.landingPageChild, styles.childPosition]} />
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.referAFriend1}>Refer a friend</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  referAFriendTypo: {
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanMedium,
    letterSpacing: 1.1,
    color: Color.colorBlack,
    fontWeight: "500",
    position: "absolute",
  },
  ourTypo: {
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
    width: 365,
    left: 33,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    width: 364,
    height: 274,
    position: "absolute",
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
  secretGardenLogo1: {
    top: 140,
    left: 68,
    width: 282,
    height: 193,
    position: "absolute",
  },
  aboutSecretGarden: {
    top: 372,
    left: 53,
    fontSize: 36,
    width: 325,
    height: 99,
  },
  image1Icon: {
    top: 515,
    height: 274,
    width: 365,
    left: 33,
    position: "absolute",
  },
  ourHistory: {
    top: 813,
    height: 414,
  },
  image2Icon: {
    top: 1249,
    left: 34,
  },
  ourPhilosophy: {
    top: 1552,
    height: 413,
  },
  ourBeliefs: {
    top: 2281,
    height: 251,
  },
  image3Icon: {
    top: 1976,
    left: 33,
    width: 364,
  },
  referAFriend: {
    top: 2605,
    left: 46,
    fontSize: 35,
    width: 337,
  },
  landingPageChild: {
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
  menuIcon: {
    top: 65,
    left: 28,
    width: 40,
    height: 40,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPurple,
    left: 0,
    top: 0,
  },
  referAFriend1: {
    top: 20,
    left: 15,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleParent: {
    top: 2801,
    left: 128,
  },
  landingPage: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    width: "100%",
    height: 2961,
  },
});

export default LandingPage;
