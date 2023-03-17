import React from 'react';
import AdvanceTodo from '../../components/advanceTodo';
import Header from '../../components/Header/Header';

const About = () => {
  return (
    <>
      <Header />
      <h1 className="text-4xl text-emerald-600 font-bold">About</h1>
      <AdvanceTodo />
    </>
  );
};

export default About;
