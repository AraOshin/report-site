import React from 'react';
import PropTypes from 'prop-types';
import PieChart from '../Visualizations/PieChart';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'What Are The Reporting  Public’s Main Concerns?';


const ReporterConcerns = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<PieChart />}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="One Point of Contact: Public Reporting on Camp Issues"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          Returning full circle to our analysis of Portland's Camp-Eviction reporting system, we ask what concerns motivate the public to report camps for eviction through One Point of Contact? Of the seven issues the City lists in their reporting questionnaire the reporting public's top three selections are the presence of trash/biohazards (43%), misuse of public space (43%), presence of tents/structures (39%), followed by concerns about blocking the right of way, environmental damage. It is important to note that according to Metro only 22% of street waste is illegally dumped by houseless campers; yet they are typically blamed for all trash found near their camps
<em> (</em>
          <a href="https://www.kgw.com/article/news/local/homeless/how-to-clean-up-garbage-at-homeless-camps-thats-a-question-metro-is-trying-to-answer/283-61429717"><em>Dooris, 11/13/2018</em></a>
          <em>)</em>
          . Also, contrary to anti-houseless rhetoric, fewer than a quarter of public reports indicate "intoxication /drug use" and "aggressive behavior" as an area of concern.
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          When we consider that those motivated to report campsites are generally not sympathetic to campers, that many coordinate reporting to harass their unsheltered neighbors, and that if one were to select just one of the seven categories at random (and reporters are permitted to select any number of categories, as well), any given category would have a 14.7 % chance of being selected
<em>–</em>
          it is notable that drug use and aggression are so seldom reported.
{' '}
          <strong>In other words, people are reporting camps not over fears for personal safety, but because campsites are located in places that interfere with other public activities and have no reliable access to waste removal, bathrooms, water and other amenities.</strong>
        </div>
        <div className="paragraph">Thus, the main issue with camps for the reporting public is not crime or drug use, but rather that people are camping in places that the public finds inconvenient, inappropriate, or objectionable and that have no access to regular city waste pickup or sanitation services. Both of these problems could be easily fixed by (a) designating places where peer-run camps were allowed to offer safe, stable sleep and living spots with access to bathrooms and (b) offering regular peer-run waste pick up where campers can separate out refuse from their life and heart-sustaining belongings. Sweeps do not and cannot eliminate camping and they make access to city services more complicated. They therefore solve none of the problems the public is complaining about. Alternatively, were the City to provide safe sleeping areas with access to city waste disposal, water, and sewers we would actually be addressing the core problems both housed and unhoused neighbors are raising.</div>
      </div>
    )}
  />
);

ReporterConcerns.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default ReporterConcerns;
