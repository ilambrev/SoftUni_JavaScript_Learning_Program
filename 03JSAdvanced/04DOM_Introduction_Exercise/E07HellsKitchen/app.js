function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
   const workersOutput = document.querySelector('#workers p');

   function onClick() {

      const inputData = JSON.parse(document.querySelector('#inputs textarea').value);

      const restaurants = [];

      const calcAverageSalary = (workers) => {
         return workers.reduce((acc, curr) => acc += curr.salary, 0) / workers.length;
      }

      const calcBestSalary = (workers) => {
         return workers.sort((w1, w2) => w2.salary - w1.salary)[0].salary;
      }

      inputData.forEach(record => {
         const [restaurantName, workersData] = record.split(' - ');
         const workers = [];

         workersData.split(', ').forEach(record => {
            let [name, salary] = record.split(' ');
            salary = Number(salary);
            workers.push({ name, salary });
         });

         if (restaurants.filter(r => r.name === restaurantName).length === 0) {

            const newRestaurant = {
               name: restaurantName,
               workers: workers,
               averageSalary: 0,
               bestSalary: 0,
            }

            restaurants.push(newRestaurant);
         } else {

            const index = restaurants.findIndex(r => r.name === restaurantName);
            restaurants[index].workers = restaurants[index].workers.concat(workers);
         }
      });

      restaurants.forEach(r => {
         r.averageSalary = calcAverageSalary(r.workers);
         r.bestSalary = calcBestSalary(r.workers);
      })

      const bestRestaurant = restaurants.sort((r1, r2) => r2.averageSalary - r1.averageSalary)[0];

      bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      workersOutput.textContent = bestRestaurant.workers.sort((w1, w2) => w2.salary - w1.salary)
         .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
         .join(' ');

   }
}