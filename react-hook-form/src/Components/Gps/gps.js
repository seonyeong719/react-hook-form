import DaumPostcode from "react-daum-postcode";

function GPS() {
  const postCodeStyle = {
    width: "600px",
    height: "500px",
  };
  return (
    <>
      <DaumPostcode style={postCodeStyle} />
    </>
  );
}
export default GPS;
