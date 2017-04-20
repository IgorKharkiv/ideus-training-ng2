let x: [string, number];

x = ['test', 10];
x = ['test', 10, 'test', 10];

interface Car {
    run();
    stop();
}

class Truck {
    constructor(car: Car) {

    }
}

interface IService {
    get();
}

abstract class AbstractService {
    protected formatData(data: any) {
        return data.map(() => {});
    }
}

class Service extends AbstractService implements IService {
    get() {
        // get data from API
        this.formatData(data);
        // return data
    }
}

class StandardComponent {
    constructor(service: IService) {

    }
}

class MockService extends AbstractService implements IService {
    get() {
        let data = {
            someData: {}
        };

        this.formatData(data);
    }
}