const Button = ({text="", icon="", type="primary", className="", onClick=()=>{}}) =>{
    return(
        <button
        onClick={onClick}
            className={`btn-top ${type==="primary"&&"bg-lime-500 flex"}  ${type==="secondary"&&"bg-sky-900"} ${className} `}>
        {text}
        {icon}
        </button>
    )
}

export default Button