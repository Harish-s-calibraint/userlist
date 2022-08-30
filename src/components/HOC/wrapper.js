import Header from "./header";

const Layout =(Component)=> ({...props}) => (
    <div>
        <Header/>

        <div>
        <Component {...props}/>
        </div>
    </div>
) 

export default Layout;