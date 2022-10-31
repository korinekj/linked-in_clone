import React from "react";
import "./header-option.scss";

import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

interface Props {
  title: string;
  Icon?: React.ElementType;
  avatar?: string;
  onClick?: React.MouseEventHandler<Element> | undefined;
}

function HeaderOption(props: Props): JSX.Element {
  const { Icon, title, avatar, onClick } = props;

  const user = useSelector(selectUser);

  let headerOptionTitle;
  if (title === "Sign Out" && user != null) {
    headerOptionTitle = (
      <button type='button' onClick={onClick}>
        {title}
      </button>
    );
  } else if (title === "Sign Out" && user === null) {
    headerOptionTitle = undefined;
  } else {
    headerOptionTitle = title;
  }

  return (
    <div className='header-option'>
      {Icon && <Icon className='header-option__icon' />}
      {avatar && (
        <Avatar
          src={user?.photoUrl}
          alt='header avatar'
          className='header-option__icon'
        >
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className='header-option__title'>{headerOptionTitle}</h3>
    </div>
  );
}

HeaderOption.defaultProps = {
  avatar: null,
  Icon: null,
  onClick: null,
};

export default HeaderOption;
