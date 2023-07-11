
import { faHeart, faHouse, faRectangleList, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Content(){
    return(
        <div className={`h-full row-span-14 grid grid-rows-3 grid-flow-col gap-3`}>
            <div className={`row-span-3 rounded w-full h-full bg-gradient-to-r from-zinc-800 to-green-300 space-y-2`}>
                <br/>
                <button className={`flex w-full items-center justify-start rounded-md border border-transparent bg-gradient-to-r from-emerald-400 to-green-300 px-6 py-3 font-sans font-bold text-zinc-800 shadow-sm`}><FontAwesomeIcon className={`text-zinc-800 text-l`} icon={faHouse} /> Home </button>
                <button className={`flex w-full items-center justify-start rounded-md border border-transparent bg-gradient-to-r from-emerald-400 to-green-300 px-6 py-3 font-sans font-bold text-zinc-800 shadow-sm`}><FontAwesomeIcon className={`text-zinc-800 text-l`} icon={faRectangleList} /> Playlist </button>
                <br/>
                <hr className={`border-zinc-800 border-4`}/>
                <h1 className={`flex w-full p-0 m-0 items-center justify-start px-6 py-3 font-sans font-bold text-white shadow-sm text-2xl`}><FontAwesomeIcon className={`text-white`} icon={faSwatchbook} /> Library</h1>
                <div className={`w-full h-2/3 rounded`}>
                    <div className={`flex w-full items-center justify-start rounded-md border border-transparent px-6 py-1 font-sans font-bold text-white shadow-sm`}><FontAwesomeIcon icon={faHeart} />Liked Songs</div>
                    <div className={`flex w-full items-center justify-start rounded-md border border-transparent px-6 py-1 font-sans font-bold text-white shadow-sm`}>Playlist song</div>
                    <div className={`flex w-full items-center justify-start rounded-md border border-transparent px-6 py-1 font-sans font-bold text-white shadow-sm`}>Playlist song</div>
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
