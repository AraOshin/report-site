import React from 'react';
import PropTypes from 'prop-types';

const PercentBanner = ({
    bigText,
    smallTextOne,
    smallTextTwo,
    imgOnRight = true,
    imgUrl,
}) => {
    const image = <div className="percent-banner-img" style={{ backgroundImage: `url(${imgUrl})` }} />;

    return (
        <div className="section-banner">
            <div className="inner-section banner">
                {!imgOnRight && image}
                <div className="percent-banner-text">
                    <div className="percent-banner-percent">
                        {bigText}
                    </div>
                    <div className="percent-banner-description">
                        <div className="percent-banner-description-block">
                            {smallTextOne}
                        </div>
                        <div className="percent-banner-description-block">
                            {smallTextTwo}
                        </div>
                    </div>
                </div>
                {imgOnRight && image}
            </div>
        </div>
    );
};

// PercentBanner.propTypes = {
//     bigText:
//     smallTextOne:
//     smallTextTwo:
//     imgUrl:
// }
export default PercentBanner;
