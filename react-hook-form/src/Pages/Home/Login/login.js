import { useForm } from "react-hook-form";
import styled from "styled-components";

const LoginPage = () => {
  //  useForm 훅함수를 불러와 register(), handleSubmit() 함수를 얻음
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));
  // console.log(data);

  return (
    <S.Div>
      <S.Wrap>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <p>로그인</p>
          <input
            {...register("email", {
              required: "email을 입력해주세요",
              maxLength: 20,
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: "email 형식에 맞지 않습니다.",
              },
            })}
            placeholder="E-mail"
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              maxLength: { value: 18, message: "비밀번호는 최대 18자 입니다" },
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
              pattern: {
                value: /^.*(?=^.{8,18}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                message: "특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요",
              },
            })}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
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

  & > input {
    width: 80%;
    height: 20px;
    border: 1px solid beige;
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    padding: 20px;
  }
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
  position: absolute;
  top: 82%;
  right: 14%;
  color: #357aff;
  font-size: 14px;
  border-bottom: 1px solid #357aff;
  cursor: pointer;
`;

const S = {
  Div,
  Wrap,
  Form,
  Button,
  SignUpBtn,
};
