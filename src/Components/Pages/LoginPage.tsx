import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "../../Styles/Login.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function LoginPage() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  return (
    <div className="login">
      <form className="login-form">
        <h2 className="title">Login</h2>
        <Stack spacing={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="User Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <ReCAPTCHA
            sitekey="6LfJx08qAAAAAD6aNeqEAuMity3ptk3nYeocbegi"
            onChange={(captchaValue: string | null) =>
              setCaptchaValue(captchaValue)
            }
          />
          <Button fullWidth variant="contained" disabled={!captchaValue}>
            Login
          </Button>
        </Stack>
      </form>
    </div>
  );
}
export default LoginPage;
