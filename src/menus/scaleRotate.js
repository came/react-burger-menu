'use strict';

import menuFactory from '../menuFactory';

const styles = {

  pageWrap(isOpen) {
    return {
      transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s',
      overflow: isOpen ? '' : 'hidden'
    };
  },

  outerContainer(isOpen) {
    return {
      perspective: '1500px',
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

export default menuFactory(styles);
