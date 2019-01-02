
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import PropTypes from 'prop-types';
import { TIMELINE_HEADING_TEXT } from '../Subsections/SweepsTimeline';
import { WindowSizeContext } from '../../pages/index';

const STICKY_BREAKPOINT = 1020;

class Subsection extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();

    this.state = {
      expanded: false,
    };
  }

  toggleExpanded = () => {
    const { expanded } = this.state;
    const { toggleExpandedSubsection } = this.props;

    this.setState({ expanded: !expanded });
    toggleExpandedSubsection(true);
  }

  getTop = ({ computedTop, distanceFromBottom, distanceFromTop }) => {
    let top = computedTop;
    let MAGIC_NUMBER = 200;

    if (this.divRef.current) {
      const heading = this.divRef.current.querySelector('.report-text.heading').offsetHeight;
      const subHeading = this.divRef.current.querySelector('.report-text.sub-heading').offsetHeight;
      const spacerLine = this.divRef.current.querySelector('.spacer-line').offsetHeight;
      const spacerDiv = this.divRef.current.querySelector('.spacer-line');
      const spacerMarginTopRaw = getComputedStyle(spacerDiv).marginTop;
      const spacerMarginTop = Number(spacerMarginTopRaw.slice(0, spacerMarginTopRaw.length - 2));

      MAGIC_NUMBER = heading + subHeading + spacerLine + spacerMarginTop;
    }

    if (distanceFromTop <= 0) top = MAGIC_NUMBER;

    if (distanceFromBottom <= MAGIC_NUMBER) top = distanceFromBottom;

    return top;
  }

  renderTextSection = () => {
    const { isRow, visableText, expandedText } = this.props;
    const { expanded } = this.state;


    return (
      <div className={isRow ? 'text-row' : 'text-col'}>

        {visableText}

        {expanded && expandedText}


        <div
          className="read-more-button"
          onClick={this.toggleExpanded}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </div>
      </div>
    );
  }

  renderRowVisSection = () => {
    const { vis } = this.props;

    return (
      <div className="vis-row">
        {vis}
      </div>
    );
  };


  renderColVisSection = () => {
    const { vis, expandedVis, disableSticky } = this.props;
    const { expanded } = this.state;

    return (
      <WindowSizeContext.Consumer>
        {
          windowSize => (
            <div className="vis-col">
              {(!expanded || disableSticky || windowSize < STICKY_BREAKPOINT)
                ? vis
                : (
                  <Sticky topOffset={0}>
                    {
                      ({ style, distanceFromTop, distanceFromBottom }) => (
                        <div
                          style={{
                            ...style,
                            top: this.getTop({
                              distanceFromTop,
                              distanceFromBottom,
                              computedTop: style.top,
                            }),
                          }
                          }
                          className="report-vis"
                        >
                          {vis}
                        </div>
                      )}
                  </Sticky>
                )
              }
              {expanded && expandedVis}
            </div>
          )}
      </WindowSizeContext.Consumer>
    );
  };


  render() {
    const { expanded } = this.state;
    const { isRow, headingText, subHeadingText } = this.props;

    const expandableStyle = expanded
      ? { height: 'auto' }
      : {};
    let reportSectionClassName;
    if (isRow) {
      reportSectionClassName = 'report-rows';
    } else if (headingText === TIMELINE_HEADING_TEXT) {
      reportSectionClassName = 'report-columns-always';
    } else {
      reportSectionClassName = 'report-columns';
    }


    return (
      <div
        ref={this.divRef}
        className={isRow ? 'report subsection-rows' : 'report subsection-columns'}
        style={expandableStyle}
      >
        <StickyContainer className="inner-section">
          <div className="report-text heading">
            {headingText}
          </div>
          <div className="report-text sub-heading">
            {subHeadingText}
          </div>
          <div className="spacer-line" />
          <div className={reportSectionClassName}>
            {this.renderTextSection()}
            {isRow
              ? this.renderRowVisSection()
              : this.renderColVisSection()}

          </div>
        </StickyContainer>
      </div>
    );
  }
}

Subsection.propTypes = {
  isRow: PropTypes.bool,
  visableText: PropTypes.object,
  expandedText: PropTypes.object,
  headingText: PropTypes.string,
  subHeadingText: PropTypes.string,
  vis: PropTypes.object,
  expandedVis: PropTypes.object,
  // toggleExpandedSubsection: PropTypes.func,
  disableSticky: PropTypes.bool,

};

export default Subsection;
