import React from "react";
import "./header-option.scss";

import Avatar from "@mui/material/Avatar";

interface Props {
  title: string;
  Icon?: React.ElementType;
  avatar?: string;
  onClick?: React.MouseEventHandler;
}

function HeaderOption(props: Props): JSX.Element {
  const { Icon, title, avatar, onClick } = props;

  return (
    <div className='header-option'>
      {Icon && <Icon className='header-option__icon' />}
      {avatar && (
        <Avatar src={avatar} alt='avatar_me' className='header-option__icon' />
      )}
      <h3 className='header-option__title' onClick={onClick}>
        {title}
      </h3>
    </div>
  );
}

HeaderOption.defaultProps = {
  avatar: null,
  Icon: null,
  onClick: null,
};

export default HeaderOption;
