import './header.scss';

export function Header()  {
    return (
        <div className='menu'>
            <h1 className='menu__title'>Galery</h1>
            <button className="menu__login">Log in</button>
        </div>
    );
}
