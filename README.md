# TICKLE by Kevin Wang

### About
This is a simple-page React application that allows users to input data; currently ```age```, ```gender``` and pre-existing ```condition``` are the only fields needed in order to get a yearly quote from the insurance company. Styled using Bootstrap.

The user enters this information into the form on the left side of the page and once submitted the amount that the user has to pay annually is displayed on the right side of the page.

Design is based off of how typical insurance sites are, where you fill out information for one individual at a time. In the challenge prompt there are 3 expected inputs so in this application the user must enter information of one individual at a time. (*Since the form, ```QuoteForm```, is a component, with some revision it could be designed to render multiple forms so we can give quotes for multiple people at once AND if we need more input information from users we only need to edit this component*).

### Running the application
You must run ```npm install``` to install the dependencies through the CLI. There is only React and Mocha currently however adding new modules is simple.

To serve, run ```npm start``` and the application will start and bring you to the webpage.

To run tests, run ```npm test``` and results will display in the CLI. Currently there are 12 tests; all testing out the return values for the functions that calculate the users premium.


### Design and Tradeoffs

Everything is broken into components:

1. The ```App``` component is the main component that is rendered and it holds the state. It also renders the subsequent components listed below.

  * The state contains the individuals name and the amount the individual needs to pay annually. This state is passed down into the ```QuoteDisplay``` component to be used.

  * Because there is not much state to be tracked, I did not find a need to use Redux as a state container. However if more components/states needs to be tracked this can easily be modifiable.

2. The ```QuoteForm``` component is the form itself.

  * All fields besides ```name``` are dropdowns currently.

  * Since there are only 3 options and you can **only** select one of each, a dropdown seems like the best choice for the time being. If more selections are needed then values just need to be added into the array for which these dropdown selections are created from. This saves space on the page as well, as opposed to radio buttons if it becomes too large.

  * Benefits for dropdowns is that we are in control of the values that are passed in, we prevent any misspellings or faulty data that users may enter.

3. The ```QuoteDisplay``` component displays the information for the user to see.

  * The purpose for this component to be shown next to the form is so that the user can redo the form and see the updated results without the need for going to the previous page.

  * Since it is a component this can easily be changed to be rendered in specific instances; for example, when the URL matches a certain pattern using React router.

There is a ```helpers.js``` that contains all the functions that are used to calculate the premiums.

The logic to calculate price is as follows:

1. First we use the age to the calculate the increased base price using the function ```baseAndAgeIncrease(age)```

2. With the amount that we get back from above we pass it into ```checkCondition(amount, condition)``` along with the condition to see how much more to upcharge.

3. Then with this amount we look at the individual's gender and give them a discount if they are female ```femaleDiscount(amount)```.

4. This amount is now stored in the state in the App and is rendered out in the ```QuoteDisplay``` component for the user to see.

By modularizing these functions, it keeps our code cleaner in the components and more manageable if we need to add more functions later on. This also makes it easier to test.
