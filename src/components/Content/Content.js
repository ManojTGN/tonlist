
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Content(){
    return(
        <div className={`h-full row-span-16 grid grid-rows-3 grid-flow-col gap-4`}>
            <div className={`row-span-3 rounded w-full h-full bg-gradient-to-r from-zinc-800 to-green-300`}>
                <button className={`flex w-full items-center justify-start rounded-md border border-transparent bg-gradient-to-r from-emerald-400 to-green-300 px-6 py-3 font-sans font-bold text-zinc-800 shadow-sm`}><FontAwesomeIcon className={`text-zinc-800 text-l`} icon={faHouse} /> Home </button>
            </div>
            <div className={`col-span-2 rounded w-full h-full bg-gradient-to-r from-green-300 to-zinc-800`}>

            </div>
            <div className={`row-span-2 col-span-2 rounded w-full h-full bg-gradient-to-r from-green-300 to-zinc-800`}>

            </div>
        </div>
    );
}

export default Content;
