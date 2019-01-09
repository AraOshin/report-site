import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';
import Subsection from '../Layout/Subsection';

export const TIMELINE_HEADING_TEXT = 'WHAT ARE THE HUMAN COSTS OF SWEEPS?';

const SweepTimeline = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    toggleExpandedSubsection={toggleExpandedSubsection}
    disableSticky
    vis={
      (

        <img className="responsive-img" src="./static/04_timeline_01.jpg" alt="Sweeps Timeline" />

      )}
    expandedVis={
      (
        <div>
          <ProgressiveImage src="./static/05_timeline_02.jpg" placeholder="">
            {(src, loading) => (loading ? <div className="white-img-loader" />
              : <img className="responsive-img" src={src} alt="timeline" />)}
          </ProgressiveImage>
          <img className="responsive-img" src="./static/06_timeline_03.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/07_timeline_04.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/08_timeline_05.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/09_timeline_06.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/10_timeline_07.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/11_timeline_08.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/12_timeline_09.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/13_timeline_10.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/14_timeline_11.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/15_timeline_12.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/16_timeline_13.jpg" alt="Sweeps Timeline" />
          <img className="responsive-img" src="./static/17_timeline_14.jpg" alt="Sweeps Timeline" />

        </div>
      )}
    headingText={TIMELINE_HEADING_TEXT}
    subHeadingText="How a City Policy of Serial Dispossession and Displacement Immiserates Our Most Economically and Physically Vulnerable Neighbors"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">It is important to remember before we begin that many of our neighbors living on the streets make homes for themselves that are delicately woven together with strong bonds of friendship and support. These help them survive the physical and psychological hardships of what one informant likes to call "thin walls." These communities and bonds are firmly rooted in physical space. People gather together and cooperate to access and share food, survival gear, and information about where to get help of various kinds in their surrounding areas. These physically rooted networks of support are drastically disrupted when the City literally tears them apart during sweep-evictions. People need stable places to develop friendships, do their art, get to jobs and school, care for their pets, and attend critical health and housing appointments. These are depicted in pictures 1-3.</div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">We have spent the last year following neighbors' trials and tribulations as they weather the elements. Here we tell their story.</div>
        <div className="paragraph">On this overcast day a city worker arrived to post an eviction notice. Anxiety among campers immediately began to rise, individually and collectively. The waiting and worrying began. Questions swirled like those we had heard so many times before: Should I go to my doctor's appointment? What if the eviction begins while I am away? Will my friends be there to move or protect my belongings if I leave to go get mail? The last time someone stole my bike tools while I was moving another load of things to our new site. Who will come with us and will we be safe in our new campsite? See pictures 4 & 5.</div>

        <div className="paragraph">This day, city workers arrived impatient and behind; they had quotas and deadlines to make. After a while they brought in police officers to ratchet up the pressure. On another day they brought in cops to deal with a particularly ornery Mike who kept pushing their buttons. The police issued him a ticket and came close to hauling him off to jail. Generally, anyone who loses control of their emotions under the strain of eviction risks that fate. And the burden of fines, fees, and time away in court or jail builds, weighing people down with the question of whether to go all the way downtown to court for the day or wait and worry about having a warrant issued for no-show. Indeed, even when one friend appeared at his court date, he didn't end up making it back downtown for the judge mandated visit to a mental health clinic. Too far... going out that long put him at risk for theft. See pictures 6 & 7.</div>
        <div className="paragraph">The pictures alongside are from different days but they depict a familiar story. The story ending in the eighth picture in this section began with when our friend spent the better part of a night and day arduously packing all his things. He repairs bicycles and has a considerable camp. He began on ODOT land. ODOT came by and so he moved over to PBOT land. However, just as he began to settle in the next morning it turned out that the PBOT land too had been posted. They arrived and so he and his girlfriend began to move back to the ODOT land; but just as they did that the ODOT sweeps contractors came by again. Suddenly they found themselves trapped between two cleaning crews, paralyzed in the middle of a cul de sac. One worker told them as long as they were "in motion" they were ok. They went through the motions of mobility, staying in the street in the cul de sac. See pictures 8 - 10.</div>
        <div className="paragraph">Unfortunately, a neighbor called to complain. By the late afternoon an irritated police officer showed up asking why they were in the middle of the street. Tired, our friend snapped at him. The officer then ordered our friends to empty all their shopping carts right then and there or face arrest for possession of stolen shopping carts. What began as a city mandated "sweep," devolved into chaos as they emptied the contents of their carefully Conestoga-like carts onto the pavement. The police took the carts. And that is where I found them exhausted, sweaty, not having slept in two days, wilting and oppressed by the 90 degree heat and bad luck and bad policy&hellip; in a chaotic sea of belongings churned into existence by policing and "sweep" process itself. I call that day "the perfect storm." But for many it is a not an unordinary day at all.</div>
        <div className="paragraph">So what happens when eviction crews seize personal property because individuals can't move their things quickly enough, is that the City is required by law to store those belongings for 30 days for retrieval.</div>
        <div className="paragraph">
          To get things back requires an appointment, and those robbed of their belongings often take long bus rides and walk miles to reach a warehouse. They have waited hoping the contractors haven't thrown out, mixed up, or misplaced their items. But inevitably things go missing. And just what is missing is often initially impossible to assess. This is because as a general rule the contractors prevent people from opening their bags of property until
{' '}
          <em>after</em>
          {' '}
          they have signed an acknowledgement that the company has successfully returned all confiscated possessions. In a recent case, only because we were standing there with a camera did the warehouse supervisor allow our informant to examine his items prior to signing. See picture 11.
        </div>
        <div className="paragraph">Many things were missing, including his brand new dentures (valued at several thousand dollars). Observing that his health plan would not allow him to replace his teeth for another 10 years, he wryly speculated "I imagine I'll be dead before I'm able to greet the world as a whole person." He ultimately refused to sign for his things and will now file a complaint for compensation from the City. Had we not been present it is quite possible he would have had to sign for his things before the checking contents. See pictures 12 & 13.</div>
        <div className="paragraph">Beyond the tremendous waste of time, resources, and money that sweep-evictions cause, our neighbors who live outside additionally suffer the repeated trauma of losing house and home. Their serial displacement disrupts school, work, and attendance of critical physical, mental health, and housing-related appointments. All of these blows raise the barriers to maintaining mental and physical health. They interfere with our neighbors' ability to organize and keep track of their possessions, to manage camp waste, and hamstring their ability to reach the spots where they know they will be able access to hygiene-critical bathrooms, showers, and laundry without discrimination and judgement.</div>
        <div className="paragraph">
          This takes a toll on our entire community, housed and unhoused. In disrupting the routines and organization of the lives of our unsheltered neighbors,
{' '}
          <strong>sweeps often</strong>
          {' '}
          <strong>ironically generate more waste and expense for unhoused community members personally and for all taxpayers more generally </strong>
          <strong><em>(</em></strong>
          <a rel="noopener noreferrer" target="_blank" href="https://www.kgw.com/article/news/local/homeless/how-to-clean-up-garbage-at-homeless-camps-thats-a-question-metro-is-trying-to-answer/283-614297177"><em>Dooris,11/13/2018</em></a>
          <em>)</em>
          <strong>. </strong>
          People have to replace confiscated and lost items and are forced to move on without all their belongings. Sweep-evictions force people to live in the chaotic flux of perpetual displacement; they cause useless confrontations that perpetually cycle our unsheltered neighbors through jails, courts, and unbearable mountains of fines and fees
{' '}
          <em>(</em>
          <a rel="noopener noreferrer" target="_blank" href="https://news.streetroots.org/2018/11/09/unpaid-fine-poorer-you-are-more-you-owe"><em>Green,11/9/2018</em></a>
          <em>; </em>
          <a rel="noopener noreferrer" target="_blank" href="https://aclu-or.org/sites/default/files/field_documents/aclu-decriminalizing-homelessness_full-report_web_final.pdf"><em>ACLU, 2017</em></a>
          <em>)</em>
          . It costs all city residents in public money spent to calm tense situations and to
{' '}
          <strong>combat mental and physical illnesses </strong>
          related to exposure to extreme temperatures
{' '}
          <em>(Evans & Lindsey, 2018)</em>
          . It introduces the possibility of the generation and spread of communicable diseases as neighbors living outside lose access to familiar bathrooms, showers, food, laundry, and support networks that protect and keep them safe
{' '}
          <em>(Hawash, Goes Behind, Kimball, 2016)</em>
          . See picture 14.
        </div>
        <div className="paragraph">
          {' '}
          <em>photo credit: Liz Obert</em>
          photo credit: Liz Obert
        </div>

      </div>
    )}
  />
);


SweepTimeline.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};


export default SweepTimeline;
