import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FORM_TYPE } from "../../../Consts/form.type";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <S.Div>
      <S.Wrap>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <p>로그인</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "55ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              style={{ display: "flex", justifyContent: "center" }}
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              {...register("email", FORM_TYPE.EMAIL_TYPE)}
            />

            {errors.email && (
              <span style={{ color: "red", display: "flex", justifyContent: "start" }}>
                {errors.email.message}
              </span>
            )}
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              {...register("password", FORM_TYPE.PW_TYPE)}
            />

            {errors.password && (
              <span style={{ color: "red", display: "flex", justifyContent: "start" }}>
                {errors.password.message}
              </span>
            )}
          </Box>
          <S.Button type="submit">로그인</S.Button>
          <S.SignUpBtn>신규회원이신가요?</S.SignUpBtn>
        </S.Form>
      </S.Wrap>
    </S.Div>
  );
};

export default LoginPage;
const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  height: 800px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  border: 1px solid beige;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 45%;
  padding: 40px 30px;
  max-width: 700px;
  min-width: 600px;

  & > p {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 80%;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  background: pink;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const SignUpBtn = styled.span`
  display: flex;
  /* position: absolute;
  top: 82%;
  right: 14%; */
  color: #357aff;
  font-size: 14px;
  border-bottom: 1px solid #357aff;
  cursor: pointer;
  margin-left: 400px;
  margin-top: 10px;
`;

const S = {
  Div,
  Wrap,
  Form,
  Button,
  SignUpBtn,
};
