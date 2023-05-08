const EMAIL_TYPE = {
  required: "e-mail 형식으로 입력해주세요",
  maxLength: 20,
  pattern: {
    value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    message: "email 형식에 맞지 않습니다.",
  },
};

const PW_TYPE = {
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
};

const NICK_TYPE = {
  required: "닉네임을 입력해주세요",
  maxLength: { value: 10, message: "닉네임은 최대 10자 입니다" },
};

export const FORM_TYPE = {
  EMAIL_TYPE,
  PW_TYPE,
  NICK_TYPE,
};
