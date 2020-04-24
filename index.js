var controller = (()=>{

  let exp = "";

  let dom = {
    operation: 'document.querySelector("#operation")'
  };

  //CHECKING INPUT AND DISPLAYING ON CALCULATOR
  displayInput = (e) => {

    if (e.target.value == "reset"){
      exp = "";
      operation.setAttribute("value", exp);
    }

    else if(e.target.value == "="){
      calculate(exp)
    } else {
      if(e.target.value == undefined ){
      } else {
        exp = exp + e.target.value;
        operation.setAttribute("value", exp);
      }
    }
  }

  //CALCULATING THE EXPRESSION
  calculate = (exp) => {
    let result = eval(exp);
    operation.setAttribute("value", result);
  }

  //EVENTHANDLER
  eventHandler = () =>{
    document.querySelector(".button-container").addEventListener("click", displayInput);
  };

  return{
    init: ()=>{
      console.log("App Started");
      eventHandler();
    }
  }

})();

controller.init()
