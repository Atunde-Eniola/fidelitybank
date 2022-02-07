

const Card = ({ list="",text="",uri="", header=""}) => {
    return(
        <div className=' cards'>
            <img src={uri} alt="logo" className='mb-2'/>   
            <strong className='card-header'>{header}</strong>
            {list? list :
             <p className='my-4'>{text}</p>
            }
           
        </div>
    )
}

export default Card;