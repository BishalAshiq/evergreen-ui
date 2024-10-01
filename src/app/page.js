import CoTextComp from '@/components/Home/CoTextComp/CoTextComp';
import LearnAboutWeb from '@/components/Home/LearnAboutWeb/LearnAboutWeb';
import SustainableExnpWebsite from '@/components/Home/SustainableExnpWebsite/SustainableExnpWebsite';
import React from 'react';

const HomePage = () => {
  return (
    <div>
       <div>
        <CoTextComp/>

        <SustainableExnpWebsite/>

        <LearnAboutWeb/>
       </div>
    </div>
  );
};

export default HomePage;