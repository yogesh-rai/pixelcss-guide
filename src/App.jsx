import React, { useState, useEffect } from 'react';
import "pixelcss/dist/index.css";
import './App.css'

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import topics from "./topicsConstant";
import { Introduction } from "./Topics/Introduction";
import Margin from './Topics/utility_classes/Margin';
import Padding from './Topics/utility_classes/Padding';
import Border from './Topics/utility_classes/Border';
import Typography from './Topics/utility_classes/Typography';
import Height from './Topics/utility_classes/Height';
import Width from './Topics/utility_classes/Width';
import Opacity from './Topics/utility_classes/Opacity';
import Flexbox from './Topics/utility_classes/Flexbox';
import Grid from './Topics/utility_classes/Grid';


function App() {

  const [TopicList, setTopicList] = useState(topics);
  const [activeTopicName, setActiveTopicName] = useState('Introduction');
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  useEffect(() => {
    if(isMobileMenuOpen){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen])


  function toggleMobileMenu(){
    setMobileMenu(prevState => !prevState);
  }


  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  function changeTopicHandler(sectionName, topicName){
    // deep Copy the Topiclist
    let copyTopicsArr = JSON.parse(JSON.stringify(TopicList));

    copyTopicsArr.forEach(section => {
      // check in passed section
      if(section[sectionName]){
        // console.log('active: ', section[sectionName])
        section[sectionName].forEach(TopicData => {
          if(TopicData.name === topicName.name){
            TopicData.active = true;
            setActiveTopicName(TopicData.name);
          }
          else{
            TopicData.active = false;
          }
        })
      }
      else{
        // set all other topics as active:false
        for (const otherSection in section) {
          if (Object.hasOwnProperty.call(section, otherSection)) {
            const otherSectionTopics = section[otherSection];
            otherSectionTopics.forEach(TopicData => {
              TopicData.active = false;
            })      
          }
        }
      }
    })
    // console.log('Copy: ', copyAppIndex)
    setTopicList(copyTopicsArr)

    // close mobile menu
    setMobileMenu(false)
  }

  return (
    <div className="App bg-White display-f fd-col">
      <Navbar />
      <main>
        <Sidebar topicList={TopicList} isMobileMenuOpen={isMobileMenuOpen} updateTopic={changeTopicHandler} />
      </main>
      <div className="app-content">
        { activeTopicName === 'Introduction' && <Introduction /> }
        { activeTopicName === 'Margin' && <Margin /> }
        { activeTopicName === 'Padding' && <Padding /> }
        { activeTopicName === 'Border' && <Border /> }
        { activeTopicName === 'Typography' && <Typography /> }
        { activeTopicName === 'Height' && <Height /> }
        { activeTopicName === 'Width' && <Width /> }
        { activeTopicName === 'Opacity' && <Opacity /> }
        { activeTopicName === 'Flexbox' && <Flexbox /> }
        { activeTopicName === 'Grid' && <Grid /> }
      </div>
    </div>
  )
}

export default App;