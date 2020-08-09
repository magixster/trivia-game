import React from 'react';

const Loading = () => (<div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
<span class="text-red-500 opacity-75 -ml-8 md:ml-0 my-0 mx-auto block absolute w-0 h-0" style={{ top: '45%', left: '45%' }}>
  <i class="fas fa-circle-notch fa-spin fa-5x"></i>
</span>
</div>);

export default Loading;