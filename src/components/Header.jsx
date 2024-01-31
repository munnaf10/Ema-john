import logo from '../images/Logo.svg'

const Header = () => {
    return (
        <nav className='bg-slate-800 flex justify-between p-6 font-semibold '>
            <img src={logo} alt="logo" />
            <div className='text-white space-x-7 text-[17px] mr-12 '>
                <a className='hover:text-orange-500' href="/order">Order</a>
                <a className='hover:text-orange-500' href="/order review">Order Review</a>
                <a className='hover:text-orange-500' href="/manage inventory">Manage Inventory</a>
                <a className='hover:text-orange-500' href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;