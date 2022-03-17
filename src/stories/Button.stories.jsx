import React from 'react';

import Button from '../components/Button';
import Typography from '../components/Typography';

import { LeftArrow, RightArrow } from '../assets/icons';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Button } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: "primary",
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  style: 'secondary',
  loading: true,
};

export const Text = Template.bind({});
Text.args = {
  label: 'Button',
  style: 'text'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  style: 'danger'
};

export const AllVariants = () => (
  <div className='m-1 overflow-auto'>
    <Typography style="h3" type="semibold">STYLES</Typography>
    <div className='w-full flex gap-4 justify-start pr-16'>
      <div className='border border-dashed border-blue-500'>
        <div className='flex flex-col gap-4 items-center p-8'>
          <Typography style="h3" type="bold" className="whitespace-nowrap" > Primary Variants </Typography>
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap" >Primary</Typography>
          <Button label="Primary" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap" >Primary Disabled</Typography>
          <Button label="Primary" disabled />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap" >Primary with icon on left</Typography>
          <Button label="Primary" icon={LeftArrow} />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap" >Primary with icon on right</Typography>
          <Button label="Primary" icon={RightArrow} iconPosition="right" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap" >Primary with icon on left(loading)</Typography>
          <Button label="Primary" loading />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap" >Primary with icon on right(loading)</Typography>
          <Button label="Primary" loading iconPosition="right" />
        </div>
      </div>
      <div className='border border-dashed border-blue-500'>
        <div className='flex flex-col gap-4 items-center p-8'>
          <Typography style="h3" type="semibold" className="whitespace-nowrap"  > Secondary Variants </Typography>
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Secondary</Typography>
          <Button label="Secondary" style="secondary" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Secondary Disabled</Typography>
          <Button label="Secondary" disabled style="secondary" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Secondary with icon on left</Typography>
          <Button label="Secondary" icon={LeftArrow} style="secondary" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Secondary with icon on right</Typography>
          <Button label="Secondary" icon={RightArrow} iconPosition="right" style="secondary" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Secondary with icon on left(loading)</Typography>
          <Button label="Secondary" loading style="secondary" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Secondary with icon on right(loading)</Typography>
          <Button label="Secondary" loading iconPosition="right" style="secondary" />
        </div>
      </div>
      <div className='border border-dashed border-blue-500'>
        <div className='flex flex-col gap-4 items-center p-8'>
          <Typography style="h3" type="semibold" className="whitespace-nowrap"  > Text Variants </Typography>
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Text</Typography>
          <Button label="Text" style="text" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Text Disabled</Typography>
          <Button label="Text" disabled style="text" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Text with icon on left</Typography>
          <Button label="Text" icon={LeftArrow} style="text" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Text with icon on right</Typography>
          <Button label="Text" icon={RightArrow} iconPosition="right" style="text" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Text with icon on left(loading)</Typography>
          <Button label="Text" loading style="text" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Text with icon on right(loading)</Typography>
          <Button label="Text" loading iconPosition="right" style="text" />
        </div>
      </div>
      <div className='border border-dashed border-blue-500 mr-8'>
        <div className='flex flex-col gap-4 items-center p-8'>
          <Typography style="h3" type="semibold" className="whitespace-nowrap"  > Danger Variants </Typography>
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Danger</Typography>
          <Button label="Danger" style="danger" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Danger disabled</Typography>
          <Button label="Danger" disabled style="danger" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Danger with icon on left</Typography>
          <Button label="Danger" icon={LeftArrow} style="danger" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Danger with icon on right</Typography>
          <Button label="Danger" icon={RightArrow} iconPosition="right" style="danger" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Danger with icon on left(loading)</Typography>
          <Button label="Danger" loading style="danger" />
          <Typography style="h6" type="boldUppercase" className="whitespace-nowrap"  >Danger with icon on right(loading)</Typography>
          <Button label="Danger" loading iconPosition="right" style="danger" />
        </div>
      </div>
    </div>
    <Typography style="h3" type="semibold" className="mt-8" >SIZES</Typography>
    <div className='w-full flex gap-4 justify-start pr-16'>
      <div className='border border-dashed border-blue-500'>
        <div className='flex flex-col gap-4 items-center p-8'>
          <Typography style="h3" type="semibold" >Large</Typography>
          <div className='flex gap-4'>
            <Button label="Primary" size="large" />
            <Button icon={LeftArrow} size="large" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="secondary" size="large" />
            <Button icon={LeftArrow} style="secondary" size="large" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="text" size="large" />
            <Button icon={LeftArrow} style="text" size="large" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="danger" size="large" />
            <Button icon={LeftArrow} style="danger" size="large" />
          </div>
        </div>
      </div>
      <div className='border border-dashed border-blue-500'>
        <div className='flex flex-col gap-4 items-center p-8'>
          <Typography style="h3" type="semibold" className="mb-1" >Medium</Typography>
          <div className='flex gap-4'>
            <Button label="Primary" size="medium" />
            <Button icon={LeftArrow} size="medium" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="secondary" size="medium" />
            <Button icon={LeftArrow} style="secondary" size="medium" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="text" size="medium" />
            <Button icon={LeftArrow} style="text" size="medium" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="danger" size="medium" />
            <Button icon={LeftArrow} style="danger" size="medium" />
          </div>
        </div>
      </div>
      <div className='border border-dashed border-blue-500'>
        <div className='flex flex-col gap-4 items-center p-8'>
          <Typography style="h3" type="semibold" className="mb-2" >Small</Typography>
          <div className='flex gap-4'>
            <Button label="Primary" size="small" />
            <Button icon={LeftArrow} size="small" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="secondary" size="small" />
            <Button icon={LeftArrow} style="secondary" size="small" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="text" size="small" />
            <Button icon={LeftArrow} style="text" size="small" />
          </div>
          <div className='flex gap-4'>
            <Button label="Primary" style="danger" size="small" />
            <Button icon={LeftArrow} style="danger" size="small" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
