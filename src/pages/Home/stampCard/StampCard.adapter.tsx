import { FC } from 'react';

import { GetUserStamps200ResponseInner } from '@/.openapi/api';

import { StampCard } from './stampCard';

type Props = {
	stamps: GetUserStamps200ResponseInner[]
}

export const StampCardAdapter: FC<Props> = ({stamps}) => {
  return <StampCard stamps={stamps}/>
}