//task 1: creating base structure
document.addEventListener("DOMContentLoaded", () => 
{
    console.log("Risk Dashboard Loaded"); 
});

//task 2: adding risk items dynamically
function addRiskItem(riskName, riskLevel, department) //function that creates new risk cards
{ 
    const riskDashboard = document.getElementById("riskDashboard"); 
    const riskCard = document.createElement("div"); //adding new card with div
    riskCard.classList.add("riskCard"); 

    //each risk card will contain: 
    const name = document.createElement("h3"); 
        name.textContent = `Risk Name: ${riskName}`;
    const level = document.createElement("p"); 
        level.textContent = `Risk Level: ${riskLevel}`;

    const department = document.createElement("p"); 
        department.textContent = `Department: ${department}`;


    //task 3: removing risk items
    //adding a resolve button to modify addRiskItems
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function(){ticketContainer.removeChild(riskCard);});

    //appending all these elements to the interactive dashboard
    riskCard.appendChild(name);
    riskCard.appendChild(level);
    riskCard.appendChild(department);
    riskCard.appendChild(resolveButton);
    riskDashboard.appendChild(riskCard); 
}
// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance"); // Clicking "Resolve" should remove this risk from the dashboard.

   