//task 1: creating base structure
document.addEventListener("DOMContentLoaded", () =>
{
    console.log("Risk Dashboard Loaded"); 
    const form = document.getElementById("inputForm"); 

    form.addEventListener("submit", function(event) 
    { 
        const riskName = document.getElementById("risk").value 
        const riskLevel = document.getElementById("riskLevel").value 
        const department = document.getElementById("department").value 
        addRiskItem(riskName, riskLevel, department); 
        this.reset(); 
    });
//task 5: implementing bulk updates
document.getElementById("allIncrease").addEventListener("click", allIncrease);
});

//task 2: adding risk items dynamically
function addRiskItem(riskName, riskLevel, department) //function that creates new risk cards
{ 
    const riskDashboard = document.getElementById("riskDashboard"); 
    const riskCard = document.createElement("div"); //adding new card with div
    riskCard.classList.add("riskCard"); 
    riskCard.setAttribute("storedLevel",riskLevel); //task 5

    //task 4: categorizing risks by their level through different colors
    if (riskLevel === "Low") {
        riskCard.classList.add("lowRisk"); 
    } else if (riskLevel === "Medium") {
        riskCard.classList.add("mediumRisk"); 
    } else if (riskLevel === "High") {
        riskCard.classList.add("highRisk"); 
    }
    riskCategories();

    //each risk card will contain: 
    const name = document.createElement("h3"); 
        name.textContent = `Risk Name: ${riskName}`;
    const level = document.createElement("p"); 
        level.textContent = `Risk Level: ${riskLevel}`;
        level.classList.add("riskLevel"); //task 5 

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
//task 4 : categorizing risk by levels
function riskCategories() //assigning each risk level a color based on if they are high, medium, or low
{
    document.querySelectorAll(".highRisk").forEach(item => {item.style.backgroundColor = "rgb(244, 74, 74)"});
    document.querySelectorAll(".mediumRisk").forEach(item => { item.style.backgroundColor = "rgb(252, 255, 159)"});
    document.querySelectorAll(".lowRisk").forEach(item => { item.style.backgroundColor = "rgb(182, 254, 136)"});
}
// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance"); // Clicking "Resolve" should remove this risk from the dashboard.
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR");// Clicking "Increase Risk Levels" should change it to "Medium".