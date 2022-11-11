import React from 'react'

function painting(props) {
  return (
    <div>

        <img class="object-cover h-48 w-96 hover:object-scale-down content-" src={props.image.image}></img>
        <p>{props.image.name}</p>
    </div>
  )
}

export default painting