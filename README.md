Write a code to calculate the score of a Rock, Paper, Scissor game.

The input will be an array of two letters, each letter is the action of one player.
For example ["R R","R P","S P"] means they played 3 rounds. First round they both played Rock, second round player 1 played Rock and player 2 Paper, ....

Each player gets 0 for tie, 1 for win and -1 for loosing a round.

If one player wins 3 rounds consecutively then that player gets a bonus point and for each extra consecutive win they get an extra point.

# ReUseableModal

## About Project

Purpose of this project is to create Reuseable Accessible Modal using React.
Same modal can be used across website with different configuration based on user requirements.
Project has been developed using TDD approach with React Testing Library. Jest and Enzyme used in application testing. Unit test cases are developed to check functionality and accessibilty of Modal component.

_The project is structured in following way_

A) HomePage: It contains header and main section. Header has one button to toggle between opus and aqua theme. Main section has 3 button which on click event opens up modals.

B) There are 3 types of modals created:

- Confirmation modal: Contains header, main content and footer with 2 buttons and close dialog button
- Subscribe modal: Contains main content, footer with 1 button and close dialog button
- Information modal: Contains main content with close dialog button

Modal can be customized to show any or all section based on configuration passed like header, main, footer. Number of buttons on footer, position of modal on screen and modal content can be customised based on user requirements.

- Data configuration for modal are stored in App_Data folder

## Styled Component : Styling Library

- Full theming support by exporting a <ThemeProvider> wrapper component. Using this, developed Modal for Opus & Aqua theme, making it easy to toggle between both themes
- Used createGlobalStyle to override global styling (e.g. background color of home page)
- Defined themes with the use of props.theme

## Accessibility as per WCAG 2.1 - AA standards

- Checklist {https://www.w3.org/WAI/WCAG21/quickref/} : to confirm project is meetinng WCAG 2.1 - AA standards
- Made it screen readers compliant by providing appropriate roles and aria-\* attributes
- Implemented the focus trap on modal to prevent interaction with background elements when modal is in open state. Pressing the TAB or SHIFT + TAB keys will only allow the user to navigate inside the modal. Escape key will close the modal.
- Used Siteimprove Accessibility Checker plugin to check styling and other Accessibility standards

## Unit Testing performed

- Automated testing coverage
  - Functionlity of home page and theme button
  - Accessibility violations
- Manual testing coverage
  - Lighthouse
  - Siteimprove Accessibility Checker
  - keyboard
  - VoiceOver

* Manual testing screenshots are saved in ./screenshot folder

## Scope of Improvements

- Implementing ‘SKIP-TO-CONTENT’ on Home Page to help keyboard users and screen readers jump from the top of the page to the content without having to go through all the navigation links in the header section (best accessibility practice to follow)
- Import i18next library and store language in text file
- Multiple themes incorporated with same component just different styling
- Email field validation on subscribe modal
- Functionality of action button (Apply and Subscribe) on modals
- Media.js could be imported to configure styles based on device type
- Seperate file to store color hex codes and then import it in styles

### Execution

#### Commands to execute in IDE

- To install dependencies:
  - npm install
- To spin up the app:
  - npm run start
- To run test cases:
  - npm run test
