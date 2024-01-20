import { Popover } from "antd/lib";
import CustomAvatar from "../custom-avatar";
import { useGetIdentity } from "@refinedev/core";

import type { User } from "@/graphql/schema.types";

const CurrentUser = () => {
  const { data: user } = useGetIdentity<User>();
  return (
    <div>
      <Popover
        placement="bottomRight"
        // content={content}
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}>
        {/* <CustomAvatar   
          name={user?.name}
          src={user?.avatarUrl}
          size="default"
          style={{ cursor: "pointer" }}
        /> */}
        <CustomAvatar
          name={user?.name}
          src={user?.avatarUrl}
          size="default"
          style={{ cursor: "pointer" }}
        />
      </Popover>
      {/* {user && (
        <AccountSettings
          opened={opened}
          setOpened={setOpened}
          userId={user.id}
        />
      )} */}
    </div>
  );
};

export default CurrentUser;
