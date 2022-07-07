// icons
import { Icon } from '@iconify/react';

const Iconify = ({ icon, sx, ...other }) => {
    return <Icon icon={icon} sx={{ ...sx }} {...other} />;
};

export default Iconify;
