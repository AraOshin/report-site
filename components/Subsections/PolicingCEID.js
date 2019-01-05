import React from 'react';
import PropTypes from 'prop-types';
import PercentVis from '../Visualizations/PercentVis';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'The Central Eastside Industrial Area Crime Counts';

const PolicingCEID = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <div className="percent-vis-row">
        <PercentVis
          title="total crime reports filed "
          percentages={
            [
              {
                percent: -1.6,
                years: '2016-2017',
                months: 'Jan - Oct',
              },
              {
                percent: 6.2,
                years: '2017-2018',
                months: 'Oct - Aug',
              },
            ]
          }
        />

        <PercentVis
          title="total personal/ prop crime reports"
          percentages={
            [
              {
                percent: -1.1,
                years: '2016-2017',
                months: 'Jan - Oct',
              },
              {
                percent: 5.7,
                years: '2017-2018',
                months: 'Oct - Aug',
              },
            ]
          }
        />
      </div>
    )}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="A Case of Manipulating Crime Statistics, Contributing to Over-Policing"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          The Central Eastside Industrial Council (CEIC, a local business group), in their webpage advocating for the need for an Enhanced Service District in their area, claims front and center that "increases in unwanted crime and grime, including a 64% increase in crimes against people and property in the past year, have pervaded the district and threaten Central Eastside's emerging reputation and business viability." Our findings dispute the CEIC's claim of a 64% increase in crime.
{' '}
          <strong>Looking from 2015-2018 there is no significant upward trend in crime reports made in the Central Eastside Industrial District boundaries, and a comparison of all data available in 2017 and 2018 (January- October) shows only a 5.7% increase in crime reports, which is negligible given the variance present in the data. </strong>
          Our time series model predicts no significant increase over the next year as well. Additionally, CEIC's failure to cite a data source or methods report is not transparent and alludes to poor data practices under the hood.
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          Below we include this special section analyzing crime claims for the Central Eastside of Portland because the CEIC is using the claim of rising crime to justify their plan to a hire a private security force to increase patrolling of the neighborhood. When private security forces are invited to patrol public space,
<strong> with none of the customary public oversight or accountability of public policing,</strong>
          {' '}
          historically targeted/over-policed populations are placed in a particularly vulnerable position
<em> (</em>
          <a href="https://poseidon01.ssrn.com/delivery.php?ID=170124119105002025099118124001079077122024024079020086078021123005121121108105121081017021040022038009060126027100094112000025055090056092048081112096001099027111029086011066083096023072107086095117025100004080015111105001098067116000105122117066123&EXT=pdf"><em>Selbin, 2018</em></a>
          <em>)</em>
          . Moreover, discussions of "crime and grime," "clean-up," and "livability" tend to unfairly assign fault to those living on the streets. In reality it is policy failures that prevent unsheltered neighbors from making safe places to sleep and accessing municipal water, sewer, and waste services. These discriminatory policies are truly responsible for crime, trash, and safety concerns. We view efforts to introduce private security patrols under the guise of false claims regarding increased crime as dangerous both in how they contribute to harmful stereotypes against those living unsheltered and in how they increase the likelihood of discriminatory contact with private security forces that are not publicly monitored or accountable to the public.
        </div>
        <div className="paragraph">
          We report results of a predictive analysis
{' '}
          <strong>to show that their claim is entirely false by any reasonable, statistically reliable measure and method of analysis</strong>
          .
        </div>
        <div className="paragraph">In an attempt to replicate the CEIC's analysis, we took the Portland Police Bureau's Crime Reports dataset as our data source. Taking reports of crime to measure actual crime is controversial; there are individuals who are afraid to report crime, and so there is systematic underreporting of crimes by individuals and groups of people who feel victimized by police. For example, unhoused people may be afraid of contacting the police to report a crime because they might be arrested themselves for crimes of survival.</div>
        <div className="paragraph">
          To replicate CEIC's claim that crime has increased 64%, we used Venture Portland's business district boundary map to obtain a polygon of the boundaries for the CEID, and subset the crime reports data down to crime reports with lat/long coordinates that fall within those boundaries (
<a href="http://ventureportland.org/business-districts/business-district-map/">http://ventureportland.org/business-districts/business-district-map/</a>
          ). Crime reports without lat/long are not included in this report. We then subset out person and property crimes as the CEIC did, using the offense categories that are reported through the Portland Police Bureau (
<a href="https://www.portlandoregon.gov/police/71978">https://www.portlandoregon.gov/police/71978</a>
          ). This gave us a total of all person and property crime reports for the CEID over the total period for which this data is available in a comparable format through the PPB (2015-2018: the PPB changed their data reporting practices from UCR to NIBRS in 2015 and so data prior to 2015 is not directly comparable; see
{' '}
          <a href="https://www.portlandoregon.">https://www.portlandoregon. gov/police/71978</a>
          ).
        </div>
        <div className="paragraph">Given the lack of transparency for data source and methods, we were only able to closely replicate their claim of an increase in crime by taking only crime reports for the month of November 2017, and comparing with only crime reports for October 2018. This gives us a +62.6% increase when comparing those two months, which is as close to replicating their analysis as possible. However, these two months are not representative across the entire dataset and are well within the range of variation for crime across the entire period, and it would not be reasonable to report this percentage as representative of the entire dataset</div>
        <div className="paragraph">Additionally, comparison of an October month to a November month is not an apples-to-apples comparison; the absence of an October to October comparison hints of cherry-picking a larger difference rather than a meaningful analysis.</div>
        <div className="paragraph">When running totals of crime report counts are taken into account from January through October , a comparison of the January-October 2017 period to January-October 2018 shows only a 5.7% increase in person and property crime (at the time of analysis, November/December 2018 was not yet available). From January-October 2016-2017, there was a -1.1% change in person/property crime reports. Keep in mind that, as above, the total crime counts were not normalized to any population increase that happened during this time (which means the 5.7% increase would most likely be smaller, per capita).For all crime, the CEID saw a -1.6% change in crime reports from 2016-2017, and a 6.2% change from 2017-2018 (the difference is that society crimes are included in this subset, in addition to person and property crimes).</div>
      </div>
    )}
  />
);

PolicingCEID.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default PolicingCEID;
