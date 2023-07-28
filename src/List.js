import React from 'react'

// const List = (props) => {
  const List = ({test}) => {
  //  console.log(props,'props')
  return (
    <>
    {test.map((person)=>{
       {/* {props.test.map((person)=>{ */}
return(
  
<div key={person.id} className='person' >
  <img src={person.image} alt={person.name} />
  <div>
<h3>{person.name}</h3>
<p>{person.age}</p>
  </div>
</div>
);
})}
    </>
  )
}

export default List;

