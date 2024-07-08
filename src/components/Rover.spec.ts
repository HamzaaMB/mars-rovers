import Rover, { moveRover } from './Rover'

describe('Rover class', () => {
  let rover: Rover

  beforeEach(() => {
    rover = new Rover(1, 2, 'N')
  })

  test('getPosition method', () => {
    expect(rover.getPosition()).toBe('1 2 N')
  })

  test('turnLeft method', () => {
    rover.turnLeft()
    expect(rover.getPosition()).toBe('1 2 W')
    rover.turnLeft()
    expect(rover.getPosition()).toBe('1 2 S')
    rover.turnLeft()
    expect(rover.getPosition()).toBe('1 2 E')
    rover.turnLeft()
    expect(rover.getPosition()).toBe('1 2 N')
  })

  test('turnRight method', () => {
    rover.turnRight()
    expect(rover.getPosition()).toBe('1 2 E')
    rover.turnRight()
    expect(rover.getPosition()).toBe('1 2 S')
    rover.turnRight()
    expect(rover.getPosition()).toBe('1 2 W')
    rover.turnRight()
    expect(rover.getPosition()).toBe('1 2 N')
  })

  test('move method', () => {
    rover.move()
    expect(rover.getPosition()).toBe('1 3 N')
    rover.turnRight()
    rover.move()
    expect(rover.getPosition()).toBe('2 3 E')
    rover.turnLeft()
    rover.move()
    expect(rover.getPosition()).toBe('2 4 N')
  })

  test('executeCommands method with valid commands', () => {
    rover.executeCommands('LMLMLMLMM')
    expect(rover.getPosition()).toBe('1 3 N')
  })

  test('executeCommands method throws error on invalid command', () => {
    expect(() => rover.executeCommands('LMLMLMLXM')).toThrowError('Invalid command: X')
  })

  test('Rover executes another set of commands correctly', () => {
    const rover = new Rover(3, 3, 'E')
    rover.executeCommands('MMRMMRMRRM')
    expect(rover.getPosition()).toBe('5 1 E')
  })
})

/* Move Rover Function */

describe('moveRover', () => {
  test('throws error for invalid input format', () => {
    const input = `5 5
      1 2 N
      LMLMLMLMM
      3 3 E`

    expect(() => moveRover(input)).toThrow('Invalid input format')
  })

  test('throws error for non-numeric plateau dimensions', () => {
    const input = `5 X
      1 2 N
      LMLMLMLMM
      3 3 E
      MMRMMRMRRM`

    expect(() => moveRover(input)).toThrow('Invalid plateau dimensions')
  })

  test('throws error for invalid rover position', () => {
    const input = `5 5
      1 2 N
      LMLMLMLMM
      A 3 E
      MMRMMRMRRM`

    expect(() => moveRover(input)).toThrow('Invalid rover position')
  })

  test('throws error for invalid commands', () => {
    const input = `5 5
      1 2 N
      LMLMLMLMM
      3 3 E
      MMRMMRMXRM`

    expect(() => moveRover(input)).toThrow('Invalid command')
  })
})