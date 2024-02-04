import { Nicedag } from './Nicedag';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Nicedag/StressFlow',
  component: Nicedag,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    countNodesX: 10,
    countNodesY: 10,
    isCustom: false,
  },
};
