import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Newsletter = () => {
  return (
    <View style={styles.newsletter}>
      <View style={[styles.rectangleParent, styles.rectangleShadowBox]}>
        <View style={styles.groupChild} />
        <Text
          style={[styles.nemoEnimIpsam, styles.nemoLayout]}
        >{`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
March 13`}</Text>
        <Text style={[styles.sportsDayIncoming, styles.bakeSaleTypo]}>
          Sports day Incoming
        </Text>
        <Image
          style={[styles.image10Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleShadowBox]}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <Text
          style={[styles.nemoEnimIpsam1, styles.bakeSalePosition1]}
        >{`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
March 19`}</Text>
        <Text style={[styles.bakeSale, styles.bakeSalePosition]}>
          Bake Sale
        </Text>
        <Image
          style={[styles.image11Icon, styles.bakeSalePosition]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleShadowBox]}>
        <View style={styles.groupChild} />
        <Text
          style={[styles.nemoEnimIpsam, styles.nemoLayout]}
        >{`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
March 20`}</Text>
        <Text style={[styles.sportsDayIncoming, styles.bakeSaleTypo]}>
          Zoo Trip
        </Text>
        <Image
          style={[styles.image10Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </View>
      <View style={[styles.newsletterChild, styles.groupItemPosition]} />
      <Text style={styles.newsletter1}>Newsletter</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    width: 430,
    left: 0,
    height: 187,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  nemoLayout: {
    height: 126,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  bakeSaleTypo: {
    height: 23,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    lineHeight: 30,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
  },
  iconLayout: {
    height: 160,
    width: 120,
    left: 23,
  },
  groupItemPosition: {
    backgroundColor: Color.colorPurple,
    top: 0,
    width: 430,
    left: 0,
    position: "absolute",
  },
  bakeSalePosition1: {
    left: 183,
    width: 201,
    textAlign: "left",
    color: Color.colorGray_400,
  },
  bakeSalePosition: {
    top: 13,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    height: 187,
    width: 430,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorViolet,
  },
  nemoEnimIpsam: {
    top: 49,
    width: 201,
    textAlign: "left",
    color: Color.colorGray_400,
    left: 194,
  },
  sportsDayIncoming: {
    top: 15,
    position: "absolute",
    width: 201,
    textAlign: "left",
    color: Color.colorGray_400,
    left: 194,
  },
  image10Icon: {
    top: 15,
    position: "absolute",
  },
  rectangleParent: {
    top: 130,
    height: 187,
  },
  groupItem: {
    height: 187,
  },
  nemoEnimIpsam1: {
    top: 47,
    height: 126,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    letterSpacing: -0.2,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  bakeSale: {
    left: 183,
    width: 201,
    textAlign: "left",
    color: Color.colorGray_400,
    height: 23,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    lineHeight: 30,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xl,
  },
  image11Icon: {
    height: 160,
    width: 120,
    left: 23,
  },
  rectangleGroup: {
    top: 317,
    height: 187,
  },
  rectangleContainer: {
    top: 504,
    height: 187,
  },
  newsletterChild: {
    height: 130,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorPurple,
  },
  newsletter1: {
    top: 75,
    left: 130,
    fontSize: FontSize.size_14xl,
    letterSpacing: 1,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    color: Color.colorBlack,
    textAlign: "center",
    width: 170,
    height: 20,
    position: "absolute",
  },
  menuIcon: {
    top: 65,
    width: 40,
    height: 40,
    left: 23,
    position: "absolute",
  },
  downButtonIcon: {
    top: 30,
    left: 444,
    width: 90,
    height: 90,
    position: "absolute",
  },
  newsletter: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorViolet,
  },
});

export default Newsletter;
