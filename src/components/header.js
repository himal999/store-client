import Link from "next/link";

export default function Header(){
    return(
        <header>
            <Link href={'/'}>FOOD SHOP</Link>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/shopping'}>Shopping</Link>
                <Link href={'/categories'}>Categories</Link>
                <Link href={'/account'}>Account</Link>
                <Link href={'/cart'}>Cart (0)</Link>
            </nav>
        </header>
    );
}