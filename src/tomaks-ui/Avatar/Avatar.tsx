import React from "react";

interface Props {
  alt: string;
  src: string;
  onClick?: () => void;
}

const Avatar = ({ alt, src, onClick }: Props) => {
  //   return <img className="avatar" alt={alt} src={src} onClick={onClick} />;
  return <img alt={alt} src={src} onClick={onClick} />;
};

export default Avatar;
