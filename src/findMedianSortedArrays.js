function findMedianSortedArrays(nums1, nums2) {
  const singleArray = nums1.concat(nums2).sort((a, b) => a - b);
  const isEven = singleArray.length % 2 === 0;
  if (isEven) {
    const targetIndex = singleArray.length / 2 - 1;
    const targetIndexStop = targetIndex + 1;
    return (singleArray[targetIndex] + singleArray[targetIndexStop]) / 2;
  } else {
    const targetIndex = Math.floor(singleArray.length / 2);
    return singleArray[targetIndex];
  }
}

module.exports = { findMedianSortedArrays };
