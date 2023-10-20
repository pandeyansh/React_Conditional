function Result (){
    const checkstatus=(event)=>
    {
        const age=parseInt(event.target.elements.age.value);
    if(age>=18)
    {
        alert("you can vote");
    }
    else{
alert("you can not vote");
    }
    }
    return(
        <div>
        <form onSubmit={checkstatus}>
        <label>Enter your age:</label>
        <input type="number" id="age" required />
        </form>
        </div>
    );
}
export default Result;