// YourComponent.stories.ts

import { FormsModule } from '@angular/forms';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { MultiSelectComponent } from 'src/app/core/multi-select/multi-select.component';
import { OverlayModule } from '@angular/cdk/overlay';



//👇 This default export determines where your story goes in the story list
export default {
  title: 'MultiSelectComponent',
  component: MultiSelectComponent,
  parameters: {
    docs: true,
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FormsModule, OverlayModule],
      providers: [

      ]
    }),

  ]
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<MultiSelectComponent> = (args) => ({
  props: args,
  template: `
  <p class="mt-3" >Form value: {{ f.value | json }}</p>
  <form #f="ngForm" style="width:20rem">
  <app-multi-select ngModel name="userInput" [options]="options"> </app-multi-select>
                 </form> 
  `,
});

export const YourStory = Template.bind({});
YourStory.args = {
  options: [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
    { value: '6', label: 'Six' },
  ]
  /* 👇 The args you need here will depend on your component */
};