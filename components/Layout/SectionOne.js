
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import BarChart from '../BarChart';

class SectionOne extends Component {
  state = {
    expanded: false,
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded })

  renderTextCol = () => (
    <div className="text-col">
      <div className="report-text sub-heading">
        Policing Subsection One Title
      </div>
      <div className="spacer-line" />
      <div className="paragraph-container">
        <div className="paragraph">
          This diagram is a comparison of requests to services for policing in 2017 and 2018.
        </div>
        <div className="paragraph">
          Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.
        </div>
      </div>
      {
        this.state.expanded && (
          <div className="paragraph-container">
            <div className="paragraph">
              This diagram is a comparison of requests to services for policing in 2017 and 2018.
            </div>
            <div className="paragraph">
              Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.
            </div>
          </div>
        )
      }
      {!this.state.expanded
        && (
          <div
            className="read-more-button"
            onClick={this.toggleExpanded}
          >
            Read More
          </div>
        )
      }
    </div>
  )

  render() {
    const expandableStyle = this.state.expanded
      ? { height: 'auto' }
      : {};

    return (
      <div
        className="report section-one"
        style={expandableStyle}
      >
        <StickyContainer className="inner-section">
          <div className="report-text heading">
            Policing Report
          </div>
          <div className="report-columns">
            {this.renderTextCol()}
            <div className="vis-col">
              <Sticky bottomOffset={80}>
                {
                  ({ style, distanceFromTop }) => (
                    <div
                      style={{
                        ...style,
                        marginTop: distanceFromTop <= 0
                          ? 75
                          : 0,
                      }}
                      className="report-vis"
                    >
                      <BarChart />
                    </div>
                  )}
              </Sticky>
            </div>
          </div>
        </StickyContainer>
      </div>
    );
  }
}

export default SectionOne;
