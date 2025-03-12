import React from "react";
import { pageLinks } from "../data";

const Page = ({ parentClass, itemClass, onClick }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass} onClick={onClick}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Page;
