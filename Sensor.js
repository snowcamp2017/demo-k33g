const Worker = require('./Worker').Worker;
const Component = require('./Component').Component;


class Sensor extends Worker {
  constructor({id, minValue, maxValue, delay}) {
    super({id, delay});
    this.component = new Component({minValue, maxValue});

  }
  generateData() {
    let now = new Date();
    let t = now.getMinutes() + now.getSeconds() / 100;
    this.component.value = this.component.getLevel(t);
  }
  getData() {
    return {
      id: this.id,
      value: this.component.value,
      unit: this.component.unit,
      delay: this.delay,
      min: this.component.min,
      max: this.component.max,
      kind: "I am a 🐼"
    }
  }
}

module.exports = {
  Sensor: Sensor
};
