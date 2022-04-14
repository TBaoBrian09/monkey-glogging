import { Input } from "components/input";
import { Label } from "components/label";
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { values } from "lodash";
import { IconEyeCLose, IconEyeOpen } from "components/icon";
import Field from "components/field/Field";
import { Button } from "components/button";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm();
  const handleSignUp = (values) => {
    console.log(values);
  };
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-glogging" className="logo" />
        <h1 className="heading">Monkey heading</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="fullname">password address</Label>
            <Input
              type={togglePassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password address"
              control={control}
            >
              {!togglePassword ? (
                <IconEyeCLose
                  onCLick={() => setTogglePassword(true)}
                ></IconEyeCLose>
              ) : (
                <IconEyeOpen
                  onCLick={() => setTogglePassword(false)}
                ></IconEyeOpen>
              )}
            </Input>
          </Field>
          <Button type="submit" disabled>
            Sign Up
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
