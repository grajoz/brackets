module.exports = function check(str, bracketsConfig) {
  let op;
  let clo;
   
  let strArrControl=[];
  let strArr=[];
  strArr=str.split('');
  console.log(strArr);
  
 
  for (j=0;j<bracketsConfig.length;j++){
      
      
            for (i=0;i<strArr.length;i++){
              
              
              if(strArr[i]==bracketsConfig[j][0]||strArr[i]==bracketsConfig[j][1]){
                c
                strArrControl.push(strArr[i]);
              }
            }
      
      if (strArrControl.length%2!==0){return false};
  
  
      while (strArrControl.length ==0){
          for (i=1;i<strArrControl.length;i++){
            if(strArrControl[i]==strArrControlr[i-1]){
              strArrControl.splice(i-1, 2);
            }else{return false};
  
            
      }
      }
  }
  return true
  
    
    // your solution
  }
  