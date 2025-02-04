import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FolderOpen } from "lucide-react";
import Footer from "~/components/footer";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Templatz" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const links = [
  {
    path: "letter/1234/ram",
    name: "Ram",
  },
  {
    path: "letter/1234/Arun",
    name: "Arun",
  },
  {
    path: "letter/1234/sonu",
    name: "sonu",
  },
];

export default function Index() {
  return (
    <div className="border border-white rounded-lg">
      {links.map((link) => (
        <Link to={link.path} key={link.name}>
          <Button>
            {link.name} <FolderOpen className="inline"/>
          </Button>
        </Link>
      ))}
      <Footer></Footer>
    </div>
  );
}
