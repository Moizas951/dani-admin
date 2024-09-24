import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import <FTName> from './index';

export default {
    title: '<FTName>',
    component: <FTName>
} as ComponentMeta<typeof <FTName>>;

export const Primary: ComponentStory<typeof <FTName>> = (args) => (
    <<FTName> {...args}>Componente</<FTName>>
);

Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/n13mFMi8T7E1Q76rafLmZu/Design-System?node-id=141%3A4545&t=c4nFO4fZhYL7182F-1'
    }
};
