const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Michael Jordan"/>
    </div>
    
)

ReactDOM.render(<App />, document.getElementById("root"));