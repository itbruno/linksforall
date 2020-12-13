import * as ic from "react-icons/fi";

function Icon({ name }) {
    const GetIcon = name ? ic[name] : ic['FiLink'];

    return <GetIcon />
}

export default Icon;
