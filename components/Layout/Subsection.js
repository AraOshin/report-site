
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import PropTypes from 'prop-types';


class Subsection extends Component {
  state = {
    expanded: false,
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded })

  renderTextSection = () => {
    const { isRow, visableText, expandedText } = this.props;
    const { expanded } = this.state;


    return (
      <div className={isRow ? 'text-row' : 'text-col'}>

        {visableText}

        {expanded && expandedText}

        {!expanded
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
    );
  }

  renderRowVisSection = () => {

    const { isRow } = this.props
    const { expanded } = this.state;

    return (
      <div className='vis-row'>
        {this.props.vis}
      </div>
    )
  };


  renderColVisSection = () => {

    const { isRow, vis, expandedVis } = this.props
    const { expanded } = this.state;


    return (
      <div className='vis-col'>
        {vis}
        {expanded && expandedVis}
        {/* <Sticky topOffset={0}>
          {
            ({ style, distanceFromTop }) => (
              <div
                style={{

                }}
                className="report-vis"
              >
                {this.props.vis}
              </div>
            )}
        </Sticky> */}
      </div>
    )
  };


  render() {

    const { expanded } = this.state;
    const { isRow, headingText, subHeadingText } = this.props;

    const expandableStyle = expanded
      ? { height: 'auto' }
      : {};

    return (
      <div
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
          <div className={isRow ? 'report-rows' : 'report-columns'}>
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
}

export default Subsection;
