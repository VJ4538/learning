import React from "react";
import Button from "./component/Button";
import DemoSectionWrapper from "../demoSection/DemoSection";
import BUTTON_CODE_EXAMPLE from "./buttonCodeExample";
import { IoBagRemoveOutline } from "react-icons/io5";

const ButtonDemo = () => (
  <div>
    <h1 style={{ textAlign: "center" }}>Button Demo</h1>
    <DemoSectionWrapper
      title='Button Size & Variant'
      description='Button come with different sizes.'
      codeExample={BUTTON_CODE_EXAMPLE.sizenVariant}>
      <Button variant='text' size='small'>
        Small Button
      </Button>
      <Button variant='outlined'>Medium Button</Button>
      <Button variant='contained' size='large'>
        Large Button
      </Button>
    </DemoSectionWrapper>

    <DemoSectionWrapper
      title='Button Icon'
      description='Attach a Icon to the start or the end of the button.'
      codeExample={BUTTON_CODE_EXAMPLE.icon}>
      <Button variant='outlined' startIcon={<IoBagRemoveOutline />}>
        Icon Button
      </Button>
      <Button variant='outlined' endIcon={<IoBagRemoveOutline />}>
        Icon Button
      </Button>
    </DemoSectionWrapper>

    <DemoSectionWrapper
      title='Button OnClick & Disabled'
      description='Attach a function to button or disable the button.'
      codeExample={BUTTON_CODE_EXAMPLE.clicknDisabled}>
      <Button
        variant='outlined'
        onClick={() => {
          alert("Button Clicked");
        }}>
        onClick Button
      </Button>
      <Button
        variant='outlined'
        onClick={() => {
          alert("Button Clicked");
        }}
        disabled>
        Disabled Button
      </Button>
    </DemoSectionWrapper>

    <DemoSectionWrapper
      title='Button Href and custom classes'
      description='Attach a href and classes to the button.'
      codeExample={BUTTON_CODE_EXAMPLE.clicknDisabled}>
      <Button variant='outlined' href='https://www.google.com/'>
        Href
      </Button>

      <Button variant='outlined' classes='custom-button'>
        Custom Style
      </Button>
    </DemoSectionWrapper>
  </div>
);

export default ButtonDemo;
