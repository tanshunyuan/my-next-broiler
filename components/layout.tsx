import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import { Fragment } from "react";
const Layout = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <div className="min-h-screen flex flex-col relative">
        <Navbar></Navbar>
        <main className="flex-grow h-100">{props.children}</main>
        <Footer></Footer>
      </div>
    </Fragment>
  );
};
export default Layout;
