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
import { Link, useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Register = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Karakter harus kurang dari 15")
        .required("Required"),
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Ups, pastikan masukkan passwod dengan huruf besar, huruf kecil, dan spesial karakter"
        ),
    }),
    onSubmit: (values) => {
      const existingData = JSON.parse(localStorage.getItem("data"));
      const newData = [existingData, values];
      console.log(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setData(newData);
      console.log(newData);

      formik.resetForm();

      // navigate("/login", { state: values });
    },
  });

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
            <form onSubmit={formik.handleSubmit} className="w-full">
              <CardContent className="flex flex-col  w-full">
                <div className="w-full mb-3">
                  <div className="mb-3 w-full">
                    <Label>Name</Label>
                    <Input
                      placeholder="Input your email here.."
                      className="w-full"
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    ></Input>
                    {formik.touched.name && formik.errors.name ? (
                      <small className="text-red-500">
                        {formik.errors.name}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-3 w-full">
                    <Label>Email</Label>
                    <Input
                      placeholder="Input your email here.."
                      className="w-full"
                      type="email"
                      name="email"
                      value={formik.values.email}
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
                        value={formik.values.password}
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
