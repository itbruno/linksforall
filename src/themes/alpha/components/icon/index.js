import * as ic from "react-icons/fi";

function Icon({ name }) {
    const GetIcon = ic[name];

    return <GetIcon />
}

export default Icon;
