module.exports = function check(str, bracketsConfig) {
  let op;
  let clo;
   
  let strArrControl=[];
  let strArr=[];
  strArr=str.split('');
 
  
  
  for (j=0;j<bracketsConfig.length;j++){
      
      
            for (i=0;i<strArr.length;i++){
              
              
              if(strArr[i]==bracketsConfig[j][0]||strArr[i]==bracketsConfig[j][1]){
               
                strArrControl.push(strArr[i]);

              }
             

            }
      
      if (strArrControl.length%2!==0){return false};
   
      let r=0; 
      let u=strArrControl.length;
          while (strArrControl.length!==0){
             
              for (let i=1;i<strArrControl.length;i++){
                 
  
                if(strArrControl[i-1]==bracketsConfig[j][0]&&strArrControl[i]==bracketsConfig[j][1]){
                  strArrControl.splice(i-1, 2);
                  
                }
      
                
          }
          r=r+1;
      if (r>u)   { return false} 
      }
  }
  return true
  
    
    // your solution
  }
  
  