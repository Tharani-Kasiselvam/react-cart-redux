# Cart Price values changes as per Quantity using REDUX

    - A selected Product is loaded on the webpage
    - based on the Increment and Decrement of the Quantity, the Price of the product changes
    - Redux toolkit library is used to maintain the state for increment and decrement of the product.   
    - Created a Slice Object to maintain the State variables for Increment, Decrement and Reset.   
    - Exported the states into actions.   
    - Exported the sliceobject as reducer to define in store.   
    - Exported all the state variables into single slice object name.   
    - Created a store to define the Reducer function.   
    - *useSelector* selects the entire state variables and the values are fetched from store.   
    - *useDispatch* executes the Reducer function.   
    - Restriction enabled to avoid selection of quantity less than one.   
    - Product price varies based on Product quantity selection.   

***Author:Tharani K***