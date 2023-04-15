import { useForm } from "react-hook-form";

function Login() {
  // useForm 훅함수를 불러와 register(), handleSubmit() 함수를 얻음
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    // handleSubmit 함수를 사용.
    // 이걸로 form 요소에서 발생하는 submit 이벤트를 만져준다.
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <span>이메일</span>
        <input
          placeholder="e-mail"
          {...register("email", {
            required: "email을 입력해주세요",
            maxLength: 20,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
              message: "email 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <span>비밀번호</span>
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
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}
export default Login;
