import {useState} from "react";
export default function Form(){
  const [person, setPerson] = useState({
    name: 'Barbara',
    artwork: {
      title: 'love cats',
      city: 'Hepworth',
      image:  'https://avatars.mds.yandex.net/i?id=80fd36ed11b588c1cfe1923e66e4962663bdf343-10036291-images-thumbs&n=13',
      
    }
  });

  function handleName(e){
    setPerson({
      ...person,
      name: e.target.value
    })
  }
  function handleTitle(e){
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,
        title: e.target.value
      }
    })
  }
  function handleCity(e){
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,
        city: e.target.value
      }
    })
  }
  function handleImage(e){
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,
        image: e.target.value
      }
    })
  }

  return(
    <>
        <div style={{textAlign:'center', }}>
            <label>
                Name:
                <input value={person.name} onChange={handleName}/>
            </label>
            <label>
                favorites: 
                <input value={person.artwork.title} onChange={handleTitle}/>
            </label>
            <label>
                hobby: 
                <input value={person.artwork.city} onChange={handleCity}/>
            </label>
            <label>
                image: 
                <input value={person.artwork.image} onChange={handleImage}/>
            </label>

            <p style={{color: 'green'}}>
                <i>{person.name}</i>
                {'  '}
                {person.artwork.title}
                <br/>
                {person.artwork.city}
            </p>
            <img
                src={person.artwork.image}
                
            />
        </div>
    </>
  )
}