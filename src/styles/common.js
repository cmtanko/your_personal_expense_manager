import {StyleSheet, Platform, Dimensions} from 'react-native';

export const COLOR_BLACK = '#202020';

export const COLOR_GRAY_LIGHT = '#e5e5e5';
export const COLOR_GRAY_LIGHT2 = '#c7c7c7';
export const COLOR_GRAY = '#666666';
export const COLOR_GRAY_DARK = '#393939';
export const COLOR_GRAY_DARK2 = '#5b5b5b';

export const COLOR_LIGHT_YELLOW = '#f5c223';
export const COLOR_T_BLUE = '#2196f3';

export const COLOR_PRIMARY = '#0F171E';
export const COLOR_SECONDARY = '#131D28';
export const COLOR_TERTIARY = '#22e3c4';
export const COLOR_SUCCESS = '#1DDC7C';
export const COLOR_DANGER = '#E2A3FF';
export const COLOR_INFO = '#FFFFFF';
export const COLOR_WARNING = '#0B1117';

export default StyleSheet.create({
  brandColorPrimary: {color: COLOR_PRIMARY},
  brandColorSecondary: {color: COLOR_SECONDARY},
  brandColorTertiary: {color: COLOR_TERTIARY},
  brandColorSuccess: {color: COLOR_SUCCESS},
  brandColorDanger: {color: COLOR_DANGER},
  brandColorInfo: {color: COLOR_INFO},
  brandColorWarning: {color: COLOR_WARNING},

  brandBgColorPrimary: {backgroundColor: COLOR_PRIMARY},
  brandBgColorSecondary: {backgroundColor: COLOR_SECONDARY},
  brandBgColorTertiary: {backgroundColor: COLOR_TERTIARY},
  brandBgColorSuccess: {backgroundColor: COLOR_SUCCESS},
  brandBgColorDanger: {backgroundColor: COLOR_DANGER},
  brandBgColorInfo: {backgroundColor: COLOR_INFO},
  brandBgColorWarning: {backgroundColor: COLOR_WARNING},

  // BackgroundColor
  bg_white: {backgroundColor: COLOR_INFO},
  bg_black: {backgroundColor: COLOR_BLACK},
  bg_dark_blue: {backgroundColor: COLOR_PRIMARY},
  bg_dark_lightblue: {backgroundColor: COLOR_SECONDARY},
  bg_light_green: {backgroundColor: COLOR_SUCCESS},

  // Color
  color_white: {color: COLOR_INFO},
  color_black: {color: COLOR_BLACK},
  color_grey: {color: COLOR_GRAY},
  color_light_red: {color: COLOR_DANGER},
  color_light_blue: {color: COLOR_TERTIARY},

  // Button
  button: {
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    backgroundColor: COLOR_TERTIARY,
  },

  // Button Text
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR_WARNING,
  },

  // TextError
  errorText: {
    color: 'red',
    padding: 15,
    textAlign: 'center',
  },

  // Image
  image: {
    width: 200,
    height: 200,
    flex: 1,
    alignSelf: 'center',
  },

  // font
  h1: {
    fontSize: 35,
    fontWeight: '700',
  },

  h2: {
    fontSize: 20,
    fontWeight: '700',
  },

  h3: {
    fontSize: 14,
  },

  h4: {
    fontSize: 12,
  },

  h5: {
    fontSize: 10,
  },

  h6: {
    fontSize: 8,
  },

  pt8: {
    paddingTop: 8,
  },

  pb8: {
    paddingBottom: 8,
  },
  // text

  overview_heading: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
  },

  overview_title: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
    paddingTop: 4,
  },

  overview_subtitle: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
  },

  header_title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'android' ? 10 : 12,
  },
  round_box_container: {
    backgroundColor: '#1A283B',
    height: 72,
    width: 142,
    borderRadius: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  round_box_container_active: {
    backgroundColor: '#DD0D1F',
    height: 72,
    width: 142,
    borderRadius: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  center: {
    textAlign: 'center',
  },

  header_block: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 16,
  },

  header_block_right: {
    padding: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#264D30',
    width: '36%',
    alignItems: 'center',
  },

  header_block_left: {
    padding: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#412C4C',
    width: '36%',
    alignItems: 'center',
  },

  // Views

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_PRIMARY,
  },

  // Icons
  active_icon: {
    fontSize: 35,
    alignSelf: 'center',
    color: '#22e3c4',
  },

  inactive_icon: {
    fontSize: 35,
    alignSelf: 'center',
    color: 'gray',
  },

  left_icon: {
    fontSize: 24,
    color: '#22e3c4',
    width: 36,
  },

  round_icon: {
    color: '#22e3c4',
    paddingTop: 12,
    fontSize: 24,
  },

  round_icon_title: {
    fontSize: 10,
    color: '#ffffff',
    top: 16,
  },

  round_icon_container: {
    height: 48,
    width: 48,
    borderRadius: 48,
    borderColor: '#243855',
    borderWidth: 2,
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  round_icon_container_active: {
    height: 48,
    width: 48,
    borderRadius: 48,
    borderColor: '#DD0D1F',
    borderWidth: 2,
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DD0D1F',
  },

  // Label
  label: {
    color: COLOR_GRAY,
    paddingLeft: 0,
  },

  // Drawer
  drawer_content: {
    height: 120,
    width: '100%',
    alignSelf: 'stretch',
    position: 'absolute',
  },

  // summary
  summary_header: {
    alignSelf: 'center',
    margin: 8,
  },

  // Timeline
  timeline_description: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#666666',
  },

  timeline_amount_income: {
    fontSize: 16,
    color: COLOR_SUCCESS,
    textAlign: 'right',
    paddingRight: 10,
  },

  timeline_amount_expense: {
    fontSize: 16,
    color: COLOR_DANGER,
    textAlign: 'right',
    paddingRight: 10,
  },

  timeline_amount_transfer: {
    fontSize: 16,
    color: '#2196f3',
    textAlign: 'right',
    paddingRight: 10,
  },

  // Card

  card_body: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Fab
  actionButtonIcon: {
    fontSize: 25,
    height: 25,
    color: 'white',
  },

  form: {
    marginLeft: 20,
    marginRight: 20,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: Dimensions.get('window').width / 5,
  },

  activeIcon: {
    fontSize: 30,
    color: '#22e3c4',
  },

  inactiveIcon: {
    fontSize: 30,
    paddingRight: 8,
    color: 'gray',
  },

  activeText: {
    fontSize: 11,
    paddingRight: 8,
    color: '#22e3c4',
  },

  inactiveText: {
    fontSize: 11,
    color: 'gray',
  },

  whiteBorder: {
    borderColor: '#00000000',
  },

  // chart

  chart_block: {
    borderRadius: 10,
    backgroundColor: '#2c2c3f',
    width: '100%',
    alignItems: 'center',
  },

  padding_large: {
    paddingTop: 8,
    paddingBottom: 8,
  },

  spacer: {
    paddingTop: 8,
  },

  borderZero: {
    borderBottomWidth: 0,
  },

  // Section

  section_bottom: {
    flex: 1,
    backgroundColor: '#121924',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: -48,
    zIndex: -9999,
  },

  p_t_0: {
    paddingTop: 0,
  },

  p_t_2: {
    paddingTop: 2,
  },

  p_t_4: {
    paddingTop: 4,
  },

  p_t_8: {
    paddingTop: 8,
  },

  p_t_12: {
    paddingTop: 12,
  },

  p_t_16: {
    paddingTop: 16,
  },

  center_item: {
    alignItems: 'center',
  },
});
