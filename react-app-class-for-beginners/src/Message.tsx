
//PascalCasing
function Message () {
    //JSX: JavaScript XML --> compile as JavaScript Code, to see, put in babeljs.io/repl
    const name = 'doug';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>
}

export default Message;