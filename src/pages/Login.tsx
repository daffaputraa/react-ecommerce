import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Google } from "@mui/icons-material";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const googleAuth = new GoogleAuthProvider();

  const loginHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("invalid email")
        .required("Please insert email!"),
      password: Yup.string()
        .required("Please insert password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Ups, pastikan masukkan passwod dengan huruf besar, huruf kecil, dan spesial karakter"
        ),
    }),
    onSubmit: () => {
      console.log(formik.values);
    },
  });
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <Card className="flex flex-col items-start w-full max-w-lg">
          <CardHeader className="mb-3">
            <CardTitle>Hi! Welcome Back!</CardTitle>
            <CardDescription>Please enter your data to login!</CardDescription>
          </CardHeader>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <CardContent className="flex flex-col  w-full">
              <div className="w-full mb-3">
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
                    {formik.touched.email && formik.errors.email
                      ? `${formik.errors.email}`
                      : ""}
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
                    <small className={`text-red-500`}>
                      {formik.touched.password && formik.errors.password
                        ? `${formik.errors.password}`
                        : ""}
                    </small>
                  </div>
                </div>
              </div>
              <Button type="submit">Login</Button>
            </CardContent>
          </form>

          <p className="text-xs font-semibold text-gray-400 text-center mx-auto">
            OR
          </p>

          <CardFooter className="flex-col gap-2 w-full pt-6">
            <Button
              onClick={loginHandler}
              className="gap-2 w-full mb-2"
              variant={"outline"}
            >
              <Google></Google>
              Continue with Google
            </Button>

            <small className="text-sm font-medium leading-none">
              Don't have account?{" "}
              <Link to="/register" className="font-bold underline">
                Register here!
              </Link>
            </small>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
