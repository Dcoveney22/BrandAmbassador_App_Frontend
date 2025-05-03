import HomePageButton from "../Button_Components/HomePageButton";
import { PageContext, useContextAndErrorIfNull } from "../Contexts/Context";

function Header() {
  const { setViewMode } = useContextAndErrorIfNull(PageContext);
  console.log("this is working");

  return (
    <header className="header">
      <div>
        <HomePageButton setViewMode={setViewMode} />
      </div>
    </header>
  );
}
export default Header;
