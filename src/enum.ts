const enum LoginStatus {
    Success,
    InvalidInput,
    InvalidAccount,
    LockedAccount,
    OtherError,
}
let success: LoginStatus = LoginStatus.Success;
console.log("Enum LoginStatus");
console.log("Index      :", LoginStatus["Success"]);
console.log("Property   :", success);
console.log();

enum Gender {
    Male,
    Female,
    Other,
}
let male: Gender = Gender.Male;
console.log("Enum Gender:", Gender);
console.log("Index (num):", Gender[0]);
console.log("Index (str):", Gender["Male"]);
console.log("Property   :", male);
console.log();

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
let up: Direction = Direction.Up;
console.log("String enum:", up);

// let directionType: keyof typeof Direction = "Up";
// or
type DirectionType = keyof typeof Direction;
let directionType: DirectionType = "Up";
console.log("Other way  :", directionType);

let direct: Direction = Direction.Down;
switch (direct as Direction) {
    case Direction.Up:
        console.log("Direction  :", Direction.Up);
        break;
    case Direction.Down:
        console.log("Direction  :", Direction.Down);
        break;
    case Direction.Left:
        console.log("Direction  :", Direction.Left);
        break;
    case Direction.Right:
        console.log("Direction  :", Direction.Right);
        break;
    default:
        break;
}
