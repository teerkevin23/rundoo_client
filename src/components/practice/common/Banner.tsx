import React, {FC} from 'react';
import '../styles.css';

interface BannerProps {
    header: string;
    style: string;
}
const Banner: FC<BannerProps> = ({ header, style }) => {
    return (
        <div className={`banner-container ${style}`}>
            {header}
        </div>
    );
}
export default Banner;