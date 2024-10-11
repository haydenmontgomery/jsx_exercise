const App = () => (
    <div>
        <Person name="Harry" age="12" hobbies={['whining', 'fighting voldemort']} />
        <Person name="Dumbeldore" age="80" hobbies={['teaching', 'not teaching']} />
        <Person name="Snape" age="42" hobbies={['potions', 'giving punishments']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));