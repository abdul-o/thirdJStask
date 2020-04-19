   
   function replace ( wholeNumber){
     for ( let i= 1; i <= wholeNumber; i++){
       
       if( i % 2 === 0 && i % 3 === 0){
          console.log("yu-gi");
        }
        else if ( i % 2 === 0 && i % 5 === 0){
           console.log("yu-oh");
        }
        else if( i % 3 === 0 && i % 5 === 0){
           console.log("gi-oh");
        }
       else if (i % 2 === 0 ){
          console.log("yu");
     }
       else if( i % 3 === 0){
          console.log("gi");
       }
       else if ( i % 5 === 0){
         console.log("oh");
       }
      
       else {
           console.log(i)
       }
      }
     };

    replace(100);
    replace(10);