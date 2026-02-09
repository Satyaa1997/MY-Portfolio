import { Login } from "./login/login"
import './home.css';
export function Home()
{
    return(
        <>
           <header>
             <h1 className="heading">Home Component</h1>
           </header>
           <section>
              <Login/>
           </section>
        </>
    )
}