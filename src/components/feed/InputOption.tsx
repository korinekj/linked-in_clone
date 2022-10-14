import React from "react";
import "./inputoption.scss";

interface Props {
  Icon: React.ElementType;
  title: string;
  color: string;
}

function InputOption(props: Props) {
  const { Icon, title, color } = props;
  return (
    <div className='feed__input-option'>
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
