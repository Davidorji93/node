import React from 'react';
import scores from './main'

const index = () => {
    for( let i = 0; 
        i < scores.length -1;){
        console.log(scores[i])
        i++
    }

  return (
    <div>
      
    </div>
  )
}

export default index
