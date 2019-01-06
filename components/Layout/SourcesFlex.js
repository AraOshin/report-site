import React from 'react';

const Sources = () => (
  <div className="report sources">
    <div className="inner-section">
      <div className="sources-layout">

        <div className="report-text sub-heading">
          Data Sources
        </div>
        <div className="spacer-line" />
        <div className="paragraph">Estimated Costs of Sweeps. Evans, Kaytee and Katherine Lindsey. 2018. The Economic Impacts of Unsheltered Homelessness. Ms., Portland State University.</div>
        <div className="paragraph">
          Dispatched Calls to 9-1-1 and Non-Emergency for Police.
{' '}
          <a href="https://www.portlandoregon.gov/police/76454">Portland Police Bureau Open Data</a>
          .
        </div>
        <div className="paragraph">
          Crime Reports. Portland Police Bureau Open Data
{' '}
          <a href="https://www.portlandoregon.gov/police/71978">Portland Police Bureau Open Data</a>
          .
        </div>
        <div className="paragraph">
          Campsite Reports. One Point of Contact Campsite Reporting System.
{' '}
          <a href="https://www.portlandoregon.gov/toolkit/article/562214">Public Records Request</a>
          .
          {' '}
          <a href="http://pdx.maps.arcgis.com/apps/TimeAware/index.html?appid=ac6a6abf1092482190984a5df9dfacb0">Map</a>
          .
        </div>


        <div className="paragraph">
          Raw Campsite Sweeps.
{' '}
          <a href="https://www.portlandoregon.gov/toolkit/71771">One Point of Contact Weekly Campsite Reports</a>
          .
        </div>
        <div className="paragraph">
          Geocoded Campsite Sweeps (October, 2016 through April, 2018).
{' '}
          <a href="https://service.civicpdx.org/neighborhood-development/">Hack Oregon 2018 Neighborhood Development API.</a>
        </div>
        <div className="paragraph">Methods report for geocoded sweeps and data analysis.</div>


        <div className="report-text sub-heading" style={{ paddingTop: '8%' }}>
          Credits
        </div>
        <div className="spacer-line" />

        <div className="paragraph">
          <em>All Photo Credits</em>
          , Liz Obert.
{' '}
          <a href="http://www.lizobert.com">www.lizobert.com</a>
        </div>
        <div className="paragraph">
          <em>Credit and Permission to Reprint Hygiene Project Report</em>
          . Hawash, Lisa, Lindsay Goes Behind, &amp; Ericka Kimball. 2016. Hygiene Project Report. Ms., PSU School of Social Work.
        </div>
        <div className="paragraph">
          <em>Web Design</em>
          , amplified by design
{' '}
          <a href="http://www.amplifiedbydesign.com">www.amplifiedbydesign.com</a>
        </div>
        <div className="paragraph">
          <em>Front End Development</em>
          , Ara Oshinsky.
{' '}
          <a href="http://www.araoshinsky.com">www.AraOshinsky.com</a>
        </div>
        <div className="paragraph">Many thanks to our volunteers for GIS and data analysis.</div>
        <div className="paragraph">
          {' '}

          Questions ? Feedback ? Would you like to contribute ? Contact :
{' '}
          <a href="mailto:n2npdx@gmail.com">n2npdx@gmail.com</a>
          .
        </div>

        <div className="paragraph"><a href="https://docs.google.com/document/d/1i8B07f74qOWLhTD1oFWiZue096Py7IWVT7CREp2r7so/">References</a></div>


      </div>


    </div>
  </div>
);

export default Sources;
