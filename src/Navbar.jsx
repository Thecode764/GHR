import User from "./User";
import "./output.css";


function Navbar() {
    return (
        <>
        <div role="alert" className="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>Warning: This is a website made with GHR (Github like)</span>
        </div>
          <div className="font-mono">
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                  <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                          </svg>
                      </div>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          <li><a href="https://github.com/Thecode764/" target="_blank">🐈 My github</a></li>
                      </ul>
                  </div>
                  <a className="btn btn-ghost text-xl">Thecode764</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      <li><a href="https://github.com/Thecode764/" target="_blank">🐈 My github</a></li>
                  </ul>
              </div>
              <div className="navbar-end">
                <a href="/docs">
                    <button className="btn">GHL Docs</button>
                </a>
              </div>
            </div>
          </div>
          <User />
        </>
    );
}

export default Navbar;
