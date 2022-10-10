import React from "react";
import "./header-option.scss";

interface Home {
  title: string;
  Icon: React.ElementType;
}

function HeaderOption({ Icon, title }: Home): JSX.Element {
  return (
    <div className='header-option'>
      {Icon && <Icon className='header-option__icon' />}
      <h3 className='header-option__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
