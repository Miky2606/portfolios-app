import { FC } from "react";
import Nav from "../components/Nav/index_nav";
import { ILayout } from "./interface/layout.interface";

const Layout: FC<ILayout> = ({children}): JSX.Element =>{

return <div>
    <Nav />
    {children}
</div>
}

export default Layout;