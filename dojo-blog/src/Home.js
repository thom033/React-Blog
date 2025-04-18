import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <h2>Name: { name }</h2>
            <h2>Age: { age }</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;