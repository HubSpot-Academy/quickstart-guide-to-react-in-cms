// Import layout component
import Layout from '../../Layout.jsx';

// Import stylesheet
import styles from "../../../styles/team.module.css";

/**
 * Here we are exporting the 3 requirements of a module: Component, fields, and meta
 *
 * 'props' contains the resolved values from the defined module fields (./fields.jsx)
 * This will be the value provided by a content editor in the page editor, or will fallback to the defined default value
 *
 */

// Export the TeamModule Component
export const Component = ({ fieldValues, hublParameters = {} }) => {
    // Constants for the fieldValues and hublParameters
    const { team_members: teamMembers } = fieldValues;
    const { title } = hublParameters;
    
    // Return the TeamModule component
    return (
        <Layout>
        <h1>{title || 'Our Team'}</h1>
        <div className={styles.team}>
            {/* Use the map function to iterate over the teamMembers array */}
            {teamMembers.map((teamMember, index) => (
            <div key={index} className={styles.member}>
                <img src={teamMember.team_member_photo.src} alt={teamMember.team_member_name} height={teamMember.team_member_photo.height} width={teamMember.team_member_photo.width} />
                <h3>{teamMember.team_member_name}</h3>
            </div>
            ))}
        </div>
        </Layout>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: `Team Module`,
}