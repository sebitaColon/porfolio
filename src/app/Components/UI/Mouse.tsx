import React from 'react'

export default function Mouse() {

    return (
        <div className="w-[50px] h-3 bg-slate-500 relative"
            style={{ transform: "skewY(-20deg)" }}>
            <div className='w-1 bg-black absolute -top-44 -left-18  h-40' style={{ transform: "skewX(45deg)" }}></div>
            
            <div className="h-[50px] w-full bg-slate-500 bottom-full absolute"
                style={{ transformOrigin: "bottom", transform: "skewX(45deg)" }}>
                    <div className='w-full h-1/2 gap-1 grid grid-cols-2 p-1'>
                    <div className='teclas'></div>
                    <div className='teclas'></div>
                    </div>
                </div>
            <div className="h-full w-[50px] bg-slate-700 -left-[50px] top-0 absolute"
                style={{ transformOrigin: "right", transform: "skewY(45deg)" }}></div>
        </div>
    );
}
