import styled from "styled-components";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert("회원가입에 성공하셨습니다!", JSON.stringify(data));

  return (
    <S.Div>
      <S.Wrap>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <p>회원가입</p>
          <S.InputWrapBtn>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>아이디</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input
                {...register("email", {
                  required: "e-mail 형식으로 입력해주세요",
                  maxLength: 20,
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                    message: "email 형식에 맞지 않습니다.",
                  },
                })}
                placeholder="E-mail"
              />
              <button>중복확인</button>
            </S.InputBoxWrap>
          </S.InputWrapBtn>
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

          <S.InputWrap>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>비밀번호</span>
            </S.ItemWrap>

            <S.InputBoxWrap>
              <input placeholder="특수문자, 영어, 숫자 포함 6자이상" type="password" />
            </S.InputBoxWrap>
          </S.InputWrap>

          <S.InputWrap>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>비밀번호 확인</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input placeholder="PW check" type="password" />
            </S.InputBoxWrap>
          </S.InputWrap>
          <S.InputWrapBtn>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>닉네임</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input placeholder="Nick_Name" />
              <button>중복확인</button>
            </S.InputBoxWrap>
          </S.InputWrapBtn>
          <S.InputWrap>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>전화번호</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input placeholder="010-0000-0000" />
            </S.InputBoxWrap>
          </S.InputWrap>
          <S.InputWrapBtn>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>주소</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input placeholder="Address" />
              <button>주소찾기</button>
            </S.InputBoxWrap>
          </S.InputWrapBtn>
          <BtnWrap>
            <S.Button>회원가입</S.Button>
          </BtnWrap>
        </S.Form>
      </S.Wrap>
    </S.Div>
  );
};

export default SignUpPage;

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
  width: 82%;
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
  & > input {
    width: 100%;
    height: 20px;
    border: 1px solid beige;
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    padding: 20px;
    margin-left: 10px;
    padding-left: 10px;
  }

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
};
