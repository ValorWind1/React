import React from 'react';
import Joke from './components/Joke';
import jokesData from './jokesData';

function App (){

  // const nums = [1,2,3,4,5,6,7,8,9,10]
  // const doubled= nums.map(function(num){
  //   return num * 2

  // })

  // console.log(doubled)
  const jokeComponents = jokesData.map( joke => {
      return (
          <Joke  key={joke.id} question={joke.question} punchLine={joke.punchLine}   />

      )

  })



  return(
    <div>

      {jokeComponents}









      {/* <Joke 
        yoke = {{question:"knock knock ... ?", 
        punchLine: "ur mom",
        imgUrl:"https://rjthefiredogblog.files.wordpress.com/2016/08/fotolia_92585555_xs.jpg?w=840"
      
      }}
      />

      <Joke 
        yoke = {{question:"A tiger and a monkey walk into a bar ?", 
        punchLine: "yes",
        imgUrl: "https://assets.punchdrink.com/wp-content/uploads/2019/04/Article-Lazy-Bird-Chicago-Hoxton-Best-New-Bars-Spring-Summer-2019.jpg"
      }}
      />

      <Joke 
        yoke = {{question:"Have u ever heard the tragedy of Darth Plagueis the wise ?", 
        punchLine: "Is not a story the jedi will tell",
        imgUrl:"https://i.kym-cdn.com/entries/icons/original/000/022/073/Did_you_ever_hear.jpg"
      
      }}
      />

      <Joke 
        yoke = {{punchLine:"It's hard to explain puns to kleptomaniacs because they always take things literally"}}
      
      
      /> */}
      
    </div>

  );
}

export default App ; 