var ctx = document.getElementById('graph').getContext('2d');

var list = [3, 4];

var chart = new Chart(ctx).Bar({
	labels: ["Question 1", "Question2"],
	datasets: [
		{
			data: list
		}
	]
}, {
	scaleFontColor: "#ff9100"
});
console.log(chart);

setInterval(function() {
	chart.datasets[0].bars[0].value++;
	chart.update();
}, 1000);
