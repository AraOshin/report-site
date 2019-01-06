import React from 'react';
import PropTypes from 'prop-types';
import PercentVis from '../Visualizations/PercentVis';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Over-Policing and Criminalization of Portlanders Experiencing Houselessness';

const Policing = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <div className="percent-vis-row">
        <PercentVis
          title="Filed Crime Reports, City of Portland (Change in Raw Counts)"
          percentages={
            [
              {
                percent: 7,
                years: '2016-2017',
                months: 'Jan - Oct',
              },
              {
                percent: 3.5,
                years: '2017-2018',
                months: 'Jan - Oct',
              },
            ]
          }
        />

        <PercentVis
          title="Dispatched Calls to Police, City of Portland (Change in Raw Counts)"
          percentages={
            [
              {
                percent: 6.8,
                years: '2016-2017',
                months: 'Jan - Oct',
              },
              {
                percent: 1.0,
                years: '2017-2018',
                months: 'Jan - Oct',
              },
            ]
          }
        />
      </div>
    )}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="Crime Statistics Rhetoric vs. Reality"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          In the last year, a vocal minority of disgruntled Portlanders have clamored for increased policing and private security forces, f
<em>alsely asserting</em>
          {' '}
          (a) that the City and particular neighborhoods are experiencing an increase in person and property crimes because of inadequate resources allocated to policing, and/or (b) that the City is not allowing our police to fully enforce our laws with residents who live outside
{' '}
          <em>(</em>
          <a href="https://www.latimes.com/nation/la-na-portland-homeless-vigilantes-20181218-story.html"><em>Schmid, 12/29/2018</em></a>
          <em>; </em>
          <a href="https://www.portlandmercury.com/news/2018/10/11/23548160/hall-monitor-service-resistant"><em>Zielinksi, 10/11/2018</em></a>
          <em>; </em>
          <a href="https://www.kgw.com/article/news/local/enough-is-enough-needles-human-waste-at-montavilla-park-is-the-last-straw-for-neighbors/283-548982755"><em>Cook, 05/4/2018</em></a>
          <em>; </em>
          <a href="http://ceic.cc/eastworks/"><em>http://ceic.cc/eastworks/</em></a>
          <em>; Sparling, </em>
          <em>09/19/2018; </em>
          <em>Bailey, </em>
          <em>9/19/2018; </em>
          <a href="https://www.montavilla.org/2018/09/11/enough-is-enough-portland-enoughisenoughpdx/"><em>https://www.montavilla.org/2018/09/11/enough-is-enough-portland-enoughisenoughpdx</em></a>
          <em>).</em>
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          In actuality, Portland's crime rate is not rising. Our own exploration of crime report data and the Portland Police Bureau Budget Review of 2018-19 show that
{' '}
          <strong>violent crimes and theft arrests have not increased, but remained stable over the past few years</strong>
          . This is corroborated by the City Budget Office and FBI analyses
{' '}
          <em>(Shifley, 03/06/2018 </em>
          <a href="https://www.portlandoregon.gov/cbo/article/675829">https://www.portlandoregon.gov/cbo/article/675829</a>
          {' '}
          <em>; </em>
          <a href="https://www.wweek.com/news/courts/2017/10/04/fbi-statistics-show-crime-is-flat-or-down-across-portland-except-in-one-key-category/"><em>Shephard, 10/4/2017</em></a>
          <em>).</em>
          {' '}
          This holds true across for the Central Eastside, Montavilla, and Lents where some explicitly claim rising crime rates in order to justify the need for additional private security forces, vigilante-style neighborhood security patrols, or requests for that the City increase its policing budget
