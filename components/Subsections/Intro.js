import React from 'react';
import PropTypes from 'prop-types';
import Subsection from '../Layout/Subsection';
import IntroPie from '../Visualizations/IntroPie';


const Intro = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    disableSticky
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={(
      <IntroPie />
    )


    }
    headingText="The High Cost of  Punitive City Policies towards Our Neighbors Who Live on the Streets "
    subHeadingText="How Our Public Complaint-Driven System Leads to Serial Street Evictions, Arrests, Fines, and Raises the Barriers to Re-entering Stable Housing"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          While it is not a crime to be homeless, our city, state, and so-called private sector "business improvement" or "enhanced service" districts have established over
<strong> 224 rules and laws</strong>
          {' '}
          <strong>that make it illegal for those living on the streets to perform necessary life-sustaining activities in the public spaces including erecting a tent. </strong>
          We believe those living unsheltered should be allowed by law to create a shelter that keeps them warm, dry, and safe and provides a minimum of privacy
{' '}
          <em>(</em>
          <a href="https://aclu-or.org/sites/default/files/field_documents/aclu-decriminalizing-homelessness_full-report_web_final.pdf"><em>ACLU Oregon, 2017</em></a>
          <em>)</em>
          . It is illegal to sleep or protect survival gear using a tarp or tent on the streets of Portland. It is also illegal to wash, care for one's body, or relieve oneself outdoors. Yet retail stores, eateries, and offices exclude neighbors experiencing houselessness from using the very same indoor bathrooms and showers that they freely offer to housed portlanders as they move about the city
{' '}
          <em>(Hawash, Goes Behind, Kimball, 2016; </em>
          <a href="https://www.oregonlive.com/portland/index.ssf/2017/03/report_portland_lacks_sufficie.html"><em>Harbarger, 01/15/2018</em></a>
          <em>; </em>
          <a href="https://www.koin.com/news/homeless-hygiene-survey-finds-need-for-facilities/870115341"><em>Wicks, 03/03/2017</em></a>
          <em>)</em>
          . Likewise, the City of Portland offers no reliable waste pick-up services to those who live on the streets, yet may fine or punish houseless neighbors for the household waste they and unscrupulous housed individuals dispose of in nearby public places
{' '}
          <em>(</em>
          <a href="https://www.kgw.com/article/news/local/homeless/how-to-clean-up-garbage-at-homeless-camps-thats-a-question-metro-is-trying-to-answer/283-614297177"><em>Dooris, 11/13/2018</em></a>
          <em>; </em>
          <a href="https://news.streetroots.org/2018/11/09/unpaid-fine-poorer-you-are-more-you-owe"><em>Green, 11/9/2018</em></a>
          <em>)</em>
          .
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          Together these laws and customs established with housed people in mind encourage housed residents to view the life-sustaining activities of houseless neighbors as crimes rather than as a rational response to systematic exclusion. Misconstruing necessary acts of survival as willful repudiation of law and customs designed for people with housing, indignant residents regularly flood Portland's houseless campsite reporting systems and police stations with calls and complaints
{' '}
          <em>(</em>
          <a href="https://www.oregonlive.com/expo/news/erry-2018/06/79b61635fd4450/portland_homeless_arrests_data.html"><em>Lewis & Woolington, 06/29/2018</em></a>
          ;
{' '}
          <a href="https://www.oregonlive.com/portland/index.ssf/2018/06/portland_homeless_accounted_fo.html">Lewis & Woolington 06/27/2018</a>
          <em>).</em>
          {' '}
          They demand punishment, tickets, arrests, and removal of people who –regardless of punishment– will continue to have no other choice but to sleep, eat, wash, store their belongings, and dispose of their waste in public view.
        </div>
        <div className="paragraph">In response to a vocal angry minority of housed folks, the City has dramatically increased the number of serial property seizures and camp evictions, euphemistically referred to as "sweeps." Likewise, the Portland Police department has increased its interactions, ticketing, and arrests of houseless folks.</div>
        <div className="paragraph">
          The result is that the City is now spending vast amounts of money serially over-policing and cyclically sweep-evicting those who are living out the worst of our city's housing crisis on our streets. Indeed, a 2018 study estimates that
{' '}
          <strong>above and beyond the $1,238,868.00 spent annually on campsite clean </strong>
          up costs, the City of Portland is spending
{' '}
          <strong>an additional $3,579,438.oo in reallocated personnel costs </strong>
          because the employees are redirecting time to dealing with the aftermath and trauma generated by serial sweep-evictions and over-policing
{' '}
          <em>(Evans & Lindsay, 2018)</em>
          <strong>. </strong>
          In other words, park rangers, police, firefighters, and other city personnel are often called upon to mediate situations between house and unhoused neighbors and respond to the trauma generated by both sweeps and neighbors upset that people are living outdoors near them or where they work and play. Punitive programs are both ineffectual and absurd. Absurd, because no amount of punishment can change the fact that currently neither our city nor our communities are offering alternate legal and safe places where unhoused community members
{' '}
          <em>would be permitted</em>
          {' '}
          to sleep, organize their belongings and activities, go to the bathroom, wash, and dispose of their waste without risk of arrest, fines, or eviction. Ineffectual, because evicting, fining, and jailing people for activities they
{' '}
          <em>must carry out and have nowhere else to do so</em>
          {' '}
          is so traumatizing, impoverishing, and stigmatizing that it exponentially raises the barriers to re-entering stable housing.
        </div>
        <div className="paragraph">Below we explore the data that reveals the magnitude of discrimination, exclusion, and criminalization that unhoused portlanders face as a result of city policies and over-policing, as well as private sector and public practices and customs preventing them from accessing city water, sewer, and waste disposal services the rest of us take for granted.</div>
      </div>
    )}
  />
);


Intro.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default Intro;
