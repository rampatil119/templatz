import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
function Contact() {
  return (
    <div>contact</div>
  )
}

export default Contact