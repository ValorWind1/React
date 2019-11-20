import React from 'react';
import ContactCard from './components/ContactCard';
import './index.css';

function App (){
  return(
    <div className="contacts">
      <ContactCard 
        // name="Mr.Moon" 
        // imgUrl ="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        // phone = "Phone: (333)-555-7777" 
        // email = "Email: Moon@paws.com"
        
        // instead of writing every single one like these we can have an object prop . 
        contact ={{ name: "Mr.Moon", imgUrl : "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        phone:"Phone: (333)-555-7777", email:"Email: Moon@paws.com"}}

      />
      <ContactCard 

        contact ={{ name: "Mr.Neptune", imgUrl : "https://static.scientificamerican.com/blogs/cache/file/94F6C309-D83C-4982-99DB682A42B0ABA0_source.jpg?w=590&h=800&3CC992B4-0893-4276-847B101B5677329A",
        phone:"Phone: (999)-234-5351", email:"Email: Neptune@paws.com"}}

        
      />
      <ContactCard 

        contact ={{ name: "Mr. Andromeda", imgUrl : "https://www.pets4homes.co.uk/images/articles/4295/large/early-neutering-of-kittens-pros-and-cons-598ddb68021a9.jpg",
        phone:"Phone: (329)-341-1111", email:"Email: Andromeda@paws.com"}}

      
      />
      <ContactCard 

        contact ={{ name: "Mr. Night", imgUrl : "https://i.pinimg.com/originals/a7/be/73/a7be737a2ebccff59d586d24f9c3af53.jpg",
        phone:"Phone: (676)-323-7744", email:"Email: Night@paws.com"}}
      
    
      />
      
    

    </div>



  );
}

export default App ; 