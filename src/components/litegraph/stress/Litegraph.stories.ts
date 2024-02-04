import { Litegraph } from './Litegraph';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Litegraph/StressFlow',
  component: Litegraph,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    countNodesX: 33,
    countNodesY: 30,
    isCustom: false,
  },
};
