import { ComponentMeta, Story } from '@storybook/react';

import SimpleAccordion from './index';

export default {
    title: 'Simple Accordion',
    component: SimpleAccordion
} as ComponentMeta<typeof SimpleAccordion>;

export const Default: Story = (args) => (
    <SimpleAccordion {...args} type="single" primary="small" />
);
