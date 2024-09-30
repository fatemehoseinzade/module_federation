import { useState } from "react";


const Button = () =>
{
    const [count, setCount] = useState(0)
    return <button onClick={() => setCount(count + 1)} className="bg-slate-50 px-5 py-3 rounded-md hover:bg-blue-200">Click me!   {count}</button>;
};

export default Button;