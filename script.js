
async function getCareer() {
  const stream = document.getElementById("stream").value;
  const best_subject = document.getElementById("subject").value;
  const interest = document.getElementById("interest").value;

  const response = await fetch("https://your-app-name.up.railway.app/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stream, best_subject, interest })
  });

  const data = await response.json();
  const output = data.career ? `Recommended Career: ${data.career}` : `Error: ${data.error}`;
  document.getElementById("result").innerText = output;
}
