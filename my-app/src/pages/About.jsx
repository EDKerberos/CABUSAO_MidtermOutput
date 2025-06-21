import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h2>About the Shop</h2>
      <p>This store sells products exclusively for you to make a steak, very helpful for folks who don't know how to start! 
        <br></br><br></br>Want to start a steakhouse? (Say yes)
        <br></br><Link to={'/contact'}>Appoint us as your supplier!</Link></p>
        <br></br>
      <h3>FAQ</h3>
      <p>Q: "What is the usual wait time for steak to be delivered?
        <br></br>A: 2 hours ^q^
      </p>
      <p>Q: "What if, I don't want to make a steak?"
        <br></br>A: Get out of this store.</p>
      <p>Q: "How done do you like your steak?"
        <br></br>A: I dunno, I sell steak, not eat it.
      </p>
      <p>Q: "Where do the steak come from?
        <br></br>A: girl idk
      </p>
      <p>Q: "mm steak"
        <br></br>A: mm steak
      </p>
    </div>
  )
}
