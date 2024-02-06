import { Antv } from './Antv';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'AntvG6/stress',
  component: Antv,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    xCount: 33,
    yCount: 30,
    isCustom: false
  },
};
