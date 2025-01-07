import profile from "../../assets/images/profile.png";

function Header() {
  return (
    <div className="flex justify-between ">
      <h2 className="text-4xl font-bold">Knowladge Cafe</h2>
      <img src={profile} alt="" />
    </div>
  );
}

export default Header;
