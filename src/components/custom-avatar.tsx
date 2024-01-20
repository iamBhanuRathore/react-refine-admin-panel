import React from "react";
import { Avatar as AntdAvatar, AvatarProps } from "antd";
import { getNameInitials } from "../utilities";
type Props = AvatarProps & {
  name?: string;
};
const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt="Bhanu Rathore"
      size="small"
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}>
      {getNameInitials(name || "John Doe")}
    </AntdAvatar>
  );
};

export default CustomAvatar;
