import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FORM_TYPE } from "../../Consts/form.type";

const Prt = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    alert("회원가입에 성공하셨습니다!");
    let info = {
      email: data.email,
      pw: data.password,
      nickName: data.nickName,
      phone: data.phoneNumber,
      region: "서울 강남구 역삼동",
    };
    console.log(info);
  };

  const textStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <S.Div>
      <S.Wrap>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <p>회원가입</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, minWidth: "600px" },
            }}
            noValidate
            autoComplete="off"
          >
            <S.InputWrapBtn>
              <S.ItemWrap>
                <S.Mark>*</S.Mark>
                <span>아이디</span>
              </S.ItemWrap>
              <S.InputBoxWrap>
                <TextField
                  style={textStyle}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  {...register("email", FORM_TYPE.EMAIL_TYPE)}
                />
                <button>중복확인</button>
              </S.InputBoxWrap>
            </S.InputWrapBtn>
            {errors.email && <S.Error>{errors.email.message}</S.Error>}

            <S.InputWrap>
              <S.ItemWrap>
                <S.Mark>*</S.Mark>
                <span>비밀번호</span>
              </S.ItemWrap>

              <S.InputBoxWrap>
                <TextField
                  style={textStyle}
                  id="outlined-basic"
                  label="pw"
                  variant="outlined"
                  {...register("password", FORM_TYPE.PW_TYPE)}
                  type="password"
                />
              </S.InputBoxWrap>
            </S.InputWrap>
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
            <S.InputWrap>
              <S.ItemWrap>
                <S.Mark>*</S.Mark>
                <span>비밀번호 확인</span>
              </S.ItemWrap>
              <S.InputBoxWrap>
                <TextField
                  style={textStyle}
                  id="outlined-basic"
                  label="pw_check"
                  variant="outlined"
                  {...register("confirmPW", {
                    required: true,
                    validate: (value) => {
                      if (getValues("password") !== value) {
                        return "비밀번호를 다시 확인해 주세요";
                      }
                    },
                  })}
                  type="password"
                />
              </S.InputBoxWrap>
            </S.InputWrap>
            {errors.confirmPW && <S.Error>{errors.confirmPW.message}</S.Error>}
            <S.InputWrapBtn>
              <S.ItemWrap>
                <S.Mark>*</S.Mark>
                <span>닉네임</span>
              </S.ItemWrap>
              <S.InputBoxWrap>
                <TextField
                  style={textStyle}
                  id="outlined-basic"
                  label="Nick_Name"
                  variant="outlined"
                  {...register("nickName", FORM_TYPE.NICK_TYPE)}
                />
                <button>중복확인</button>
              </S.InputBoxWrap>
            </S.InputWrapBtn>
            {errors.nickName && <S.Error>{errors.nickName.message}</S.Error>}
            <S.InputWrap>
              <S.ItemWrap>
                <S.Mark>*</S.Mark>
                <span>전화번호</span>
              </S.ItemWrap>
              <S.InputBoxWrap>
                <TextField
                  style={textStyle}
                  id="outlined-basic"
                  label="010-0000-0000"
                  variant="outlined"
                  inputProps={{ maxLength: 13 }}
                  {...register("phoneNumber", {
                    onChange: (e) => {
                      setValue(
                        "phoneNumber",
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
                      );
                    },
                  })}
                />
              </S.InputBoxWrap>
            </S.InputWrap>
            {errors.phoneNumber && <S.Error>{errors.phoneNumber.message}</S.Error>}
            <S.InputWrapBtn>
              <S.ItemWrap>
                <S.Mark>*</S.Mark>
                <span>주소</span>
              </S.ItemWrap>
              <S.InputBoxWrap>
                <TextField
                  style={textStyle}
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
                <button>주소찾기</button>
              </S.InputBoxWrap>
            </S.InputWrapBtn>
            <BtnWrap>
              <S.Button>회원가입</S.Button>
            </BtnWrap>
          </Box>
        </S.Form>
      </S.Wrap>
    </S.Div>
  );
};

export default Prt;

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 60%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Form = styled.form`
  border: 1px solid beige;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px 30px;
  max-width: 700px;
  min-width: 600px;
  & > p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 83%;
  /* min-width: 515px; */
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  background: pink;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ItemWrap = styled.div`
  display: flex;
  width: 20%;
  & > span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > button {
    width: 120px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid pink;
    background: none;
    margin-left: 10px;
    cursor: pointer;
  }
`;
const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const InputWrapBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Mark = styled.span`
  color: red;
  font-weight: 700;
`;

const Error = styled.span`
  color: red;
  padding-left: 105px;
`;

const S = {
  Div,
  Wrap,
  LogoImage,
  Form,
  Button,
  InputWrap,
  InputWrapBtn,
  Mark,
  ItemWrap,
  InputBoxWrap,
  Error,
};
