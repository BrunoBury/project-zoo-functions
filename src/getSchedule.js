const data = require('../data/zoo_data');

const scheduleDays = (days) => {
  const obj = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      obj[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      obj[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: data.species.filter((specie) =>
          specie.availability.includes(day)).map((specie) =>
          specie.name),
      };
    }
  });
  return obj;
};

const dailySchedule = (day) => {
  const obj = {};
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  obj[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: data.species.filter((specie) =>
      specie.availability.includes(day)).map((specie) =>
      specie.name),
  };
  return obj;
};

const animalDay = (animal) => data.species.find((specie) => specie.name === animal).availability;

const getSchedule = (scheduleTarget) => {
  const name = data.species.map((specie) => specie.name);
  const days = Object.keys(data.hours);
  if (name.includes(scheduleTarget)) {
    return animalDay(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return dailySchedule(scheduleTarget);
  }
  return scheduleDays(days);
};

console.log(getSchedule(''));
module.exports = getSchedule;
