function Header() {
   return <nav className="blue-grey darken-1">
      <div className="nav-wrapper">
         <a href="#!" className="brand-logo">Movies</a>
         <ul className="right hide-on-med-and-down">
            <li><a href="#"><i className="material-icons left">search</i>Link with Left Icon</a></li>
            <li><a href="#"><i className="material-icons right">view_module</i>Link with Right Icon</a></li>
         </ul>
      </div>
   </nav>
}
export { Header };