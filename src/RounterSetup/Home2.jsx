import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home2() {
  // const navigate=useNavigate();
  const navigate1=useNavigate();
  const navToPage =(URL)=>{
    navigate1(URL)
  }

  return (
    <div className='mb-2 font-medium'>
      <h1>home page</h1>
      <p>
        The adverb is derived from Middle English there-aboutes, þare aboutes (“of a place or an object: around there, in its vicinity; of time: about then, around that time”) [and other forms],[1] from ther (“in that place, in those places, there; on that; thither, to that place; from there, thence; at that time; thereupon; in that situation, under those circumstances; in that case, with regard to that”)[2] (from Old English þǣr (“there”)) + aboutes (“in all directions, around”, adverb),[3] aboutes (“in all directions from, on all sides of; near; concerned with”, preposition)[4] (from aboute, abouten (“so as to surround; so as to cover; on the border or edge; as measured around the outside; to as to travel around something; so as to revolve about an axis or centre; aside; in all directions; in the vicinity; in connection with something; in several places; everywhere, throughout; to all or everyone; almost, approximately; concerning; in succession; so as to be or happen”, adverb),[5] aboute, abouten (“surrounding; covering; over; upon; on the border of; in all directions; in the vicinity of, near to; in several places; everywhere, throughout; almost, approximately; concerning; engaged in; on behalf of”, preposition)[6] (from Old English abūtan, onbūtan (“about; round about; on; on the outside”)) + -s (suffix forming adverbs));[7] see further at thereabout. The English word is analysable as thereabout +‎ -s (suffix forming adverbs).[8][9]

        The noun may result from a confusion of thereabouts with whereabouts.

        The word is attested later than thereabout.[8]
      </p>
      <br/>
      <br/>
      <Link to="/filter">go to filter</Link>
      <br/>
      <br/>
      <button onClick={()=>navToPage('/filter')}>move filter page</button>
      <br/>
      <br/>
      <button onClick={()=>navToPage('/about')}>move About page</button>

    </div>
  )
}

export default Home2