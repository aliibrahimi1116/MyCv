import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <section className="sticky top-0 bg-color-gray">
      <div className="flex justify-center items-center w-full h-24 mb-10">
        <Nav />
      </div>
    </section>
  );
};

export default Header;
