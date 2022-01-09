function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch("https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
                    "x-rapidapi-key": "eee3a732f0msh90c36927acde17bp198081jsn1f97ee7674ec"
                }
            })
            const json     = await response.json();
            setData(json);
            console.log(json);
            setLoaded(true);
        }
        getData();
    },[])

    return (<>
        <div className="container">
            <h1>React Components</h1>
            {loaded && data.map((brewery,i) => 
                <Brewery data={brewery} key={i} />)}
            <footer><p>Sean Barr &copy; 2022</p></footer>
        </div>  
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
