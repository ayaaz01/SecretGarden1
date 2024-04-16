import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <View style={[styles.parent, styles.parentBorder]}>
        <Text style={styles.text}>7</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags1, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Orange Tag</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={styles.text}>6</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags7, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Regular Tag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.container, styles.groupLayout]}>
        <Text style={styles.text}>5</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags1, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Orange Tag</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.parentBorder]}>
        <Text style={styles.text}>4</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags1, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Orange Tag</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags15, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.greenTag, styles.tagTypo]}>Green Tag</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.parent1, styles.parentBorder]}>
        <Text style={styles.text}>3</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent2, styles.parentLayout11]}>
        <Text style={styles.text}>2</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
          <View style={[styles.tags7, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Regular Tag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent3, styles.parentLayout11]}>
        <Text style={styles.text}>1</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags1, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Orange Tag</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags7, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Regular Tag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent4, styles.parentBorder]}>
        <Text style={styles.text}>8</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags7, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Regular Tag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent5, styles.parentLayout10]}>
        <Text style={styles.text}>9</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags1, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Orange Tag</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Red Tag</Text>
            </View>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Regular Tag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent6, styles.parentLayout10]}>
        <Text style={styles.text}>10</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags1, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Orange Tag</Text>
          </View>
          <View style={[styles.tags2, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Edit file</Text>
            </View>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent7, styles.parentLayout9]}>
        <Text style={styles.text}>12</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags38, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Edit file</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.parent8, styles.parentLayout9]}>
        <Text style={styles.text}>13</Text>
        <View style={styles.tagsParent}>
          <View style={styles.tagsSpaceBlock}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent9, styles.parentLayout8]}>
        <Text style={styles.text}>11</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent10, styles.parentLayout8]}>
        <Text style={styles.text}>14</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent11, styles.parentLayout7]}>
        <Text style={styles.text}>15</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent12, styles.parentLayout7]}>
        <Text style={styles.text}>16</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
          <View style={[styles.tags15, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Edit file</Text>
            </View>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent13, styles.parentLayout6]}>
        <Text style={styles.text}>17</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags38, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.greenTag, styles.tagTypo]}>Green Tag</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.parent14, styles.parentLayout6]}>
        <Text style={styles.text}>18</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent15, styles.parentLayout5]}>
        <Text style={styles.text}>19</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent16, styles.parentLayout5]}>
        <Text style={styles.text}>20</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags38, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.greenTag, styles.tagTypo]}>Green Tag</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.parent17, styles.parentLayout4]}>
        <Text style={styles.text}>21</Text>
        <View>
          <Text style={[styles.text21, styles.tagTypo]}>-</Text>
        </View>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent18, styles.parentLayout4]}>
        <Text style={styles.text}>22</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent19, styles.parentLayout3]}>
        <Text style={styles.text}>23</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Blue Tag</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Orange Tag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent20, styles.parentLayout3]}>
        <Text style={styles.text}>24</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags38, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Edit file</Text>
            </View>
          </View>
          <View style={[styles.tags3, styles.tagsSpaceBlock]}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent21, styles.parentLayout2]}>
        <Text style={styles.text}>25</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent22, styles.parentLayout2]}>
        <Text style={styles.text}>26</Text>
        <View style={styles.tagsParent}>
          <View style={styles.tagsSpaceBlock}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Note taking</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent23, styles.parentLayout1]}>
        <Text style={styles.text}>27</Text>
        <View style={styles.tagsParent}>
          <View style={styles.tagsSpaceBlock}>
            <Text style={[styles.regularTag, styles.tagTypo]}>Regular Tag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent24, styles.parentLayout1]}>
        <Text style={styles.text}>28</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
          <View style={[styles.tags5, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent25, styles.parentLayout]}>
        <Text style={styles.text}>29</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.blueTag, styles.tagTypo]}>Design</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent26, styles.parentLayout]}>
        <Text style={styles.text}>30</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags22, styles.tagsSpaceBlock1]}>
            <Text style={[styles.orangeTag, styles.tagTypo]}>Development</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent27, styles.parentBorder]}>
        <Text style={styles.text}>31</Text>
        <View style={styles.tagsParent}>
          <View style={[styles.tags38, styles.tagsSpaceBlock1]}>
            <View>
              <Text style={[styles.redTag, styles.tagTypo]}>Edit File</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.calendarChild, styles.childPosition]} />
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Text style={[styles.calendar1, styles.januaryClr]}>Calendar</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.january, styles.januaryClr]}>January</Text>
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
  parentBorder: {
    padding: Padding.p_xs,
    justifyContent: "space-between",
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  tagsSpaceBlock1: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.lightBackgroundRed,
  },
  tagTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  tagsSpaceBlock: {
    backgroundColor: Color.lightGrayscale400,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_9xs,
  },
  groupLayout: {
    top: 652,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout11: {
    top: 222,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout10: {
    top: 1082,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout9: {
    top: 1297,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout8: {
    top: 1512,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout7: {
    top: 1727,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout6: {
    top: 1942,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout5: {
    top: 2157,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout4: {
    top: 2372,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout3: {
    top: 2587,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout2: {
    top: 2802,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout1: {
    top: 3017,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  parentLayout: {
    top: 3232,
    padding: Padding.p_xs,
    justifyContent: "space-between",
    height: 216,
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorPurple,
    top: 0,
    left: 0,
  },
  januaryClr: {
    color: Color.colorBlack,
    fontWeight: "500",
    position: "absolute",
  },
  groupChildLayout: {
    height: 57,
    width: 175,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_2xl,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  blueTag: {
    color: Color.lightBlueBase,
  },
  tags: {
    display: "none",
    flexDirection: "row",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
  },
  orangeTag: {
    color: Color.darkOrangeBase,
  },
  tags1: {
    marginTop: 6,
    display: "none",
    flexDirection: "row",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
  },
  redTag: {
    color: Color.lightRedBase,
  },
  tags2: {
    marginTop: 6,
    display: "none",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
  },
  regularTag: {
    color: Color.lightGrayscale200,
  },
  tags3: {
    marginTop: 6,
  },
  tagsParent: {
    alignSelf: "stretch",
    padding: Padding.p_11xs,
  },
  parent: {
    height: 216,
    justifyContent: "space-between",
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    left: 0,
    top: 867,
  },
  tags5: {
    marginTop: 6,
    flexDirection: "row",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
  },
  tags7: {
    marginTop: 6,
    display: "none",
  },
  group: {
    left: 215,
  },
  container: {
    left: 0,
  },
  greenTag: {
    color: Color.lightGreenBase,
  },
  tags15: {
    marginTop: 6,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
  },
  frameView: {
    top: 438,
    height: 215,
    left: 215,
    justifyContent: "space-between",
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
  },
  parent1: {
    top: 437,
    height: 216,
    justifyContent: "space-between",
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    left: 0,
  },
  parent2: {
    left: 215,
  },
  tags22: {
    flexDirection: "row",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
  },
  parent3: {
    left: 0,
  },
  parent4: {
    left: 215,
    height: 216,
    justifyContent: "space-between",
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    top: 867,
  },
  parent5: {
    left: 0,
  },
  parent6: {
    left: 213,
  },
  tags38: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_9xs,
  },
  parent7: {
    left: 0,
  },
  parent8: {
    left: 215,
  },
  parent9: {
    left: 0,
  },
  parent10: {
    left: 216,
  },
  parent11: {
    left: 0,
  },
  parent12: {
    left: 213,
  },
  parent13: {
    left: 0,
  },
  parent14: {
    left: 213,
  },
  parent15: {
    left: 0,
  },
  parent16: {
    left: 213,
  },
  text21: {
    color: Color.lightGrayscale400,
  },
  parent17: {
    left: 0,
  },
  parent18: {
    left: 213,
  },
  parent19: {
    left: 0,
  },
  parent20: {
    left: 213,
  },
  parent21: {
    left: 0,
  },
  parent22: {
    left: 213,
  },
  parent23: {
    left: 0,
  },
  parent24: {
    borderBottomRightRadius: Border.br_5xs,
    left: 213,
  },
  parent25: {
    borderBottomLeftRadius: Border.br_5xs,
    left: 0,
  },
  parent26: {
    left: 213,
  },
  parent27: {
    top: 3447,
    height: 216,
    justifyContent: "space-between",
    width: 216,
    borderWidth: 1,
    borderColor: Color.lightGrayscale400,
    borderStyle: "solid",
    backgroundColor: Color.lightBackgroundRed,
    left: 0,
  },
  calendarChild: {
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
    left: 23,
    width: 40,
    height: 40,
    position: "absolute",
  },
  calendar1: {
    top: 75,
    left: 141,
    fontSize: FontSize.size_14xl,
    letterSpacing: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    textAlign: "center",
    width: 147,
    height: 20,
  },
  groupChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPurple,
    top: 0,
    left: 0,
  },
  january: {
    top: 20,
    left: 27,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontFamily: FontFamily.robotoMedium,
    width: 108,
    height: 17,
    textAlign: "left",
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
  calendar: {
    backgroundColor: Color.colorViolet,
    flex: 1,
    width: "100%",
    height: 3662,
    overflow: "hidden",
  },
});

export default Calendar;
