import Content from "./Content";
import MainTop from "./MainTop";

const Main = () => {
  return (
    <div className="fixed right-0 top-0 w-3/4 h-screen p-4 bg-[#F9FBFC] overflow-auto">
      <MainTop />
      <Content />
    </div>
  );
};

export default Main;
