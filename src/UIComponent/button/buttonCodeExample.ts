const BUTTON_CODE_EXAMPLE = {
  sizenVariant: `
<Button variant="text" size="small"> Text </Button>
<Button variant="contained" size="medium"> Contained </Button>
<Button variant="outlined" size="large"> Outlined </Button>
    `,
  icon: `
<Button variant='outlined' startIcon={<IoBagRemoveOutline />}>
    Icon Button
</Button>
<Button variant='outlined' endIcon={<IoBagRemoveOutline />}>
    Icon Button
</Button>`,
  clicknDisabled: `
<Button variant='outlined' onClick={() => { alert("Button Clicked"); }}>
    onClick Button
</Button>
<Button variant='outlined' onClick={() => { alert("Button Clicked"); }} disabled>
    Disabled Button
</Button>
`,
hrefnClasses:`
<Button variant='outlined' href='https://www.google.com/'>
    Href
</Button>

<Button variant='outlined' classes='custom-button'>
    Custom Style
</Button>`
};

export default BUTTON_CODE_EXAMPLE;
