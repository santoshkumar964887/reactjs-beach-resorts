import React from "react";

export default function HeaderBackground({ children, header }) {
  return <header className={header}>{children}</header>;
}

HeaderBackground.defaultProps = {
  header: "defaultHero",
};
