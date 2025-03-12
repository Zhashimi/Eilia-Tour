import React from "react";
import { mediaLinks } from "../data";
const Media = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {mediaLinks.map((link, index) => {
        return (
          <li key={index}>
            <a href={link.href} className={itemClass}>
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Media;
