import React from 'react';
import PropTypes from 'prop-types';

const TextBanner = ({ text }) => (
    <div className="section-banner">
        <div className="inner-section text-banner">
            <div className="percent-banner-text">

                <div className="percent-banner-description">
                    <div className="percent-banner-description-block">
                        {text}
                    </div>

                </div>
            </div>
        </div>
    </div>
);

TextBanner.propTypes = {
  text: PropTypes.string,
};
export default TextBanner;
