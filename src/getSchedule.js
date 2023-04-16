const data = require('../data/zoo_data');

// const scheduleDays = () => {

//     obj{
//         dia{
//             officeHour: `Open from ${data.hours.day.open}am until ${data.hours.day.close}pm`
//             exhibition: [data.species.name 'todas']
//         }
//     }
// };
// const dailySchedule = (day) => {
//   if (day === 'Monday') {
//     return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
//   } if (day !== 'Monday') {
//     return
//   }
// };

const animalDay = (animal) => data.species.find((specie) => specie.name === animal).availability;

const getSchedule = (scheduleTarget) =>
  animalDay(scheduleTarget);
//   const name = data.species.find((specie) => specie.name);
//   const day = data.species.find((specie) => specie.name).availability;
//   if (!scheduleTarget || scheduleTarget !== name || scheduleTarget !== day) {
//     return scheduleDays;
//   }

// console.log(animalDay('giraffes'));
console.log(getSchedule('lions'));
module.exports = getSchedule;
