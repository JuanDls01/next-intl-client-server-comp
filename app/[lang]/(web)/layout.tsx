import { ReactNode } from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className='bg-white text-black'>
      <Navbar />
      {children}
    </section>
  );
};
export default Layout;