<em> (</em>
          <a href="https://www.latimes.com/nation/la-na-portland-homeless-vigilantes-20181218-story.html"><em>Schmid, 12/29/2018</em></a>
          <em>; </em>
          <a href="https://www.kgw.com/article/news/local/enough-is-enough-needles-human-waste-at-montavilla-park-is-the-last-straw-for-neighbors/283-548982755"><em>Cook, 05/4/2018</em></a>
          <em>; Sparling, </em>
          <em>09/19/2018; </em>
          <a href="http://ceic.cc/eastworks/"><em>http://ceic.cc/eastworks/</em></a>
          <em> ; </em>
          <a href="https://www.oregonlive.com/business/index.ssf/2018/01/downtown_portlands_paradox.html"><em>Burke, 2008; Marum, 01/07/2018</em></a>
          <em>; </em>
          <a href="https://www.koin.com/news/civic-affairs/pearl-district-residents-to-address-homelessness-crime/1635951060"><em>Haas, 12/03/2018</em></a>
          <em>; </em>
          <a href="https://www.koin.com/news/local/multnomah-county/neighbors-blame-wheeler-for-lack-of-response-to-homeless/1424501337"><em>Miller, 09/06/2018</em></a>
          <em>).</em>
        </div>
        <div className="paragraph">
          In reality, we have a situation of over-policing when it comes to our neighbors who live on the streets. In fact, police arrests of unhoused Portland residents were up 12% in a June analysis for 2018. Moreover, though houseless residents make up only 3% of the population, they accounted for 52% of all arrests in 2017
<em>–</em>
          19% of which were for criminal trespass (mostly for unauthorized camping), and 42% of which involved procedural violations or warrants for unpaid fines or missed court dates
{' '}
          <em>(</em>
          <a href="https://www.oregonlive.com/portland/index.ssf/2018/07/portland_mayor_ted_wheeler.html"><em>Woolington, 6/13/2018</em></a>
          <em>; </em>
          <a href="https://www.oregonlive.com/expo/news/erry-2018/06/79b61635fd4450/portland_homeless_arrests_data.html"><em>Lewis & Woolington, 06/29/2018</em></a>
          <em>; </em>
          <a href="https://www.oregonlive.com/portland/index.ssf/2018/06/portland_homeless_accounted_fo.html"><em>Lewis & Woolington, 06/27/2018</em></a>
          <em>)</em>
          .
        </div>
        <div className="paragraph">
          Despite the fact that houseless neighbors were by far the main target of arrests in Portland, housed residents accounted for twice the arrests for violent crimes
{' '}
          <em>(</em>
          <a href="https://www.oregonlive.com/expo/news/erry-2018/06/79b61635fd4450/portland_homeless_arrests_data.html"><em>Lewis & Woolington, 6/29/2018</em></a>
          ). Finally, most of the increase in Police calls and costly responses were for "unwanted/suspicious" persons or welfare checks, many of those likely the result of anti-homeless calls (
<a href="https://www.portlandoregon.gov/cbo/article/675829"><em>Shifley, 03/06/2018</em></a>
          ).
        </div>
        <div className="paragraph">
          This suggests not only an increase in enforcement, but a disproportionate targeting of the houseless population for scrutiny and arrest. This is also born out in a recent ACLU report noting that there are 224 laws on the books that criminalize the survival activities of those experiencing houselessness in Oregon
{' '}
          <em>(</em>
          <a href="https://aclu-or.org/sites/default/files/field_documents/aclu-decriminalizing-homelessness_full-report_web_final.pdf"><em>ACLU, 2017</em></a>
          <em>).</em>
        </div>
        <div className="paragraph">
          In our own investigation, across all crime types, the City of Portland saw a 7% increase in total crime reports from 2016 to 2017, and a 3.5% increase in total crime reports from 2017 to 2018 (Jan-Oct).
{' '}
          <strong>This is </strong>
          <strong><em>not</em></strong>
          <strong> normalized to the population growth that has occurred across Portland, and absolute crime report counts were used to look at increases only, rather than rankings or per capita growth. </strong>
          The rapid growth of Portland's population means that the crime rates per capita will have a smaller increase than the absolute number we report here.
        </div>
      </div>
    )}
  />
);

Policing.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default Policing;
