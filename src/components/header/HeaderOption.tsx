import React from "react";
import "./header-option.scss";

import Avatar from "@mui/material/Avatar";

interface Home {
  title: string;
  Icon?: React.ElementType;
  avatar?: string;
}

function HeaderOption(props: Home): JSX.Element {
  const { Icon, title, avatar } = props;
  return (
    <div className='header-option'>
      {Icon && <Icon className='header-option__icon' />}
      {avatar && (
        <Avatar src={avatar} alt='avatar_me' className='header-option__icon' />
      )}
      <h3 className='header-option__title'>{title}</h3>
    </div>
  );
}

HeaderOption.defaultProps = {
  avatar: null,
  Icon: null,
};

export default HeaderOption;
