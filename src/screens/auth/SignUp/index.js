// SignUp.js
import React , {useState} from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignIn = ()=>{
      navigation.navigate('SignIn');
    }
    const onBack=() =>{
      navigation.goBack();
    };
  return (
    <View style={styles.container}>
      <AuthHeader  onBackPress={onBack}  title="Sign Up" />
      <Input label="Name" placeholder="Example John" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />

      <View style={styles.checkRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
        </View>
      <View  style = {{alignItems:'center', marginTop: 25}}>
        <Button style={styles.button} title={"Sign Up"}></Button>
        </View>

        <Seperator text= "Or sign up with"></Seperator>
        <GoogleLogin></GoogleLogin>

        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            Sign In
          </Text>
        </Text>
        </View>
  );
};

export default SignUp;
