class BinarySearch 
{
    
searchFun(arr,searchelement)
{ 
   
    let startindex=0, endindex=arr.length-1; 
          
    // Iterate while start not meets end 
    while (startindex<=endindex)
    { 
  
        // Find the mid index 
        let mid=Math.floor((startindex + endindex)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid]===searchelement) return true; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < searchelement)  
        startindex = mid + 1; 
        else
        endindex = mid - 1; 
    } 
   
    return false; 
} 
}
module.exports = BinarySearch;
