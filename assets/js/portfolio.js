// Chart.js Setup
const ctx = document.getElementById('portfolioChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'Pertumbuhan Kopiga',
      data: [10, 35, 60, 120, 200],
      borderColor: '#6d4c41',
      backgroundColor: 'rgba(109, 76, 65, 0.3)',
      tension: 0.4,
      fill: true,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBackgroundColor: '#ffcc66'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Scroll animation
const elements = document.querySelectorAll('.fade-in, .fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
