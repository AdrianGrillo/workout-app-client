import React from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={styles.header}>
          {headerText}
        </Text>
      </Spacer>
      <Spacer />
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        labelStyle={styles.input}
      />
      <Spacer />
      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        labelStyle={styles.input}
      />
      <Spacer />
      {/* If an errorMessage exists, display it */}
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
          buttonStyle={styles.button}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    color: "#bb86fc",
  },
  errorMessage: {
    fontSize: 16,
    color: "#cf6679",
    marginLeft: 15,
    marginTop: 15,
  },
  input: {
    color: "#bb86fc",
  },
  button: {
    backgroundColor: "#03dac6",
  },
});

export default AuthForm;
