// Import Island primitive from pre-built HubSpot CMS React components
import { Island } from "@hubspot/cms-components";

// Import CounterButton component from the islands directory
import CounterButton from "../islands/CounterButton.jsx?island";

// Import layout component
import Layout from "../Layout.jsx";

// Set defaultCount to 0    
const defaultCount = 0;

// Create the CounterPartial component
function CounterPartial() {
  return (
    <Layout>
        <h2>My Counter Button</h2>
        <Island module={CounterButton} defaultCount={defaultCount} />
    </Layout>
  );
}

// Export the CounterPartial component
export default CounterPartial;