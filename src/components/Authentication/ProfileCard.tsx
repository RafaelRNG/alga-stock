import { FC } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";

export interface User {
   name: string;
   email: string;
}

interface ProfileCardProps {
   user: User;
}

const ProfileCard: FC<ProfileCardProps> = ({ user }) => {
   return <div style={{
      minWidth: "320px"
   }}>
      <Form title="Profile">
         <Input
            label="Name"
            value={user.name}
            disabled />
         <Input
            label="Email"
            value={user.email}
            disabled />
      </Form>
   </div>
}

export default ProfileCard;