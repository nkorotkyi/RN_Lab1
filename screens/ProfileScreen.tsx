import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

export default function ProfileScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")

  const handleRegister = () => {
    console.log({ email, password, repeatPassword, lastName, firstName })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>

      <TextInput style={styles.input} placeholder="Електронна пошта" value={email} onChangeText={setEmail} />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль (ще раз)"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />
      <TextInput style={styles.input} placeholder="Прізвище" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Ім'я" value={firstName} onChangeText={setFirstName} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
})
