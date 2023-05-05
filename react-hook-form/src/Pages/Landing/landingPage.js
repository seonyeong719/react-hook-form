import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 onClick={() => navigate(`form/login`)}>로그인</h1>
      <h1 onClick={() => navigate(`form/signup`)}>회원가입</h1>
      <h1 onClick={() => navigate(`form/prt`)}>연습 페이지</h1>
    </>
  );
}
export default LandingPage;
