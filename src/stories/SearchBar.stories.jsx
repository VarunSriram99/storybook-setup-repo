import React from 'react';

import SearchBar from '../components/SearchBar';
import Typography from '../components/Typography';

import { DownMinimalArrow } from '../assets/icons';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { SearchBar } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <SearchBar {...args} /> 

export const SearchBarRegular = Template.bind({});
SearchBarRegular.args = {
  label: "SearchBar"
};

export const SearchBarWithPlaceholder = Template.bind({});
SearchBarWithPlaceholder.args = {
  label: "SearchBar",
  placeholder: "Serach for anything!",
};

export const SearchBarWithSecondaryIcon = Template.bind({});
SearchBarWithSecondaryIcon.args = {
  label: "SearchBar",
  secondaryIcon: <DownMinimalArrow/>,
};

export const SearchBarWithSecondaryStyle = Template.bind({});
SearchBarWithSecondaryStyle.args = {
  label: "SearchBar",
  style: "secondary",
};

export const AllVariants = () => (
    <div className='flex gap-4'>
        <div className='flex flex-col border border-dotted border-blue-500 p-4 gap-2 items-center w-1/2'>
            <Typography style="h3" type="boldUppercase" >Primary Style</Typography>
            <Typography style="h4" type="semibold" >SearchBar</Typography>
            <SearchBar className='w-full' />
            <Typography style="h4" type="semibold" >SearchBar with placeholder</Typography>
            <SearchBar placeholder="Search for anything!" className='w-full' />
            <Typography style="h4" type="semibold" >SearchBar with secondary icon</Typography>
            <SearchBar secondaryIcon={<DownMinimalArrow/>} className='w-full' />
        </div>
        <div className='flex flex-col border border-dotted border-blue-500 p-4 gap-2 items-center w-1/2'>
            <Typography style="h3" type="boldUppercase" >Secondary Style</Typography>
            <Typography style="h4" type="semibold" >SearchBar</Typography>
            <SearchBar className='w-full' style="secondary" />
            <Typography style="h4" type="semibold" >SearchBar with placeholder</Typography>
            <SearchBar placeholder="Search for anything!" className='w-full' style="secondary" />
            <Typography style="h4" type="semibold" >SearchBar with secondary icon</Typography>
            <SearchBar secondaryIcon={<DownMinimalArrow/>} className='w-full' style="secondary" />
        </div>
    </div>
)