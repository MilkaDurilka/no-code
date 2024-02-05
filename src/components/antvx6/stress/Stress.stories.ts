import { Stress } from './Stress';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'AntvX6/Stress',
  component: Stress,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    xNodes: 30,
    yNodes: 30,
    isCustom: false,
  },
};
