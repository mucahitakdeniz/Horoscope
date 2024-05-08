import "./Header.scss";
const Header = ({ setOpen }) => {
  return (
    <div className="header">
      <span className="text-shadow" onClick={() => setOpen(true)}>
        Who Are You?
      </span>
    </div>
  );
};

export default Header;
