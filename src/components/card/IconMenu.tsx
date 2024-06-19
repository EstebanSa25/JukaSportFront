import { Link } from 'react-router-dom';

interface IconMenuProps {
    Text: string;
    Image: React.ReactNode;
    Link: string;
    Description: string;
    className?: string;
}
export const IconMenu = (figureProps: IconMenuProps) => {
    return (
        <Link className={`group p-0 `} to={figureProps.Link}>
            <figure
                className={` ${figureProps.className} relative    bg-white dark:bg-inherit    group-hover:scale-[1.1] transition-transform duration-500 ease-in-out  flex flex-col justify-center items-center  px-2   rounded-lg shadow-slate-[ rgba(0, 0, 0, 0.25)] shadow-lg `}
            >
                {figureProps.Image}
                <h3 className='  md:text-xl text-center hidden md:block  group-hover:block font-semibold  transition-all duration-600 ease-in-out'>
                    {figureProps.Text}
                </h3>
                <p className=' text-gray-500 hidden mt-1 md:block text-center '>
                    {figureProps.Description}
                </p>
            </figure>
            <h3 className='  text-center 4 md:hidden group-hover:hidden transition-transform duration-600 ease-in-out'>
                {figureProps.Text}
            </h3>
        </Link>
    );
};
