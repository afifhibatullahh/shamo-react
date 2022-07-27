import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  ColorAlert,
  ColorBG1,
  ColorBG2,
  ColorPrice,
  ColorPrimary,
  ColorSecondary,
  ColorSecondaryText,
  globalStyles,
} from '../utils/style';
import Icon from 'react-native-vector-icons/Ionicons';

const InputText = ({labelText, icon, placeholder}) => {
  return (
    <View>
      <Text style={{...globalStyles.labelText, marginBottom: 12}}>
        {labelText}
      </Text>
      <View style={styles.inputContainer}>
        <Icon
          name={icon}
          size={24}
          color={ColorSecondary}
          style={{marginLeft: 17}}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={ColorSecondaryText}
        />
      </View>
    </View>
  );
};

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{...globalStyles.titleText, marginTop: 30}}>Login</Text>
      <Text
        style={{
          ...globalStyles.bodyTextSecondary,
          marginTop: 2,
          marginBottom: 70,
        }}>
        Sign In to Countinue
      </Text>
      <InputText
        labelText="Email Address"
        icon="mail"
        placeholder="Your Email Address"
      />
      <View style={{marginTop: 20}} />
      <InputText labelText="Password" icon="mail" placeholder="Your Password" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={globalStyles.H3}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorBG1,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: ColorBG2,
    borderRadius: 12,
    alignItems: 'center',
    padding: 5,
  },
  input: {
    marginLeft: 16,
    color: ColorSecondaryText,
    ...globalStyles.bodyText2,
  },
  button: {
    alignItems: 'center',
    backgroundColor: ColorPrimary,
    borderRadius: 12,
    marginTop: 30,
    paddingVertical: 13,
  },
});
