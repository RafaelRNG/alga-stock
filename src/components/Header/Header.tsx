import { FC } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux";
import { Product } from "../../shared/Table/Table.mockdata";
import "./Header.css";

interface HeaderProps {
  title: string
  firstProduct: Product
}

const Header: FC<HeaderProps> = ({ title, firstProduct }) => {
  return (
    <header className="AppHeader">
      <h1>{title}</h1>
      <span>{firstProduct.name}</span>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0]
})

export default connect(mapStateToProps)(Header);