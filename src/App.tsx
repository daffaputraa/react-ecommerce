import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Google, Facebook } from "@mui/icons-material";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <Card className="flex flex-col items-start w-full max-w-lg">
          <CardHeader className="mb-3">
            <CardTitle>Hi! Welcome Back!</CardTitle>
            <CardDescription>Please enter your data to login!</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col  w-full">
            <div className="w-full mb-3">
              <div className="mb-3 w-full">
                <Label>Email</Label>
                <Input
                  placeholder="Input your email here.."
                  className="w-full"
                  type="email"
                ></Input>
              </div>
              <div>
                <div>
                  <Label>Password</Label>
                  <Input
                    placeholder="Input your password here.."
                    className="w-full inline-block"
                    type="password"
                  ></Input>
                </div>
              </div>
            </div>
            <Button>Login</Button>
          </CardContent>

          <p className="text-xs font-semibold text-gray-400 text-center mx-auto">
            OR
          </p>

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
              Don't have account?{" "}
              <a href="Register here!" className="font-bold underline">
                Register here!
              </a>
            </small>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
