import React from 'react';
import './App.css';

const App = ()=>(<PersonList/>)

const PersonList = ()=>{

  const people = [
    {
      img:22 ,name:'pete', job:'Developer' 
    },
    {
      img:32 ,name:'bob', job:'Developer' 
    },
    {
      img:62 ,name:'helx', job:'Developer' 
    }
  ]
  return(
    <section>
      <Person person={people[0]}/>;
      <Person person={people[1]}>
        Hi this is bob the builderrrrrr  
      </Person>;
      <Person person={people[2]}/>;
    </section>
  )
}

const Person = props =>{
  const{img,name,job} = props.person;
  const{childern} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <div className ="person">
      <img src={url} alt=""/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {childern}
      </div>
    </div>
  )
}
export default App;
