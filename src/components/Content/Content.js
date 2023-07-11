
import { faHouse, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Content(){
    return(
        <div className={`h-full row-span-16 grid grid-rows-3 grid-flow-col gap-4`}>
            <div className={`row-span-3 rounded w-full h-full bg-gradient-to-r from-zinc-800 to-green-300`}>
                <div className={`h-12 rounded bg-gradient-to-r from-emerald-300 to-green-300`}>
                    <div className={`h-full flex`}>
                    <div className={`w-12 h-full flex items-center justify-center`}><FontAwesomeIcon className={`text-zinc-800 text-2xl`} icon={faHouse} /></div>
                    <div className={`w-full h-full font-sans font-bold text-zinc-800 flex items-center`}>Home</div>
                    </div>
                </div>
                <div className={`h-12 rounded bg-gradient-to-r from-emerald-300 to-green-300`}>
                    <div className={`h-full flex`}>
                    <div className={`w-10 h-full flex items-center justify-center`}><FontAwesomeIcon className={`text-zinc-800 text-2xl`} icon={faRectangleList} /></div>
                    <div className={`w-full h-full font-sans font-bold text-zinc-800 flex items-center`}>Playlist</div>
                    </div>
                </div>
            </div>
            <div className={`col-span-2 rounded w-full h-full bg-gradient-to-r from-green-300 to-zinc-800`}>

            </div>
            <div className={`row-span-2 col-span-2 rounded w-full h-full bg-gradient-to-r from-green-300 to-zinc-800`}>

            </div>
        </div>
    );
}

export default Content;
