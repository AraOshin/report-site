
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import BarChart from '../BarChart';
import { DataContext } from '../../pages/index';

class SectionOne extends Component {
  state = {
    expanded: false,
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded })

  renderTextSection = () => (
    <div className={this.props.isRow ? 'text-row' : 'text-col'}>



      {this.props.visableText}

      {this.state.expanded && this.props.expandedText}

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

  renderRowVisSection = () => {

    const { isRow } = this.props

    return (
      <div className='vis-row'>
        {this.props.vis}
      </div>
    )
  };


  renderColVisSection = () => {

    const { isRow } = this.props

    return (
      <div className='vis-col'>
        {this.props.vis}
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
    const expandableStyle = this.state.expanded
      ? { height: 'auto' }
      : {};

    const { isRow } = this.props
    return (
      <div
        className="report section"
        style={expandableStyle}
      >
        <StickyContainer className="inner-section">
          <div className="report-text heading">
            {this.props.headingText}
          </div>
          <div className="report-text sub-heading">
            {this.props.subHeadingText}
          </div>
          <div className="spacer-line" />
          <div className={this.props.isRow ? 'report-rows' : 'report-columns'}>
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

export default SectionOne;
