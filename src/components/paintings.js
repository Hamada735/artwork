import React from 'react'
import Painting from './painting';

const paintingss = [
    {id: 1, name:"A scene in space", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1559439226-08cc38293b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: 2, name:"Fruit", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 3, name:"Veg", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1586165877141-3dbcfc059283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 4, name:"Drinks", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80"},
    {id: 5, name:"AAAAA", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"},
    {id: 6, name:"Calm", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1548850174-70a1cf2c5f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id: 7, name:"Relaxed", date:"2022", height:"50", width:"100", price:"300", description:"Sus", image:"https://images.unsplash.com/photo-1514439827219-9137a0b99245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
];

function paintings() {
    
    const List = ()=>{
        return paintingss.map(painting=>{
            return(
                <Painting image={painting} link={painting.image}/>
            )
        }
    
        );
    }

  return (
    <div class="grid flex items-stretch gap-3 grid-cols-3">


    <List/>
    </div>
  )

  
}

export default paintings