# README - salesDock _by spiritSync_ v1

![logo](salesDockLogo.png)

## **The Brief**

We are looking to create an app which the sales teams (Brand Ambassadors) & the owners from our brands will be able to log into and do the following:

#### Step 1 - _Price List & Marketing Budgets_

- View Price Lists of their brands
- View Marketing Budgets of their brands

#### Step 2 - _Value Chain & Pricing_

- Input an example of a new product with details including the Ex Works Price, ABV, Size & Import Location
- The app will then calculate the following:
  - Duty
  - Final RRP
- Then the user will have an option to save the product to a database to view later or start again

## Technology, Languages & other tools to be used

    [x] Supabase Database
    [x] Express Server - (for development)
    [x] React
    [x] Git
    [x] Typescript
    [x] Vite
    [ ] Vercel

| Technology        | Comments                                                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Supabase Database | Supabase was chosen to host the databases due to ease of uploading from the CSV we had                                                                     |
| Express Server    | This was hosted locally for development purposes                                                                                                           |
| React             | as we were going to have multiple lines of similar data to be used in many different ways, we chose react so that we could create reusable components.     |
| Typescript        | We developed this app in Typescript rather than Javascript to ensure we had the most robust and bug free code throughout the process                       |
| Git               | We used the Git suite to keep track of our changes and share progress as we developed                                                                      |
| Vite              | Vite was chosen to aid the build phase of the app due to its ability to allow us to work locally. Using a popular and modern framework was also key for us |
| Vercel            | TBC                                                                                                                                                        |

## Explanation from the developer

When building this app I wanted to create something which would ensure the following points

- **The UI**

  - Mobile Friendly
  - The features on this app need to be accessed on the go
  - It will be used by many different people so needs to be as simple as possible

- **The Frontend**

  - The app will need to have the flexibility to have more features added
  - In the end there could be many product lines needing to be accessed on the app so core components would need to be reusable
  -

- **The Backend**
  - It is a reasonably simple set of data which would need to be accessed so the back end could be simple and easy to manipulate

## How it works

- **The System**

  - I chose a _Single-Page Application (SPA)_ when developing this. As this app is a tool for a business there was no need to ensure strong SEO and the SPA format ensures that the system is totally mobile friendly.
  - The header is a component which utilises the 'Context' feature in react and unchanging throughout the whole app.

- **Home Page**

  - Users are first directed to the home page which allows them to choose from the 3 key features of the app.
  - Each button changes the state of the app to show the information required.

- **Price Lists**

  - By clicking the price list button, the app makes a request to the Supabase Database, returning the data requested
  - Each line from the table within the Supabase Database is displayed on an individual "card" also drawing the correct imange for the SKU from the "PUBLIC" file within the program.

- **Marketing Budgets**

- This product works in the same way as the "Price Lists" section but requests and displays different information.

- **Value Chain**

- Rather than aoutomatically sending a request to the database, this section loads a form for the user to input information.
- This is a Tanstack Form with a number of inputs.
  - 2 x string inputs
  - 2 x number inputs
  - 1 x dropdown option input
- When this form is submitted the inputs are sent through a function which processes the information and outputs the following information:
  - Works out what Duty will needed to be added to the cost of each bottle
  - Asks which drop down coice was chosed for the Import Origin, each Import Origin carries it's own average cost for import so the function adds that on depending on the choice.
  - To then work out the RRP the function adds the retailer margin to offer guidance on the RRP.
- This information is then displayed to the user in a new state, with two other options:
  - Go back _(this takes the user back to an empty form to start again)_
  - Save Product (This saves the product to a different Supabase Database, ready to be used again in the future)
- Returning to the form page the user will find another button which will send a request to the Value Chain database and once pressed will show each saved product in a similar way to the Price List part of the app. Each product will be shown on its own card for easy readability.

## Future developments

There are many features planned to be added to this app or developed seperatly for the salesDock project, Including but not limited to the below:

- **Value Chain Developments**

  - A feature will be added which will also check the RRP of the product next to a set of criteria to offer advice on pricing
    - ie is the RRP too high or too low etc.

- **Inventory Management**

  - Helping to plan for stock orders by comparing sales data with inventory data

- **Marketing Requests**
  - Users able to complete a form to request marketing budgets for activations
  - This product would check against a live marketing budget and a sales plan to give a guide to the uder if it is likley to be signed off
  - The user will then decide if they would like to submit this for approval via email or not
