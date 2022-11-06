import { StyleSheet } from 'react-native';
import { theme } from '../../Style/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: theme.tabBar,
  },
  boxInformation: {
    width: '50%',
  },
  information: {
    color: theme.white,
  },
});
