import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default{
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select', options: ['normal', 'h1', 'h2', 'h3']}
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({})
Basic.args={
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args={
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args={
    size: 'h2',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args={
    size: 'h3',
    color: 'tertiary'
}

export const CustomColor = Template.bind({})
CustomColor.args={
    size: 'h1',
    fontColor: '#5517ac'
}