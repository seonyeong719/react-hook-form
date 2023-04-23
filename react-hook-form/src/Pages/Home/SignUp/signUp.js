function SignUp() {
  return (
    <form>
      <div>
        <span>이메일</span>
        <input placeholder="e-mail" />
      </div>
      <div>
        <span>비밀번호</span>
        <input placeholder="password" />
      </div>
      <div>
        <span>비밀번호 확인</span>
        <input placeholder="confirm password" />
        <button>회원가입</button>
      </div>
    </form>
  );
}
export default SignUp;
