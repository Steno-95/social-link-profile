import Button from "../../ui/Button";

const links = [
  {
    id: 0,
    text: "GitHub",
    link: "https://github.com/Steno-95/social-link-profile",
  },
  {
    id: 1,
    text: "Frontend Mentor",
    link: "",
  },
  {
    id: 2,
    text: "LinkedIn",
    link: "",
  },
  {
    id: 3,
    text: "Twitter",
    link: "",
  },
  {
    id: 4,
    text: "Instagram",
    link: "",
  },
];

function Menu() {
  return (
    <ul className="flex flex-col gap-3 items-center justify-center">
      {links.map((link) => (
        <Button href={link.link} key={link.id}>
          {link.text}
        </Button>
      ))}
    </ul>
  );
}

export default Menu;
