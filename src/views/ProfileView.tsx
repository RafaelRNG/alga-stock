import { FC } from "react";
import { connect } from "react-redux";
import ProfileCard, { User } from "../components/Authentication/ProfileCard";
import Header from "../components/Header";
import Container from "../shared/Container";
import withPermission from "../utils/HOC/widthPermission";

interface ProfileViewProps {
   user: User
}

const ProfileView: FC<ProfileViewProps> = ({ user }) => {
   return <>
      <Header
         title="Profile" />
      <Container>
         <div style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto"
         }}>
            <ProfileCard
               user={user} />
         </div>
      </Container>
   </>
}

const mapStateToProps = () => ({
   user: {
      name: "RNG",
      email: "rng@email.com"
   }
})

export default connect(mapStateToProps)(
   withPermission(["admin", "customer"], "/")(ProfileView)
)