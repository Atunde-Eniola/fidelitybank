const NavLink = ({icon="", header="", text="" }) => {
    return(
        <div className="">
                {icon}
                <h2 className="text-blue-800 text-base font-medium mb-2 ">{header}</h2>
                <span className="">{text}</span>
        </div>
    )
}

export default NavLink;