import logo from '../logo.svg'

function Header() {
  return (
    <div>
      <header>
        <nav className='nav'>
					<img src={logo} alt="ReactLogo"/>
					<ul className='nav-items'>
						<li>Pricing</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
      </header>
    </div>
  );
}

export default Header;
