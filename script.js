function searchDrug() {
  const drug = document.getElementById("drugInput").value;
  const list = document.getElementById("pharmacyList");

  list.innerHTML = ""; // clear old results

  if (drug.trim() === "") {
    alert("Please type a drug name!");
    return;
  }

  // Demo result – you can connect real data later
  const samplePharmacies = [
    { name: "CityCare Pharmacy", location: "Kano Main Road" },
    { name: "HealthPlus Pharmacy", location: "Sabon Gari" },
  ];

  samplePharmacies.forEach((pharmacy) => {
    const li = document.createElement("li");
    li.textContent = `${pharmacy.name} – ${pharmacy.location}`;
    list.appendChild(li);
  });
}
