// icons
import { Icon } from '@iconify/react';

const Iconify = ({ icon, styles, ...other }) => {
    return <Icon icon={icon} styles={{ ...styles }} {...other} />;
};

export default Iconify;
