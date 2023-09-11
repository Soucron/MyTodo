export const Header = () => {
    return (
        <header>
            <nav className="relative   flex w-full h-[60px] items-center
             bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700
             focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
            >
                <button
                    type="button"
                    className="ml-3 inline-block rounded px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-primary transition duration-150 ease-in-out hover:bg-yellow-500 hover:text-primary-600  focus:text-black focus:outline-none focus:ring-0  motion-reduce:transition-none">
                    Login
                </button>
            </nav>
        </header>
    )
}