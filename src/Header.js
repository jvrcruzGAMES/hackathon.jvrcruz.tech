import "./Header.css";
const Header = (params) => {
    return ( 
        <header>
            <h1>{params.title}</h1>
        </header>
     );
}
 
export default Header;