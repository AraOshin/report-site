import React from 'react';

const isPositive = percent => percent >= 0;

const PercentVis = ({
  title,
  percentages,
}) => (
    <div className="percent-vis">
      <div className="percent-vis-title">
        {title}
      </div>
      <div className="percent-vis-percentages-container">
        {
          percentages.map((percent, i) => (
            <div className="percent-vis-percent" key={`${i}${percent.percent}`}>
              <div className={`percent-number-and-change ${isPositive(percent.percent)
                ? 'percent-positive'
                : 'percent-negative'}`}
              >
                <div className="percent-vis-percent-number">
                  {percent.percent}
                  %
                </div>

                <div className="percent-vis-change">
                  change
                </div>
              </div>

              <div className="percent-vis-time">
                <div className="percent-vis-year">
                  {percent.years}
                </div>
                <div className="percent-vis-months">
                  {percent.months}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
);
export default PercentVis;
