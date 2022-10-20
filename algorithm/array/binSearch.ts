function binSearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binSearch([-1, 3, 5, 8, 9, 42, 100], 9));
console.log(binSearch([-1, 3, 5, 8, 9, 42, 100], 2));
