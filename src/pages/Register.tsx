import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Google, Facebook } from "@mui/icons-material";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  // // initial value formik
  // const [color, setColor] = useState("");
  // const [validator, setValidator] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [isValidEmail, setIsValidEmail] = useState(true);
  // const [emailText, setEmailText] = useState("");

  // const handlePassword = (e: any) => {
  //   const newPassword = e.target.value;
  //   setPassword(newPassword);
  //   if (newPassword.length > 1) {
  //     setColor("text-red-500");
  //     setValidator("Your password is really weakkkk!😔");
  //   }
  //   if (newPassword.length == 5 || newPassword.length > 5) {
  //     setColor("text-yellow-500");
  //     setValidator(
  //       "Umm.., it's enough but would be better if you make it longer!🤗"
  //     );
  //   }
  //   if (newPassword.length > 8) {
  //     setColor("text-blue-500");
  //     setValidator("It's Enouggghhhh, cool 😄");
  //   }

  //   // pake if dulu biar gampang walau panjang
  // };

  // useEffect(() => {
  //   if (email.length > 1) {
  //     if (email.endsWith("@gmail.com")) {
  //       setIsValidEmail(true);
  //     } else {
  //       setIsValidEmail(false);
  //     }
  //   }
  // }, [email]);

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <div className="w-full px-4">
          <Card className="flex flex-col items-start w-full max-w-lg mx-auto">
            <CardHeader className="mb-3">
              <CardTitle>Hello! Let's Join Us!</CardTitle>
              <CardDescription>
                Input what it takes, to registes.
              </CardDescription>
            </CardHeader>
            <form onSubmit={formik.handleSubmit}>
              <CardContent className="flex flex-col  w-full">
                <div className="w-full mb-3">
                  <div className="mb-3 w-full">
                    <Label>Name</Label>
                    <Input
                      placeholder="Input your email here.."
                      className="w-full"
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                    ></Input>
                  </div>
                  <div className="mb-3 w-full">
                    <Label>Email</Label>
                    <Input
                      placeholder="Input your email here.."
                      className="w-full"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                    ></Input>
                    <small className={`text-red-500`}>
                      {/* {isValidEmail ? "" : `Please input valid email!`} */}
                    </small>
                  </div>
                  <div>
                    <div>
                      <Label>Password</Label>
                      <Input
                        placeholder="Input your password here.."
                        className="w-full inline-block"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                      ></Input>
                      {/* <small className={`${color}`}>{validator}</small> */}
                    </div>
                  </div>
                </div>
                <Button type="submit">Register</Button>
              </CardContent>
            </form>

            <small className="text-xs font-semibold text-gray-400 text-center mx-auto">
              OR
            </small>

            <CardFooter className="flex-col gap-2 w-full pt-6">
              <Button className="gap-2 w-full" variant={"outline"}>
                <Google></Google>
                Continue with Google
              </Button>
              <Button className="gap-2 w-full mb-2" variant={"outline"}>
                <Facebook></Facebook>
                Continue with Google
              </Button>
              <small className="text-sm font-medium leading-none">
                Already have an account?{" "}
                <Link to="/" className="font-bold underline">
                  Login Here!
                </Link>
              </small>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Register;
