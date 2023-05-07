import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Div>
        <div>HEADER</div>
        <span>로그인</span>
      </Div>
      <Outlet />
    </>
  );
}
export default Header;

const Div = styled.div`
  background-color: yellow;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
