// Import the pre-built module fields
import {
    RepeatedFieldGroup,
    ModuleFields,
    ImageField,
    TextField,
} from '@hubspot/cms-components/fields';

/**
 * Here we are defining module fields that will show up for content editors in the page editor so they can customize the module.
 * We also define default field values
 */
export const fields = (
    <ModuleFields>
        <RepeatedFieldGroup
            name="team_members"
            label="Team Members"
            occurrence={{
                min: 1,
                max: 500,
                default: 3,
            }}
            default={[
                {
                    team_member_photo: {
                        src: 'https://via.placeholder.com/150', alt: 'Jane Doe'
                    },
                    team_member_name: 'Jane Doe'
                },
                {
                    team_member_photo: {
                        src: 'https://via.placeholder.com/150', alt: 'John Doe'
                    },
                    team_member_name: 'John Doe'
                },
                {
                    team_member_photo: {
                        src: 'https://via.placeholder.com/150', alt: 'Jack Doe'
                    },
                    team_member_name: 'Jack Doe'
                },
            ]}
            >   
            <ImageField
                label="Team Member Photo"
                name="team_member_photo"
                default={{
                    src: 'https://via.placeholder.com/150',
                    max_width: 150,
                    max_height: 150
                }}
                required
            />
            <TextField
                label="Team Member Name"
                name="team_member_name"
                default="Jane Doe"
                required 
            />
        </RepeatedFieldGroup>
    </ModuleFields>
);