
const Dashboard = ({ onStationChange }) => {
    return (
        <div className="h-2/3 w-screen lg:h-screen lg:w-[20%] lg:px-8 lg:pt-12 py-4 px-4 bg-gray-800/50 flex flex-row justify-between lg:justify-start items-center gap-8 lg:flex-col">
            <div className=''>
                <img src='../public/Solarspot.svg' alt="logo" className="lg:w-48 w-40 sm:w-20 " />
            </div>

            <div className="flex gap-4 flex-col ">
                <ul className=" md:flex lg:flex-col sm:flex-row text-gray-500 justify-center items-end">
                    {['station1', 'station2', 'station3', 'station4', 'station5'].map((station) => (
                        <li key={station} className="py-2 md:text-2xl text-sm  focus:ring focus:ring-violet-300 hover:text-gray-400">
                            <a className="active:text-gray-100 " href="#" onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                onStationChange(station); // Call the function to change station
                            }}>
                                {`Station ${station.charAt(station.length - 1)}`}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


        </div >
    )
}

export default Dashboard