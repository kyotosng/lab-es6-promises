// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  //getInstruction("mashedPotatoes", 0, (step1) => {
    //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  //}, (error) => console.log(error));
  
  //getInstruction("mashedPotatoes", 1, (step2) => {
    //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  //}, (error) => console.log(error));
  
  //getInstruction("mashedPotatoes", 2, (step3) => {
    //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  //}, (error) => console.log(error));
  
  //getInstruction("mashedPotatoes", 3, (step4) => {
    //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  //}, (error) => console.log(error));
  
  //getInstruction("mashedPotatoes", 4, (step5) => {
    //document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    //document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  //}, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, function (step1) {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Potatoes are ready</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, function (error) {
  console.log(error)
});







  




// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 1)
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 2)
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 3)
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 4)
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 5)
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 6)
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction('steak', 7)
  })
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })  


// Iteration 3 using async/await
async function makeBrusselSprouts() {
  try {

    let step0 = await obtainInstruction('brusselsSprouts', 0)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;

    let step1 = await obtainInstruction('brusselsSprouts', 1)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;

    let step2 = await obtainInstruction('brusselsSprouts', 2)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;

    let step3 = await obtainInstruction('brusselsSprouts', 3)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;

    let step4 = await obtainInstruction('brusselsSprouts', 4)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;

    let step5 = await obtainInstruction('brusselsSprouts', 5)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;

    let step6 = await obtainInstruction('brusselsSprouts', 6)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;

    let step7 = await obtainInstruction('brusselsSprouts', 7)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel Sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

  } catch (err) {
    console.log(err)
  }
}
makeBrusselSprouts()

// Bonus 2 - Promise all
const step0 = obtainInstruction('broccoli', 0)
const step1 = obtainInstruction('broccoli', 1)
const step2 = obtainInstruction('broccoli', 2)
const step3 = obtainInstruction('broccoli', 3)
const step4 = obtainInstruction('broccoli', 4)
const step5 = obtainInstruction('broccoli', 5)
const step6 = obtainInstruction('broccoli', 6)

const allPromises = [step0, step1, step2, step3, step4, step5, step6]

Promise.all(allPromises).then(function (allSteps) {
  allSteps.forEach(function (step) {
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`
  })
})
  .then(function () {
    document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  })