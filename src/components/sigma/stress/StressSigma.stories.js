import { StressSigma } from './StressSigma.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Sigma/StressSigma',
  component: StressSigma,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    countNodesX: 33,
    countNodesY: 30,
    isCustom: false,
  },
};
