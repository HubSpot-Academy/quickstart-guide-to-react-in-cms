// Import stylesheet
import styles from '../../styles/counter.module.css';

// Import useState hook to update the count number
import { useState } from 'react';

// Create a function to add numbers together
export function addNumbers(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

export default function CounterButton({ defaultCount }) {
    // Create a state variable to hold the count
    let [count, setCount] = useState(defaultCount);

     /*
        *Note, this click handler will only work if
        *InteractiveComponent was called from inside an <Island>.
        *Otherwise the static server HTML returned will be a button
        *that does nothing when you try to click it.
     */

    // Return a button that updates the count when clicked    
    return <button className={styles.counter} onClick={() => setCount(count + 1)}>Click me to update the count: {count}</button>;
}