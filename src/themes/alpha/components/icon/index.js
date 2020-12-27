import React from 'react';
import { FaTwitter, FaGithub, FaMedium, FaDribbble, FaLinkedin } from 'react-icons/fa';
import { FiEdit, FiLayers, FiLink } from 'react-icons/fi';

const iconType = {
    twitter: FaTwitter,
    github: FaGithub,
    medium: FaMedium,
    dribbble: FaDribbble,
    linkedin: FaLinkedin,
    articles: FiEdit,
    projects: FiLayers,
    all: FiLink
};

function Icon({ name, ...props }) {
    let GetIcon = iconType[name];
    return <GetIcon {...props} />
}

export default Icon;
