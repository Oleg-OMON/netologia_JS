export default function unitHealth(obj) {
    let result;
    if (obj.health > 50) {
        result = "healthy"
    }

    if (obj.health <= 50 && obj.health > 15) {
        result = "wounded"
    }

    if (obj.health < 15) {
        result = "critical"
    }
    if (Number.isNaN(obj.health) || obj.health === undefined || obj.health < 0 || typeof (obj.health) !== 'number') {
        throw new Error('Parameter is not a number!');
    }

    return result
}