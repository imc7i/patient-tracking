document.getElementById("patientForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const admitDate = new Date(document.getElementById("admitDate").value);
  
  const day2 = new Date(admitDate);
  day2.setDate(admitDate.getDate() + 2);

  const day5 = new Date(admitDate);
  day5.setDate(admitDate.getDate() + 5);

  const format = d => d.toISOString().split('T')[0];

  const table = document.getElementById("patientsTable");
  const row = table.insertRow();
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = format(admitDate);
  row.insertCell(2).textContent = format(day2);
  row.insertCell(3).textContent = format(day5);

  document.getElementById("patientForm").reset();
});
