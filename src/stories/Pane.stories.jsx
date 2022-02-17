import React, {useState} from 'react';

import Typography from '../components/Typography';
import Button from '../components/Button';
import Pane from '../components/Pane';

export default {
  title: 'Components/Pane',
  component: Pane,
  subcomponents: {Header: Pane.Header, Body: Pane.Body, Footer: Pane.Footer}
};


const Template = (args) => {
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    return <div className='flex h-full w-full justify-center items-center'>
    <Button label="Click to Open" onClick={() => setIsPaneOpen(true)} />
    <Pane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)} {...args}>
        <Pane.Header>
            <Typography style="h3">This is the Pane header</Typography>
        </Pane.Header>
        <Pane.Body>
            This is an example of Pane body. You can use Pane Body to do all the relevant actions in the Pane.
        </Pane.Body>
        <Pane.Footer className='gap-4'>
            <Button label="Submit" onClick={() => setIsPaneOpen(false)} />
            <Button label="Close" style="secondary" onClick={() => setIsPaneOpen(false)} />
        </Pane.Footer>
    </Pane>
</div>};

export const SidePane = Template.bind({});