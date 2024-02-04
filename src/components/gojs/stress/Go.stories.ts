import { Go } from './Go';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'GO.js/StressFlow',
  component: Go,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    countNodesX: 33,
    countNodesY: 30,
    isCustom: false,
  },
};
