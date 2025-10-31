import React from 'react'

const Scroll = () => {
    return (
        <div>
            <div className="w-full overflow-hidden relative">
                <div className="flex animate-scroll items-center gap-50 space-x-4">
                     <div className="w-20  rounded-lg flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/2651/2651298.png" alt="" className='w-10'/><span>Cycling</span>
                    </div>
                    <div className="w-20  rounded-lg flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/2651/2651298.png" alt="" className='w-10'/><span>Cycling</span>
                    </div>
                    <div className="w-20  rounded-lg flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/2651/2651298.png" alt="" className='w-10'/><span>Cycling</span>
                    </div>
                    <div className="w-20  rounded-lg flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/2651/2651298.png" alt="" className='w-10'/><span>Cycling</span>
                    </div>
                    <div className="w-20  rounded-lg flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/2651/2651298.png" alt="" className='w-10'/><span>Cycling</span>
                    </div>
                   
                    {/* Duplicate to make loop seamless */}
                      </div>
            </div>

        </div>
    )
}

export default Scroll
