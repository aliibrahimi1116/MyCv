export default function Nav() {
  return (
    <section>
      <ul className="flex">
        <li
          className={`md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title ${window.location.href}`}
        >
          <a href="#home">Home </a>
        </li>
        <li className="md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title">
          <a href="#aboutMe">About</a>
        </li>
        <li className="md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title">
          <a href="#whatIDo">Skills</a>
        </li>
        <li className="md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title">
          <a href="#home">Experience</a>
        </li>
        <li className="md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title">
          <a href="#home">Portfolio</a>
        </li>
        <li className="md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title">
          <a href="#home">Pricing</a>
        </li>
        <li className="md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title">
          <a href="#home">Blog</a>
        </li>
        <li className="md:m-4 hover:text-color-secondary rounded transition duration-500 px-2 list-none font-title">
          <a href="#home">Contact</a>
        </li>
      </ul>
    </section>
  );
}
