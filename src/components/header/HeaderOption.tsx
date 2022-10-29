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

  return (
    <div className='header-option'>
      {Icon && <Icon className='header-option__icon' />}
      {avatar && (
        <Avatar
          src={user?.photoUrl}
          alt='avatar_me'
          className='header-option__icon'
        >
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className='header-option__title'>
        {title === "Sign Out" ? (
          <button type='button' onClick={onClick}>
            {title}
          </button>
        ) : (
          title
        )}
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
