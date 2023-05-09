import { Controller } from "react-hook-form";

function formIndex() {
  return (
    <>
      <div></div>
    </>
  );
}
export default formIndex;

// 부모컴포넌트에 컨트롤을 설정, 세팅 해주고 자식컴포넌트에서 그 컨트롤을 사용한다
// 그렇게 되면 파일 구조 이동 필요.
// 폼인덱스 파일에서 훅폼 에러핸들링과 컨트롤을 세팅한 다음 signup, login 페이지에 컨트롤을 뽑아 쓸 예정
