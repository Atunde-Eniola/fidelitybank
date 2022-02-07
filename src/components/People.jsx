import React from 'react';

const People = () => {
    return (
        <div className='w-full bg-transparent h-[20rem] top-0 left-0'>
            <div className='h-full my-8 px-24 '>
                    <span className='text-sm uppercase font-black text-gray-900 font-body mb-2 px-1'>People</span>
                    <h2 className='text-indigo-900 text-3xl font-body font-semibold mt-4 px-1'>Our Outstanding Leadership</h2>
                    <div className='w-[3.75rem] h-px bg-blue-900 mt-8 mb-16'></div>
                    <div className='h-full w-full'>
                <div className='flex h-14  gap-6 font-semibold text-sm font-body my-12'>
                <div className='flex-1  middle bg-blue-900 rounded-md text-white border border-blue-900 cursor-pointer'>Board Of Directors</div>
                <div className='flex-1  middle  text-gray-900 border rounded-md  bg-white border-gray-200 hover:bg-blue-900 hover:text-white cursor-pointer'>Management</div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default People;
