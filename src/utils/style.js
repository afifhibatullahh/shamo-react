import {StyleSheet} from 'react-native';

const ColorPrimary = '#6C5ECF';
const ColorSecondary = '#38ABBE';
const ColorAlert = '#ED6363';
const ColorPrice = '#2C96F1';
const ColorBG1 = '#1F1D2B';
const ColorBG2 = '#2B2937';
const ColorBG3 = '#242231';
const ColorPrimaryText = '#F1F0F2';
const ColorSecondaryText = '#999999';

const globalStyles = StyleSheet.create({
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: ColorPrimaryText,
  },
  H3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: ColorPrimaryText,
  },
  bodyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: ColorPrimaryText,
  },
  bodyTextSecondary: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorSecondaryText,
  },
  bodyText2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: ColorPrimaryText,
  },
  labelText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: ColorPrimaryText,
  },
  captionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorPrimaryText,
  },
});

export {
  ColorAlert,
  ColorBG1,
  ColorBG2,
  ColorBG3,
  ColorPrice,
  ColorPrimary,
  ColorPrimaryText,
  ColorSecondary,
  ColorSecondaryText,
  globalStyles,
};
