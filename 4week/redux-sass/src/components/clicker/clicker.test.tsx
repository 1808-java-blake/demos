import * as React from 'react';
import { shallow } from "enzyme";
import { ClickerComponent } from "./clicker.component";
import { ClickerDisplay } from "./clicker-display/clicker-display.component";
import { ClickerIncrementer } from './incrementers/clicker-incrementer.component';

describe('<ClickerComponent />', () => {
  const filler: any = null;
  it ('renders one <ClickerDisplayComponent />', () => {
    const wrapper = shallow(<ClickerComponent {...filler}/>);
    expect(wrapper.find(ClickerDisplay)).toHaveLength(1);
  })

  it ('renders one <ClickerIncrementer />', () => {
    const empty: any = null;
    const wrapper = shallow(
      <ClickerComponent 
        clicks={19}
        increment={empty}
        buyJoke={empty}/>);
    expect(wrapper.find(ClickerIncrementer)).toHaveLength(1);
  })

  it ('renders two <ClickerIncrementer />', () => {
    const empty: any = null;
    const wrapper = shallow(
      <ClickerComponent 
        clicks={20}
        increment={empty}
        buyJoke={empty}/>);
    expect(wrapper.find(ClickerIncrementer)).toHaveLength(2);
  })
})