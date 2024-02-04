import { Pixijs } from './Pixijs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Pixijs/stress',
  component: Pixijs,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    xNodes: 33,
    yNodes: 30
  },
};
