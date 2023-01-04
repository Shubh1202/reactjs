function myFunction(){
    return (Math.random() < 0.1) ? "Heads" : "Tails";
}

const ConditionJsx = () => {
/*
    return (
        <div className="div-style">
            <label>Enter your age:</label>
            <input type="number" name="age" className="input-class"/>
        </div>
    )
    */
   let coin = {
        head : "https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq",
        tail : "https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq"
   }

   let age = 18;
   let msg;

   if(age>21){
        msg = "You are elegible for marriage";
   }else{
    msg = "You are not elegible for marraige because you are under 18";
   }

   return (
        <div>
            <h1><u>This is condition if()-else & Ternary JSX</u></h1>
            <div className="div-style">
                <h2>User age checking for marriage</h2>
                <h3>{msg}</h3>
                <p>Your toss is : <img src={(myFunction()==="Heads") ? coin.head : coin.tail} width="100"/></p>
            </div>
        </div>
   );
}

export default ConditionJsx;