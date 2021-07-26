function largestSubarraySum(array) {
    let maxSoFar = array[0];
    let globalMax = array[0];
    for (let i=1; i < array.length; i++) {
        globalMax = Math.max(globalMax + array[i], array[i]);
        maxSoFar = Math.max(maxSoFar, globalMax);
    }
    maxSoFar > 0 ? maxSoFar : maxSoFar = 0
    return maxSoFar;
}

largestSubarraySum(array)