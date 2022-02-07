const Gallery = ({text="",uri="", header="",icon="",sentence="",base="", logo}) => {
    return(
        <div className=''>
            <div className="group  relative ">
            <img src={uri} alt="person" className='rounded-bl-large rounded-tr-large  '/>
            <div className="opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0  right-0  middle  text-md bg-blue-900 text-white font-normal w-full h-full rounded-bl-large p-4  rounded-tr-large">{sentence}<span className="text-green-400 top-[60%] text-md mt-4  absolute">{base}{logo}</span></div>
            </div>
                <div className='middle flex-col'>
                    <h3 className='text-blue-900 mt-2 mb-1 font-semibold text-xl'>{header}</h3>
                    <span className='text-base text-gray-500 font-body '>{text}</span>
                    <img src={icon} alt="linkedin" className="mt-3 mb-12"/>
                    
                </div>
        </div>

        
    );
};
export default Gallery;

// opacity-100 transition delay-150 duration-300 ease-in-out invisible relative
