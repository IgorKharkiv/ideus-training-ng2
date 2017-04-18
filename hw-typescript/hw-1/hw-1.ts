interface CarInterface {
    mark: string;
    wheels: number;
    timeAcceleration: number;
    timeBraking: number;

    run();
    stop();
}

abstract class Car implements CarInterface {

}