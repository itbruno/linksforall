import DataProps from '@interfaces/data';
import React, { ComponentProps, ReactComponentElement } from 'react';
interface AlphaProps {
  data: DataProps;
}

function Alpha({ data }: AlphaProps) {
  console.log(data);
  return <>Alpha theme</>;
}

export { Alpha };
