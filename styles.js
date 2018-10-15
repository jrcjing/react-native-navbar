import { Dimensions } from 'react-native';

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;

const IPhoneX_NAVBAR_ADD_HEIGHT = 24;
const isIPhoneX = Dimensions.get('window').iPhoneXSeries; // Dimensions add iPhoneXSeries prop ("react-native": "https://github.com/yueshuaijie/react-native/raw/10896754c1335a9897789a115095d81199a20b88/react-native-0.30.0.tgz")

module.exports = {
  navBarContainer: {
    backgroundColor: 'white',
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  },
  navBar: {
    height: isIPhoneX ? NAV_BAR_HEIGHT + IPhoneX_NAVBAR_ADD_HEIGHT : NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: 'center',
  },
  navBarButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: isIPhoneX ? IPhoneX_NAVBAR_ADD_HEIGHT : 0,
  },
  navBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: isIPhoneX ? IPhoneX_NAVBAR_ADD_HEIGHT : 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitleText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#333',
    fontWeight: '500',
  },
};
