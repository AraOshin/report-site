import React from 'react';
import PropTypes from 'prop-types';
import SweepsMapImage from '../Visualizations/SweepsMapImage';
import Subsection from '../Layout/Subsection';


const SweepsMap = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<SweepsMapImage />}
    headingText="WHAT IS THE CITY-WIDE IMPACT OF SWEEP-EVICTIONS?"
    subHeadingText="Using Maps to Appreciate the Magnitude & Trauma of Evictions"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">The City of Portland is currently spending an estimated $4,818,306.00 on its ineffectual and harmful sweep-evictions and personnel hours diverted to responding to problems arising from our punishing public policies toward our unsheltered neighbors (Evans & Lindsey, 2018). In 2017 our city evicted 1,377 camps. From January through October of 2018, 1,845 camps were disrupted. These numbers alone shock the conscience; yet they do not even include the additional Department of Transportation-run evictions, nor do they include the "clean-ups" run by private crews paid for by businesses in the downtown and Lloyd districts, who frequently confiscate private property. With 1,668 unsheltered residents for ALL of Portland, Gresham, and Multnomah County counted by the government in 2017, the magnitude and serial character of the cruelty we are inflicting on our most economically and physically vulnerable citizens is truly alarming.</div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          Even more upsetting is the fact that this barrage of punishment has not accomplished and cannot accomplish its purported goal; despite serial eviction and harassment, the estimated number of campsites in Portland remains stable at about 110 week in and week out. This is because sweep-evictions seek to
<strong><em> enforce rules people cannot comply with</em></strong>
          ; as the Federal courts have pointed out
{' '}
          <strong><em>people have nowhere else to sleep and live</em></strong>
          {' '}
          <em>(</em>
          <a href="http://cdn.ca9.uscourts.gov/datastore/opinions/2018/09/04/15-35845.pdf">United States, Court of Appeals for the Ninth Circuit. Robert Martin; Lawrence Lee Smith; Robert Anderson; Janet F. Bell; Pamela S Hawkes; and Basil E Humphrey v. City of Boise. Docket no. 15-35845, 4 Sep. 2018</a>
          <em>)</em>
          <strong>.</strong>
          {' '}
          Yet we punish people for this fact again and again.
        </div>
        <div className="paragraph">
          Additionally, these policies steeply increase the fining and jailing of our neighbors for survival-related offenses. They cause loss of life-sustaining survival gear, missed school and work, and postponed health, counseling, and housing appointments. These harms traumatize and raise impossible barriers to re-entering secure housing. The result is general discouragement and suffering we all feel as we watch people pushed from one block to the next, to jail and back (
<a href="https://www.oregonlive.com/portland/index.ssf/2018/07/portland_mayor_ted_wheeler.html"><em>Woolington, 07/13/2018</em></a>
          <em>; </em>
          <a href="https://aclu-or.org/sites/default/files/field_documents/aclu-decriminalizing-homelessness_full-report_web_final.pdf"><em>ACLU, 2016</em></a>
          <em>; </em>
          <a href="https://news.streetroots.org/2018/11/09/unpaid-fine-poorer-you-are-more-you-owe">Green, 11/9/2018</a>
          ). This city-mandated policy of serial displacement, confiscation, and destruction has become an ugly machine generating emergency room visits, epidemic outbreaks of communicable disease, mental health episodes, and police calls
<em>–</em>
          all of which
{' '}
          <em>we all pay for</em>
          {' '}
          in the long run.
        </div>
      </div>
    )}
  />
);

SweepsMap.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default SweepsMap;
