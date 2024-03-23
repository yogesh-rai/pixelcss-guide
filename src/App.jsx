import React, { useState, useEffect } from 'react';
import "pixelcss/dist/index.css";
import './App.css'

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import topics from "./topicsConstant";
import TopicsContent from './components/TopicsContent';


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
    scrollToTop();

    // close mobile menu
    setMobileMenu(false)
  }

  return (
    <div className="App bg-White display-f fd-col">
      <Navbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main>
        <Sidebar topicList={TopicList} isMobileMenuOpen={isMobileMenuOpen} updateTopic={changeTopicHandler} />
        <TopicsContent activeTopicName={activeTopicName} />
      </main>
      <footer class="app-footer ta-center bg-dark p-2 text-white">
        made by 
        <a href="https://www.linkedin.com/in/yogesh-rai-b64645159/" target="_blank" rel='noopener noreferrer' className="fw-bold ml-1 b-bottom text-white" title="Developer's Linkedin">Yogesh Rai</a>
      </footer>
    </div>
  )
}

export default App;
