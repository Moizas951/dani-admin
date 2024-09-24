import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
    title: 'Button',
    component: Button
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Componente</Button>
);

Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/n13mFMi8T7E1Q76rafLmZu/Design-System?node-id=141%3A4545&t=c4nFO4fZhYL7182F-1'
    }
};
