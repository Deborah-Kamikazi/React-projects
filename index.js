// Exercise 1

const page = (
     <div>
    <h1>here is the sum of the number {5+5}</h1>
     <h2> welcome</h2>
     </div>)
     console.log(page)
ReactDOM.render( page,document.getElementById("root"));
// Exercise 2 using {} to add expression in JSX

 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(<h1> here is the sum {5+6} </h1>)


  // Exercise 3 Create a navbar in JSX:
    // - Use the semantic `nav` element as the parent wrapper
    // - Have an h1 element with the brand name of your "website"
    // - Insert an unordered list for the other nav elements
    //     - Inside the `ul`, have three `li`s for "Pricing",
    //     "About", and "Contact"
const navs = (
    <nav>
      <h1>website</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
)

ReactDOM.render(navs,document.getElementById('root'))