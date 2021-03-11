import { FC } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../redux";
import { User } from "../../services/Authentication.service";
import { Product } from "../../shared/Table/Table.mockdata";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { logout } from "../../redux/Authentication/Authentication.actions";

interface HeaderProps {
  title: string
  firstProduct: Product
  profile?: User
}

const Header: FC<HeaderProps> = ({ title, profile }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = !!profile?._id

  return (
    <header className="AppHeader">
      <h1>{title}</h1>
      <div>
        <span onClick={() => isLoggedIn ? dispatch(logout()) : history.push("/login")}>
          {isLoggedIn ? "Logout" : "Login"}
        </span>
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0],
  profile: state.authentication.profile
})

export default connect(mapStateToProps)(Header);