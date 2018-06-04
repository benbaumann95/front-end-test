# HubBox Frontend Developer Test

## Setup

- install yarn
- run 'yarn' this should install a load of dependencies
- run 'yarn develop' this should boot a webserver on port 8000

## What we're looking for

- Improve the UX / UI of the contact form to make it useable
- Think about adding the following elements
    - Some layout so the form looks better
    - Some field labels
    - Better button text
    - Better validation
    - Better validation feedback
    - Appropriate styling for the validation messages
    - A success message (hint: you may need to add something to the state to do this)
    
## Howto do it

- open src/pages/index.js
- look at the 'render' method
    - the render method contains all the markup for the form
    - notice the change handlers (these do the data binding and state)
- start editing markup and javascript in this file
- to add styles look into src/layouts/index.css
    - remember to use className not class as this is a react document
 
