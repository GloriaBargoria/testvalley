import React from 'react';
import { BeakerIcon, FireIcon, BadgeCheckIcon } from '@heroicons/react/24/solid';
import { IconLabel } from './IconLabel';

const iconsData = [
  { icon: BeakerIcon, label: '실험실 할인', badge: 'HOT' },
  { icon: FireIcon, label: '화재성 특가', badge: 'NEW' },
  { icon: BadgeCheckIcon, label: '검증된 품질', badge: '95%' },
  { icon: BeakerIcon, label: '실험실 할인' },
  { icon: FireIcon, label: '화재성 특가' },
  { icon: BadgeCheckIcon, label: '검증된 품질' },
  { icon: BeakerIcon, label: '실험실 할인', badge: 'HOT' },
  { icon: FireIcon, label: '화재성 특가', badge: 'NEW' },
  { icon: BadgeCheckIcon, label: '검증된 품질', badge: '95%' },
];


const IconsList = () => {
  return (
    <div className="flex justify-start mx-auto max-w-5xl pt-8 flex-wrap pb-4 space-x-2">
      {iconsData.map((data, index) => (
        <IconLabel key={index + 1} icon={data.icon} label={data.label} badge={data.badge} />
      ))}
    </div>
  );
};

export default IconsList;
