document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("portfolioChart");

  new Chart(ctx, {
    type: "bar", // bisa diganti "pie", "doughnut", "line"
    data: {
      labels: ["Popularitas Lokal", "Varian Menu", "Kualitas & Rasa"],
      datasets: [{
        label: "Tingkat Pencapaian (%)",
        data: [85, 70, 95],
        backgroundColor: [
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 99, 132, 0.7)"
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
});
