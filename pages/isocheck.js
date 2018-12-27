import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/head';
import Layout from '../components/Layout/Layout';
import '../styles/styles.css';

export const DataContext = React.createContext({});

const ISO = ({
  sweepsDates
}) => (
    <div>
      <Head title="Home" />
      {console.log(sweepsDates)}

    </div>
  );


ISO.getInitialProps = ({ res }) => (
  {
    sweepsDates: res.sweepsDates,
  });


export default ISO;
