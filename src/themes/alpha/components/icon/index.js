import * as fi from "react-icons/fi";
import * as fa from "react-icons/fa";

function Icon({ name, is_brand }) {
    const LibType = is_brand ? fa : fi;
    const GetIcon = name ? LibType[name] : fi['FiLink'];

    return <GetIcon />
}

export default Icon;
